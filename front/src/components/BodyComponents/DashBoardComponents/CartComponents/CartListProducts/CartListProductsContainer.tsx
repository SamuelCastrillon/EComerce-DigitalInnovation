"use client";
import React, { useContext, useEffect, useState } from "react";
import CartProductCard from "../CartProductCard";
import { AuthContext, CartContext, ProductsContext } from "@/components/Context/GlobalContext";
import { IProduct } from "@/interfaces/products.interface";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { DataToBack } from "@/helpers/classDataProducts";

const CartListProductsContainer = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { currentCart, setCurrentCart } = useContext(CartContext);
  const { allProducts, setAllProducts } = useContext<IProduct[]>(ProductsContext);
  const [productsToCart, setProductsToCart] = useState<IProduct[]>([]);

  async function checkCartProducts() {
    !currentUser.login && (await setCurrentUser(localData.getStorage(localData.userData)));
    !currentCart.userId &&
      setCurrentCart(localData.getStorage(localData.userProductOrder + currentUser.user.id));
    setAllProducts(await DataToBack.getAllProducts());
  }

  function updateProductsCart(idArray: number[], productsAarray: IProduct[]) {
    const products: IProduct[] | undefined = [];
    idArray.forEach((productId: number) => {
      const product = productsAarray.find((product: IProduct) => {
        return product.id === productId;
      });
      if (product) {
        products.push(product);
      }
    });
    setProductsToCart(products);
  }

  //? function delet product to cart
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
  });

  useEffect(() => {
    if (currentCart.userId && allProducts.length > 0) {
      updateProductsCart(currentCart.products, allProducts);
    }
  }, [currentCart, allProducts]);

  return (
    <article className="flex flex-col gap-5">
      {productsToCart.length > 0 &&
        productsToCart.map((product: IProduct) => {
          return <CartProductCard key={product.id} data={product} onClick={handelerDelet} />;
        })}
    </article>
  );
};

export default CartListProductsContainer;
