"use client";

import { createContext, useCallback, useEffect, useState } from "react";

import { auth } from "../lib/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { Toaster } from "@/components/ui/toaster";
import { useLocation, useNavigate } from "react-router-dom";

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = createContext(null);

export function UserProvider({ children }: AuthContextProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleUser();
  }, [auth, children]);

  const handleUser = useCallback(async () => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && location.pathname === "/") {
        navigate("/dashboard");
      } else if (!user && window.location.pathname !== "/") {
        navigate("/");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [location]);

  return (
    <AuthContext.Provider value={null}>
      {!loading ? children : null}
      <Toaster />
    </AuthContext.Provider>
  );
}
