"use client";
import { AuthContext, CartContext, ProductsContext } from "@/components/Context/GlobalContext";
import { DataToBack } from "@/helpers/classDataProducts";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { dataToOrderSumary } from "@/helpers/productsCartHelpers";
import { IProduct } from "@/interfaces/products.interface";
import React, { useContext, useEffect, useState } from "react";

const OrderSummary = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);
  const [sumaryData, setSumaryData] = useState({ totalPrice: 0, productsNumber: 0 });

  let productsIsNotEqualToZero: boolean = false;

  async function checkCurrentData() {
    !currentUser.login && (await setCurrentUser(localData.getStorage(localData.userData)));
    allProducts.length < 1 && setAllProducts(await DataToBack.getAllProducts());
    !currentCart.userId &&
      setCurrentCart(localData.getStorage(localData.userProductOrder + currentUser.user.id));
  }

  async function updateCartProducts() {
    setSumaryData(dataToOrderSumary(currentCart.products, allProducts));
  }

  function handelerCart() {
    console.log("Shell");
  }

  useEffect(() => {
    checkCurrentData();
  }, []);

  useEffect(() => {
    updateCartProducts();
  }, [currentCart]);
  return (
    <section className="flex flex-col items-center w-[350px] gap-2 p-2 text-lg font-bold text-gray-300 rounded bg-lime-950">
      <div className="flex justify-between w-full">
        <span>Quantity of products</span>
        <span>{sumaryData.productsNumber}</span>
      </div>
      <div className="flex justify-between w-full">
        <span>Total</span>
        <span>${sumaryData.totalPrice}</span>
      </div>
      <hr className="w-full border-lime-500" />
      <button
        className={`w-full p-2 rounded ${
          productsIsNotEqualToZero ? "bg-gray-400" : "bg-lime-500"
        }  text-lime-950`}
        disabled={productsIsNotEqualToZero}
        onClick={handelerCart}>
        Proceed to Checkout
      </button>
    </section>
  );
};

export default OrderSummary;
