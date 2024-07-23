import ProductDetailsCard from "@/components/BodyComponents/ProductsComponents/ProductDetailsCard/ProductDetailsCard";
import getProductById from "@/helpers/getProductById";
import { IProduct } from "@/interfaces/products.interface";
import React from "react";

interface IProductId {
  id: number;
}

const ProductDetailsView: React.FC<IProductId> = ({ id }) => {
  const productData: IProduct | undefined = getProductById(id);
  return <>{productData ? <ProductDetailsCard data={productData} /> : "Error"}</>;
};

export default ProductDetailsView;
