"use client";
import {
  AuthContext,
  CartContext,
  IAuthcontext,
  ICartContext,
  IProductsContext,
  ProductsContext,
} from "@/helpers/Context/GlobalContext";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";
import { DataToBack } from "@/helpers/classDataProducts";
import { IProduct } from "@/helpers/interfaces/products.interface";
import React, { useContext, useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import { createOrder } from "./CreateOrderHandeler";
import { deletCurrentCart, saveCurrentCart } from "@/helpers/localStorageManager";

interface IGeneralDataCart {
  itemsLength: number;
  totalPrice: number;
}

const CartComponent: React.FC = () => {
  const { currentUser, setCurrentUser } = useContext<IAuthcontext>(AuthContext);
  const { allProducts, setAllProducts } = useContext<IProductsContext>(ProductsContext);
  const { currentCart, setCurrentCart } = useContext<ICartContext>(CartContext);
  const [productsToCart, setProductsToCart] = useState<IProduct[]>([]);
  const [cartGeneralStatus, setCartGeneralStatus] = useState({
    itemsLength: 0,
    totalPrice: 0,
  });
  async function checkCartProducts() {
    setAllProducts(await DataToBack.getAllProducts());
  }

  function udateStatusCart(idArray: number[], productsAarray: IProduct[]) {
    const products: IProduct[] | undefined = [];
    const dataCart: IGeneralDataCart = {
      itemsLength: 0,
      totalPrice: 0,
    };
    idArray.forEach((productId: number) => {
      const product = productsAarray.find((product: IProduct) => {
        return product.id === productId;
      });
      if (product) {
        products.push(product);
        dataCart.totalPrice += product.price;
      }
    });
    dataCart.itemsLength = products.length;
    setProductsToCart(products);
    setCartGeneralStatus(dataCart);
  }

  //? function delet product to cart
  function handelerDelet(id: number) {
    const currentUserId = currentCart.userId;
    const newUserOrder: { userId: number; products: number[] } = {
      userId: currentUserId,
      products: [],
    };
    currentCart.products.forEach(
      (idProduct: number) => idProduct != id && newUserOrder.products.push(idProduct)
    );
    // localData.deletStorage(localData.userProductOrder + currentUserId);
    deletCurrentCart(currentUserId);
    // localData.saveStorage(localData.userProductOrder, currentUserId, newUserOrder);
    saveCurrentCart(currentUserId, newUserOrder);
    setCurrentCart(newUserOrder);
  }

  async function handelerCart() {
    if (currentUser) {
      const newOrderResponse = await createOrder(currentCart, currentUser.token);
      if (newOrderResponse.status === "approved") {
        console.log(newOrderResponse);
        alert("Send order ok");
      } else {
        alert("Fail Order");
      }
    }
  }

  useEffect(() => {
    checkCartProducts();
  }, []);

  useEffect(() => {
    if (currentCart.userId && allProducts.length > 0) {
      udateStatusCart(currentCart.products, allProducts);
    }
  }, [currentCart, allProducts]);

  return (
    <section className="flex flex-col gap-5">
      {productsToCart.length > 0 ? (
        <>
          <div className="flex flex-col flex-wrap gap-4 p-2 max-h-2/3">
            {productsToCart.length > 0 &&
              productsToCart.map((product: IProduct, i: number) => {
                return <CartProductCard key={i} data={product} onClick={handelerDelet} />;
              })}
          </div>
          <hr className=" border-lime-950" />
          <div className="flex flex-col gap-2 p-5 text-gray-200 rounded bg-lime-950">
            <div className="flex justify-between gap-10">
              <strong>Your shopping cart</strong>
              <span>{productsToCart.length} Intems</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-bold">${cartGeneralStatus.totalPrice}</span>
            </div>
            <button
              onClick={handelerCart}
              disabled={cartGeneralStatus.itemsLength < 0}
              className={`w-full py-2 font-bold rounded-sm h-fit text-lime-950 ${
                cartGeneralStatus.itemsLength < 0 ? "bg-gray-400" : "bg-lime-500"
              }`}>
              Send the order
            </button>
          </div>
        </>
      ) : (
        <>
          <strong className=""> Add your products to cart</strong>
          <NavigateButton
            href="/shop/products/all"
            className="w-full py-2 font-bold text-white rounded-sm h-fit bg-lime-950">
            View Products
          </NavigateButton>
        </>
      )}
    </section>
  );
};

export default CartComponent;
