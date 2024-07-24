import MenuProductsController from "@/components/BodyComponents/ProductsComponents/MenuProductsController/MenuProductsController";
import ProductsList from "@/components/BodyComponents/ProductsComponents/ProductsList/ProductsList";
import { arrayProducts } from "@/helpers/dataProducts";
import { IProduct } from "@/interfaces/products.interface";
import React from "react";

const getDataProducts = async (): Promise<IProduct[]> => {
  const dataFetch = await fetch("http://localhost:3000/products", {
    cache: "no-cache",
  });
  const dataResponse: IProduct[] = await dataFetch.json();
  return dataResponse;
};

// const Products: IProduct[] = arrayProducts;

const ShopView = async () => {
  const dataResponse: IProduct[] = await getDataProducts();
  console.log(dataResponse);
  return (
    <>
      <MenuProductsController />
      {dataResponse.length > 0 && <ProductsList dataRendering={dataResponse} />}
    </>
  );
};

export default ShopView;
