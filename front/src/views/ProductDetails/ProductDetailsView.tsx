// "use client";
import ProductDetailsCard from "@/components/ProductDetailsCard/ProductDetailsCard";
import { arrayProducts } from "@/helpers/dataProducts";
import getProductById from "@/helpers/getProductById";
import { IProduct } from "@/interfaces/products.interface";
import Link from "next/link";
import React from "react";

interface IProductId {
  id: number;
}

const ProductDetailsView: React.FC<IProductId> = ({ id }) => {
  // const productData = arrayProducts.find((product) => product.id === id);
  const productData: IProduct | undefined = getProductById(id);
  console.log(productData);
  return (
    <main className="flex flex-col">
      {productData ? <ProductDetailsCard data={productData} /> : "Error"}
    </main>
  );
};

export default ProductDetailsView;
