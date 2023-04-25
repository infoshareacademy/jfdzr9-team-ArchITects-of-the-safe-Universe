import { createContext, useState, useEffect, PropsWithChildren } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export interface AuthContextType {
  currentUser: firebase.User | null;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
});

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
