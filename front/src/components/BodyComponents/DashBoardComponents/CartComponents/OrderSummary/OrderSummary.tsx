"use client";
import {
  AuthContext,
  CartContext,
  IAuthcontext,
  ICartContext,
  IProductsContext,
  ProductsContext,
} from "@/helpers/Context/GlobalContext";
import { DataToBack } from "@/helpers/classDataProducts";
import { dataToOrderSumary } from "@/helpers/productsCartHelpers";
import React, { useContext, useEffect, useState } from "react";
import { getCurrentCart, getCurrentUser } from "@/helpers/localStorageManager";

const OrderSummary = () => {
  const { currentUser, setCurrentUser } = useContext<IAuthcontext>(AuthContext);
  const { allProducts, setAllProducts } = useContext<IProductsContext>(ProductsContext);
  const { currentCart, setCurrentCart } = useContext<ICartContext>(CartContext);
  const [sumaryData, setSumaryData] = useState({ totalPrice: 0, productsNumber: 0 });

  let productsIsNotEqualToZero: boolean = false;
  const userID = currentUser?.user.id;

  async function checkCurrentData(id: number) {
    !currentUser?.login && setCurrentUser(getCurrentUser());
    !currentCart.userId && setCurrentCart(getCurrentCart(id));
    allProducts.length < 1 && setAllProducts(await DataToBack.getAllProducts());
  }

  async function updateCartProducts() {
    setSumaryData(dataToOrderSumary(currentCart?.products, allProducts));
  }

  function handelerCart() {
    console.log("Shell");
  }

  useEffect(() => {
    userID && checkCurrentData(userID);
  }, []);

  useEffect(() => {
    updateCartProducts();
  }, [currentCart]);
  return (
    <section className="flex flex-col items-center w-[350px] gap-2 p-2 text-lg font-bold text-gray-300 rounded bg-lime-950">
      <div className="flex justify-between w-full">
        <span>Quantity of products</span>
        <span>{sumaryData.productsNumber}</span>
      </div>
      <div className="flex justify-between w-full">
        <span>Total</span>
        <span>${sumaryData.totalPrice}</span>
      </div>
      <hr className="w-full border-lime-500" />
      <button
        className={`w-full p-2 rounded ${
          productsIsNotEqualToZero ? "bg-gray-400" : "bg-lime-500"
        }  text-lime-950`}
        disabled={productsIsNotEqualToZero}
        onClick={handelerCart}>
        Proceed to Checkout
      </button>
    </section>
  );
};

export default OrderSummary;
