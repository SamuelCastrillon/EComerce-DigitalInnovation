"use client";
import { ReactNode, createContext, useState } from "react";

const AuthContext = createContext(null);

const GlobalContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <AuthContext.Provider<T>
      value={{
        currentUser,
        setCurrentUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default GlobalContext;
