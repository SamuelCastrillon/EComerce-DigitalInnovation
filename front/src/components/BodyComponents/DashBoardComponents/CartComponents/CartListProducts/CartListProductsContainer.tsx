"use client";
import React, { useContext, useEffect, useState } from "react";
import CartProductCard from "../CartProductCard";
import {
  AuthContext,
  CartContext,
  IAuthcontext,
  ICartContext,
  IProductsContext,
  ProductsContext,
} from "@/helpers/Context/GlobalContext";
import { IProduct } from "@/helpers/interfaces/products.interface";
import { DataToBack } from "@/helpers/classDataProducts";
import {
  deletCurrentCart,
  getCurrentCart,
  getCurrentUser,
  saveCurrentCart,
} from "@/helpers/localStorageManager";

const CartListProductsContainer = () => {
  const { currentUser, setCurrentUser } = useContext<IAuthcontext>(AuthContext);
  const { allProducts, setAllProducts } = useContext<IProductsContext>(ProductsContext);
  const { currentCart, setCurrentCart } = useContext<ICartContext>(CartContext);
  const [productsToCart, setProductsToCart] = useState<IProduct[]>([]);

  const userID = currentUser?.user.id;

  async function checkCartProducts(id: number) {
    !currentUser?.login && setCurrentUser(getCurrentUser());
    !currentCart.userId && setCurrentCart(getCurrentCart(id));
    setAllProducts(await DataToBack.getAllProducts());
  }

  function updateProductsCart(idArray: number[], productsAarray: IProduct[]) {
    const products: IProduct[] | undefined = [];
    idArray.forEach((productId: number) => {
      const product = productsAarray.find((product: IProduct) => {
        return product.id === productId;
      });
      if (product) {
        products.push(product);
      }
    });
    setProductsToCart(products);
  }

  //? function delet product to cart
  function handelerDelet(id: number) {
    const currentUserId = currentCart.userId;
    const newUserOrder: { userId: number; products: number[] } = {
      userId: currentUserId,
      products: [],
    };
    currentCart.products.forEach(
      (idProduct: number) => idProduct != id && newUserOrder.products.push(idProduct)
    );
    // localData.deletStorage(localData.userProductOrder + currentUserId);
    deletCurrentCart(currentUserId);
    // localData.saveStorage(localData.userProductOrder, currentUserId, newUserOrder);
    saveCurrentCart(currentUserId, newUserOrder);
    setCurrentCart(newUserOrder);
  }

  useEffect(() => {
    userID && checkCartProducts(userID);
  });

  useEffect(() => {
    if (currentCart.userId && allProducts.length > 0) {
      updateProductsCart(currentCart.products, allProducts);
    }
  }, [currentCart, allProducts]);

  return (
    <article className="flex flex-col gap-5">
      {productsToCart.length > 0 &&
        userID &&
        productsToCart.map((product: IProduct) => {
          return (
            <CartProductCard
              key={product.id}
              product={product}
              userId={userID}
              onClick={handelerDelet}
            />
          );
        })}
    </article>
  );
};

export default CartListProductsContainer;
