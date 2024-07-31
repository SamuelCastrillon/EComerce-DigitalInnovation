"use client";
import { ReactNode, createContext, useState } from "react";

export const AuthContext = createContext({});
export const ProductsContext = createContext({});
export const CartContext = createContext({});

const GlobalContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [currentCart, setCurrentCart] = useState({});
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <ProductsContext.Provider value={{ allProducts, setAllProducts }}>
        <CartContext.Provider value={{ currentCart, setCurrentCart }}>
          {children}
        </CartContext.Provider>
      </ProductsContext.Provider>
    </AuthContext.Provider>
  );
};

export default GlobalContext;
