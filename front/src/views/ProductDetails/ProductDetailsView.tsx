import ProductDetailsCard from "@/components/BodyComponents/ProductsComponents/ProductDetailsCard/ProductDetailsCard";
import { DataToBack } from "@/helpers/classDataProducts";
import { IProduct } from "@/helpers/interfaces/products.interface";
import React from "react";

interface IProductId {
  id: number;
}

const ProductDetailsView: React.FC<IProductId> = async ({ id }) => {
  const productData: IProduct | undefined = await DataToBack.getProductById(id);
  return <>{productData ? <ProductDetailsCard data={productData} /> : "Error"}</>;
};

export default ProductDetailsView;
