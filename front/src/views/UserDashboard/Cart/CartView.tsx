import CartListProductsContainer from "@/components/BodyComponents/DashBoardComponents/CartComponents/CartListProducts/CartListProductsContainer";
import OrderSummary from "@/components/BodyComponents/DashBoardComponents/CartComponents/OrderSummary/OrderSummary";
import TitleForm from "@/components/BodyComponents/TitleForm/TitleForm";
import pageLogo from "@/assets/img/LogoPage.jpg";
import React from "react";
import CartComponent from "@/components/BodyComponents/DashBoardComponents/CartComponents/CartComponent";

const CartView = async () => {
  return (
    <div className="flex flex-col items-center w-screen gap-10">
      <div className="w-[350px] md:w-1/2">
        <TitleForm icone={pageLogo.src} title="Resumen del pedido" />
      </div>
      <div className="flex flex-col items-center justify-around w-screen gap-5">
        <CartComponent />
      </div>
    </div>
  );
};

export default CartView;
