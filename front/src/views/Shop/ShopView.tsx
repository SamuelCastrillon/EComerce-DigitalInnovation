import MenuProductsController from "@/components/BodyComponents/ProductsComponents/MenuProductsController/MenuProductsController";
import ProductsList from "@/components/BodyComponents/ProductsComponents/ProductsList/ProductsList";
import { DataToBack } from "@/helpers/classDataProducts";
import { IProduct } from "@/helpers/interfaces/products.interface";
import React from "react";

interface IFiltersParams {
  params: { filters: string[] };
}

const ShopView: React.FC<IFiltersParams> = async ({ params }) => {
  const dataResponse: IProduct[] = await DataToBack.getAllProducts();
  return (
    <>
      <MenuProductsController />
      {dataResponse.length > 0 && (
        <ProductsList dataRendering={dataResponse} filterParams={params} />
      )}
    </>
  );
};

export default ShopView;
