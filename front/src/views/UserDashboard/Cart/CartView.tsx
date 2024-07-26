import CartListProductsContainer from "@/components/BodyComponents/DashBoardComponents/CartComponents/CartListProducts/CartListProductsContainer";
import OrderSummary from "@/components/BodyComponents/DashBoardComponents/CartComponents/OrderSummary/OrderSummary";
import React from "react";

const CartView = () => {
  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="flex flex-col justify-around w-screen md:flex-row">
        <CartListProductsContainer />
        <OrderSummary />
      </div>
    </>
  );
};

export default CartView;
