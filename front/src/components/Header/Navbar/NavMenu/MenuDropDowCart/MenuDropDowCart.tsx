"use client";
import { CartContext } from "@/components/Context/GlobalContext";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";
import { localData } from "@/helpers/classManagementLocalSotorage";
import React, { useContext, useEffect } from "react";

const MenuDropDowCart = ({ currentUserId }) => {
  const { currentCart, setCurrentCart } = useContext(CartContext);

  function checkCartProducts() {
    !currentCart.userId &&
      setCurrentCart(localData.getStorage(localData.userProductOrder + currentUserId));
  }

  useEffect(() => {
    checkCartProducts();
  }, []);

  useEffect(() => {
    console.log(currentCart);
  }, [currentCart]);

  return (
    <>
      {currentCart.userId ? (
        <>
          <div className="flex justify-between gap-10">
            <strong>Your shopping cart</strong>
            <span className="text-gray-400">{4}Intems</span>
          </div>
          <hr className=" border-lime-400" />
          <div></div>
          <hr className=" border-lime-400" />
          <div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>${"price"}</span>
            </div>
          </div>
          <NavigateButton
            href="/dashboard/cart"
            className="w-full py-2 rounded-sm h-fit bg-lime-500">
            See your cart
          </NavigateButton>
        </>
      ) : (
        <>
          <strong className=""> Add your products to cart</strong>
          <NavigateButton
            href="/shop/products/all"
            className="w-full py-2 rounded-sm h-fit bg-lime-500">
            See your cart
          </NavigateButton>
        </>
      )}
    </>
  );
};

export default MenuDropDowCart;
