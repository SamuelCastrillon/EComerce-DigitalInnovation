import MenuProductsController from "@/components/BodyComponents/ProductsComponents/MenuProductsController/MenuProductsController";
import ProductsList from "@/components/BodyComponents/ProductsComponents/ProductsList/ProductsList";
import { DataToBack } from "@/helpers/classDataProducts";
import { IProduct } from "@/interfaces/products.interface";
import React from "react";

const ShopView = async () => {
  const dataResponse: IProduct[] = await DataToBack.getAllProducts();
  return (
    <>
      <MenuProductsController />
      {dataResponse.length > 0 && <ProductsList dataRendering={dataResponse} />}
    </>
  );
};

export default ShopView;
