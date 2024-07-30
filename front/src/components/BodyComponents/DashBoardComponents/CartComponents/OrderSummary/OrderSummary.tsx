"use client";
import { AuthContext, CartContext } from "@/components/Context/GlobalContext";
import { DataToBack } from "@/helpers/classDataProducts";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { dataToOrderSumary, shearchProductsCartById } from "@/helpers/shearchProductsCartById";
import { IProduct } from "@/interfaces/products.interface";
import React, { useContext, useEffect, useState } from "react";

const OrderSummary = ({ allProducts }: { allProducts: IProduct[] }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);
  const [sumaryData, setSumaryData] = useState({ totalPrice: 0, productsNumber: 0 });

  useEffect(() => {
    async function effect() {
      if (!currentUser.user) await setCurrentUser(localData.getStorage(localData.userData));
      console.log(currentUser);
      if (!currentCart.userId && currentUser.user.id) {
        setCurrentCart(localData.getStorage(localData.userProductOrder + currentUser.user.id));
      }
      setSumaryData(dataToOrderSumary(currentCart.products, allProducts));
    }
    if (sumaryData.productsNumber === 0) {
      effect();
      console.log(sumaryData);
    }
  });

  return (
    <section className="w-[500px] flex flex-col gap-2 p-2 text-gray-300 text-lg font-bold rounded bg-lime-950">
      <h3>Order Summary</h3>
      <div className="flex justify-between">
        <span>Original Price</span>
        <span>$</span>
      </div>
      <div className="flex justify-between">
        <span>Discount</span>
        <span>%</span>
      </div>
      <div className="flex justify-between">
        <span>Quantity of products</span>
        <span>{sumaryData.productsNumber}</span>
      </div>
      <div className="h-px bg-lime-500"></div>
      <div className="flex justify-between">
        <span>Total</span>
        <span>${sumaryData.totalPrice}</span>
      </div>
      <button className="p-2 rounded bg-lime-500 text-lime-950">Proceed to Checkout</button>
    </section>
  );
};

export default OrderSummary;
