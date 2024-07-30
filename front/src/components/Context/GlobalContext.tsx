"use client";
import { ReactNode, createContext, useState } from "react";

export const AuthContext = createContext({});
export const CartContext = createContext({});

const GlobalContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [currentCart, setCurrentCart] = useState({});
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <CartContext.Provider value={{ currentCart, setCurrentCart }}>
        {children}
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};

export default GlobalContext;
