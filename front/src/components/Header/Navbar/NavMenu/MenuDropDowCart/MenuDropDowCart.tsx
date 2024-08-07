"use client";
import { CartContext, ICartContext, ProductsContext } from "@/helpers/Context/GlobalContext";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";
import { IProduct } from "@/helpers/interfaces/products.interface";
import React, { useContext, useEffect, useState } from "react";
import MenuSmallProductCard from "./MenuSmallProductCard/MenuSmallProductCard";
import { ICreateOrderReq } from "@/helpers/interfaces/oerder.interface";
import { deletCurrentCart, saveCurrentCart } from "@/helpers/localStorageManager";

interface IGeneralDataCart {
  itemsLength: number;
  totalPrice: number;
}

interface IMenuDropDowCart {
  currentUserId: number;
  cartGeneralStatus: IGeneralDataCart;
  setCartGeneralStatus: Function;
}

const MenuDropDowCart: React.FC<IMenuDropDowCart> = ({
  currentUserId,
  cartGeneralStatus,
  setCartGeneralStatus,
}) => {
  const { allProducts, setAllProducts } = useContext(ProductsContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);
  const [productsToCart, setProductsToCart] = useState<IProduct[]>([]);

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
  function handelerDelet(userId: number, id: number) {
    const currentUserId = userId;
    const newUserOrder: ICreateOrderReq = {
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

  useEffect(() => {
    if (currentCart.userId && allProducts.length > 0) {
      udateStatusCart(currentCart.products, allProducts);
    }
  }, [currentCart, allProducts]);

  return (
    <>
      {productsToCart.length > 0 ? (
        <>
          <div className="flex justify-between gap-10">
            <strong>Your shopping cart</strong>
            <span className="text-gray-400">{productsToCart.length} Intems</span>
          </div>
          <hr className=" border-lime-400" />
          <div className="flex flex-col w-full gap-4 p-2">
            {productsToCart.length > 0 &&
              productsToCart.map((product: IProduct, i: number) => {
                return (
                  <MenuSmallProductCard
                    key={i}
                    product={product}
                    userId={currentUserId}
                    onClick={handelerDelet}
                  />
                );
              })}
          </div>
          <hr className=" border-lime-400" />
          <div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-bold">${cartGeneralStatus.totalPrice}</span>
            </div>
          </div>
          <NavigateButton
            href="/dashboard/cart"
            className="w-full py-2 font-bold rounded-sm h-fit bg-lime-500 text-lime-950">
            See your cart
          </NavigateButton>
        </>
      ) : (
        <>
          <strong className=""> Add your products to cart</strong>
          <NavigateButton
            href="/shop/products/all"
            className="w-full py-2 font-bold rounded-sm h-fit bg-lime-500 text-lime-950">
            See your cart
          </NavigateButton>
        </>
      )}
    </>
  );
};

export default MenuDropDowCart;
