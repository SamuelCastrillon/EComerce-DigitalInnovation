"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { IUserLoginRes } from "../interfaces/user.interface";
import { IProduct } from "../interfaces/products.interface";
import { DataToBack } from "../classDataProducts";
import { ICurrentCart } from "../interfaces/IProductCard";
import { getCurrentCart, getCurrentUser } from "../localStorageManager";

export interface IAuthcontext {
  currentUser: IUserLoginRes | null;
  setCurrentUser: (currenUser: IUserLoginRes | null) => void;
}

export const AuthContext = createContext<IAuthcontext>({
  currentUser: null,
  setCurrentUser: () => {},
});

export interface IProductsContext {
  allProducts: IProduct[] | [];
  setAllProducts: (allProducts: IProduct[] | []) => void;
}
export const ProductsContext = createContext<IProductsContext>({
  allProducts: [],
  setAllProducts: () => {},
});

export interface ICartContext {
  currentCart: ICurrentCart;
  setCurrentCart: (currentCart: ICurrentCart) => void;
}

const CartInitialState: ICurrentCart = {
  products: [],
  userId: 0,
};

export const CartContext = createContext<ICartContext>({
  currentCart: CartInitialState,
  setCurrentCart: () => {},
});

export const GlobalContext = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<IUserLoginRes | null>(null);
  const [allProducts, setAllProducts] = useState<IProduct[] | []>([]);
  const [currentCart, setCurrentCart] = useState<ICurrentCart>(CartInitialState);

  async function getProducts() {
    setAllProducts(await DataToBack.getAllProducts());
  }

  function checkCartProducts() {
    if (currentUser) {
      const currentUserId = currentUser.user.id;
      const cartLocalDataString = getCurrentCart(currentUserId);
      cartLocalDataString && setCurrentCart(cartLocalDataString);
    }
  }

  useEffect(() => {
    if (!currentUser) {
      // const dataUser = localStorage.getItem("dataUserID:");
      const dataUser = getCurrentUser();
      // if (dataUser) {
      //   const userParse: IUserLoginRes = JSON.parse(dataUser);
      //   setCurrentUser(userParse);
      // }
      setCurrentUser(dataUser);
    }
    if (allProducts.length === 0) {
      getProducts();
    }
  }, []);

  useEffect(() => {
    checkCartProducts();
  }, [currentUser]);

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
