import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged as _onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
function getFirebaseApp() {
  const apps = getApps();

  if (apps.length > 0) {
    return apps[0];
  }

  return initializeApp(firebaseConfig);
}
export const firebaseApp = getFirebaseApp();
export const auth = getAuth(firebaseApp);

export const Authentication = () => {
  return auth;
};

export const SignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const SignOut = async () => {
  await signOut(auth);
};

export const onAuthStateChanged = (cb) => {
  return _onAuthStateChanged(auth, cb);
};

export const GetSignInErrorMessage = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "Akun tidak ditemukan. Silakan periksa email Anda.";
    case "auth/wrong-password":
      return "Password yang Anda masukkan salah. Silakan coba lagi.";
    case "auth/invalid-email":
      return "Email tidak valid. Silakan masukkan email yang benar.";
    case "auth/user-disabled":
      return "Akun ini telah dinonaktifkan.";
    case "auth/invalid-credential":
      return "Kredensial tidak valid. Silakan coba lagi.";
    default:
      return "Terjadi kesalahan. Silakan coba lagi.";
  }
};
