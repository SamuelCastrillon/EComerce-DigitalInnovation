"use client";
import { CartContext, ProductsContext } from "@/components/Context/GlobalContext";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";
import { DataToBack } from "@/helpers/classDataProducts";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { IProduct } from "@/interfaces/products.interface";
import React, { useContext, useEffect, useState } from "react";
import MenuSmallProductCard from "./MenuSmallProductCard/MenuSmallProductCard";

interface IGeneralDataCart {
  itemsLength: number;
  totalPrice: number;
}

const MenuDropDowCart = ({
  currentUserId,
  cartGeneralStatus,
  setCartGeneralStatus,
}: {
  cartGeneralStatus: IGeneralDataCart;
}) => {
  const { currentCart, setCurrentCart } = useContext(CartContext);
  const { allProducts, setAllProducts } = useContext<IProduct[]>(ProductsContext);
  const [productsToCart, setProductsToCart] = useState<IProduct[]>([]);

  async function checkCartProducts() {
    !currentCart.userId &&
      setCurrentCart(localData.getStorage(localData.userProductOrder + currentUserId));
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
    console.log("ProductsCart: ", products);
    dataCart.itemsLength = products.length;
    setProductsToCart(products);
    setCartGeneralStatus(dataCart);
  }

  function handelerDelet(id: number) {
    const currentUserId = currentCart.userId;
    const newUserOrder = {
      userId: currentUserId,
      products: [],
    };
    currentCart.products.forEach(
      (idProduct: number) => idProduct != id && newUserOrder.products.push(idProduct)
    );
    localData.deletStorage(localData.userProductOrder + currentUserId);
    localData.saveStorage(localData.userProductOrder, currentUserId, newUserOrder);
    setCurrentCart(newUserOrder);
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
    <>
      {productsToCart.length > 0 ? (
        <>
          <div className="flex justify-between gap-10">
            <strong>Your shopping cart</strong>
            <span className="text-gray-400">{productsToCart.length} Intems</span>
          </div>
          <hr className=" border-lime-400" />
          <div className="flex flex-col gap-4 p-2">
            {productsToCart.length > 0 &&
              productsToCart.map((product: IProduct, i: number) => {
                return <MenuSmallProductCard key={i} product={product} onClick={handelerDelet} />;
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
