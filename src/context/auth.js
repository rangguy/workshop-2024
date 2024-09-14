import { Authentication } from "@/configs/firebase";
import { useEffect } from "react";

export default function AuthStateChangeProvider() {
  const InitiateAuthStateChange = () => {
    Authentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User is authenticated");
        console.log(user);
      } else {
        console.log("User is not authenticated");
      }
    });
  };

  useEffect(() => {
    InitiateAuthStateChange();
  }, []);
}
