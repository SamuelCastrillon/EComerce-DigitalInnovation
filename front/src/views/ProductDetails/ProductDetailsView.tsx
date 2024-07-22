import ProductDetailsCard from "@/components/BodyComponents/ProductDetailsCard/ProductDetailsCard";
import getProductById from "@/helpers/getProductById";
import { IProduct } from "@/interfaces/products.interface";
import React from "react";

interface IProductId {
  id: number;
}

const ProductDetailsView: React.FC<IProductId> = ({ id }) => {
  const productData: IProduct | undefined = getProductById(id);
  return (
    <div className="flex flex-col items-center">
      {productData ? <ProductDetailsCard data={productData} /> : "Error"}
    </div>
  );
};

export default ProductDetailsView;
