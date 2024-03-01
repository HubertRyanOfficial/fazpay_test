"use client";

import { createContext, useCallback, useEffect, useState } from "react";

import { auth } from "../lib/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { Toaster } from "@/components/ui/toaster";

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext(null);

export function UserProvider({ children }: AuthContextProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleUser();
  }, [auth, children]);

  const handleUser = useCallback(async () => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user?.email);
      if (user && window.location.pathname !== "/dashboard") {
        window.history.replaceState(null, "", "/dashboard");
      } else if (!user && window.location.pathname != "/") {
        window.history.replaceState(null, "", "/");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [location]);

  return (
    <AuthContext.Provider value={null}>
      {!loading ? children : <span>loading</span>}
      <Toaster />
    </AuthContext.Provider>
  );
}
