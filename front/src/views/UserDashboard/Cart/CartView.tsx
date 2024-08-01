import TitleForm from "@/components/BodyComponents/TitleForm/TitleForm";
import pageLogo from "@/assets/img/LogoPage.jpg";
import React from "react";
import CartComponent from "@/components/BodyComponents/DashBoardComponents/CartComponents/CartComponent";

const CartView: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-screen gap-10">
      <TitleForm icone={pageLogo.src} title="Order summary" />

      <div className="flex flex-col items-center justify-around w-screen gap-5">
        <CartComponent />
      </div>
    </div>
  );
};

export default CartView;
