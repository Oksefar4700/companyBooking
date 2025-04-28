"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const authData = useProvideAuth();
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
  const signup = (email, pass) =>
    createUserWithEmailAndPassword(auth, email, pass);
  const logout = () => signOut(auth);

  return { user, loading, login, signup, logout };
}
