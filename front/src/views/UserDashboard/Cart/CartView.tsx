import CartListProductsContainer from "@/components/BodyComponents/DashBoardComponents/CartComponents/CartListProducts/CartListProductsContainer";
import OrderSummary from "@/components/BodyComponents/DashBoardComponents/CartComponents/OrderSummary/OrderSummary";
import TitleForm from "@/components/BodyComponents/TitleForm/TitleForm";
import pageLogo from "@/assets/img/LogoPage.jpg";
import React from "react";

const CartView = () => {
  return (
    <div>
      {/* <TitleForm icone={pageLogo.src} title="Shopping Cart" /> */}
      <div className="flex flex-col justify-around w-screen md:flex-row">
        <CartListProductsContainer />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartView;
