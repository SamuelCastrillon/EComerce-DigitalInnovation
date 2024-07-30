"use client";
import { AuthContext, CartContext } from "@/components/Context/GlobalContext";
import { localData } from "@/helpers/classManagementLocalSotorage";
import React, { useContext, useEffect } from "react";

const OrderSummary = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);

  useEffect(() => {
    if (!currentCart) {
      currentUser &&
        setCurrentCart(localData.getStorage(localData.userProductOrder + currentUser.user.id));
    }
    console.log(currentCart);
  }, []);

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
        <span>number</span>
      </div>
      <div className="h-px bg-lime-500"></div>
      <div className="flex justify-between">
        <span>Total</span>
        <span>$</span>
      </div>
      <button className="p-2 rounded bg-lime-500 text-lime-950">Proceed to Checkout</button>
    </section>
  );
};

export default OrderSummary;
