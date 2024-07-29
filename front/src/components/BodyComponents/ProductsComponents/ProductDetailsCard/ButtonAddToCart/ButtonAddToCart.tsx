"use client";
import { AuthContext } from "@/components/Context/GlobalContext";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { ICreateOrderReq } from "@/interfaces/oerder.interface";
import Link from "next/link";
import React, { useContext } from "react";

const ButtonAddToCart = ({ id }: { id: number }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  function addProductToCar() {
    let userOrder = localData.getStorage(localData.userProductOrder + currentUser.user.id);
    if (!userOrder) {
      userOrder = {
        userId: currentUser.user.id,
        products: [],
      };
    }
    userOrder.products.push(id);
    localData.saveStorage(localData.userProductOrder, currentUser.user.id, userOrder);
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
