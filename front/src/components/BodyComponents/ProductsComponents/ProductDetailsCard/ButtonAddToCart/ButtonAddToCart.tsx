"use client";
import { AuthContext, CartContext } from "@/helpers/Context/GlobalContext";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { ICreateOrderReq } from "@/helpers/interfaces/oerder.interface";
import Link from "next/link";
import React, { useContext } from "react";

interface IUserOrder {
  userId: number;
  products: number[];
}

const ButtonAddToCart = ({ id }: { id: number }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);

  function checkProdutIsNotDuplicate(orderProducts: number[], idProductToAdd: number) {
    const isDuplicate = orderProducts.includes(idProductToAdd);
    isDuplicate && alert("Product already added to cart");
    return isDuplicate;
  }

  function addProductToCar() {
    let userOrder: IUserOrder | undefined = localData.getStorage(
      localData.userProductOrder + currentUser.user.id
    );
    if (!userOrder) {
      userOrder = {
        userId: currentUser.user.id,
        products: [],
      };
    }
    if (userOrder && !checkProdutIsNotDuplicate(userOrder.products, id)) {
      userOrder.products.push(id);
      localData.saveStorage(localData.userProductOrder, currentUser.user.id, userOrder);
      setCurrentCart(userOrder);
    }
  }

  const buttonsStyles = "p-1 font-semibold text-white rounded w-44 bg-lime-800";
  return (
    <>
      {currentUser?.login ? (
        <button className={buttonsStyles} onClick={addProductToCar}>
          Add to Cart
        </button>
      ) : (
        <button className={buttonsStyles}>
          <Link href="/signIn">Sign In</Link>
        </button>
      )}
    </>
  );
};

export default ButtonAddToCart;
