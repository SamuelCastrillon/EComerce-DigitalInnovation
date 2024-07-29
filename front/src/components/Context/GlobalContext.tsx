"use client";
import { ReactNode, createContext, useState } from "react";

export const AuthContext = createContext({});

const GlobalContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalContext;
