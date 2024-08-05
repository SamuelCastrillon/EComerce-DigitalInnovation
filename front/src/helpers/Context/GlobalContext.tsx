"use client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IUserLoginRes } from "../interfaces/user.interface";
import { IProduct } from "../interfaces/products.interface";
import { DataToBack } from "../classDataProducts";

interface IAuthcontext {
  currentUser: IUserLoginRes | null;
  setCurrentUser: (currenUser: IUserLoginRes | null) => void;
}

export const AuthContext = createContext<IAuthcontext>({
  currentUser: null,
  setCurrentUser: () => {},
});

interface IProductsContext {
  allProducts: IProduct[] | [];
  setAllProducts: (allProducts: IProduct[] | []) => void;
}
export const ProductsContext = createContext<IProductsContext>({
  allProducts: [],
  setAllProducts: () => {},
});

export const CartContext = createContext({});

export const GlobalContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUserLoginRes | null>(null);
  const [allProducts, setAllProducts] = useState<IProduct[] | []>([]);
  const [currentCart, setCurrentCart] = useState({});

  async function getProduts() {
    // !currentCart.userId &&
    //   setCurrentCart(localData.getStorage(localData.userProductOrder + currentUserId));
    setAllProducts(await DataToBack.getAllProducts());
  }

  useEffect(() => {
    if (!currentUser) {
      const dataUser = localStorage.getItem("dataUserID:");
      if (dataUser) {
        const userParser: IUserLoginRes = JSON.parse(dataUser);
        setCurrentUser(userParser);
      }
    }
    if (allProducts.length === 0) {
      getProduts();
    }
  }, []);

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
