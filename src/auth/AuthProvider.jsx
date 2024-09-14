import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { SignOut, onAuthStateChanged } from "@/configs/firebase";

export const AuthContext = createContext({
  user: null,
  isLoading: true,
  logout: SignOut,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const logout = useCallback(() => {
    return SignOut().then(() => {
      setUser(null);
      router.replace("/");
    });
  }, [router]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
