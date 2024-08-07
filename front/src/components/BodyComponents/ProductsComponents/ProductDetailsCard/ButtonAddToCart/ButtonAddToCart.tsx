"use client";
import { AuthContext, CartContext } from "@/helpers/Context/GlobalContext";
import { ICurrentCart } from "@/helpers/interfaces/IProductCard";
import { getCurrentCart, saveCurrentCart } from "@/helpers/localStorageManager";
import Link from "next/link";
import React, { useContext } from "react";

const ButtonAddToCart = ({
  productID,
  className = null,
}: {
  productID: number;
  className: string | null;
}) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);

  const userID = currentUser?.user.id;

  function checkProdutIsNotDuplicate(orderProducts: number[], idProductToAdd: number) {
    const isDuplicate = orderProducts.includes(idProductToAdd);
    isDuplicate && alert("Product already added to cart");
    return isDuplicate;
  }

  function addProductToCar(userId: number, productId: number) {
    let userOrder: ICurrentCart = getCurrentCart(userId);

    if (!userOrder && currentUser) {
      userOrder = {
        userId: userId,
        products: [],
      };
    }

    if (userOrder && !checkProdutIsNotDuplicate(userOrder.products, productId)) {
      let priorProducts = userOrder.products;
      userOrder.products = [...priorProducts, productId];
      // userOrder.products.push(productId);
      // localData.saveStorage(localData.userProductOrder, currentUser?.user.id, userOrder);
      userID && saveCurrentCart(userID, userOrder);
      setCurrentCart(userOrder);
    }
  }

  function handelerAddProduct() {
    userID && addProductToCar(userID, productID);
  }

  const buttonsStyles =
    "p-1 font-semibold text-white bg-gray-600 rounded w-[120px] hover:text-gray-800 hover:font-bold hover:bg-gradient-to-br from-lime-300 to-lime-600";
  return (
    <>
      {currentUser?.login ? (
        <button className={className ? className : buttonsStyles} onClick={handelerAddProduct}>
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
