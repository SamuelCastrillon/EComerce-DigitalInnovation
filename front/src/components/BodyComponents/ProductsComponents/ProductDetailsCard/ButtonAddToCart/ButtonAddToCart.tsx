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

const ButtonAddToCart = ({ id, className = null }: { id: number; className: string | null }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);

  function checkProdutIsNotDuplicate(orderProducts: number[], idProductToAdd: number) {
    const isDuplicate = orderProducts.includes(idProductToAdd);
    isDuplicate && alert("Product already added to cart");
    return isDuplicate;
  }

  function addProductToCar() {
    let userOrder: IUserOrder | undefined = localData.getStorage(
      localData.userProductOrder + currentUser?.user.id
    );
    if (!userOrder && currentUser) {
      userOrder = {
        userId: currentUser.user.id,
        products: [],
      };
    }
    if (userOrder && !checkProdutIsNotDuplicate(userOrder.products, id)) {
      userOrder.products.push(id);
      localData.saveStorage(localData.userProductOrder, currentUser?.user.id, userOrder);
      setCurrentCart(userOrder);
    }
  }

  const buttonsStyles =
    "p-1 font-semibold text-white bg-gray-600 rounded w-fit hover:text-gray-800 hover:font-bold hover:bg-gradient-to-br from-lime-300 to-lime-600";
  return (
    <>
      {currentUser?.login ? (
        <button className={className ? className : buttonsStyles} onClick={addProductToCar}>
          Add to Cart
        </button>
      ) : (
        <Link href="/signIn">
          <button className={buttonsStyles}>Sign In</button>
        </Link>
      )}
    </>
  );
};

export default ButtonAddToCart;
