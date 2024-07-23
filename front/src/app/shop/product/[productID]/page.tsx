import ProductDetailsView from "@/views/ProductDetails/ProductDetailsView";
import React from "react";

interface IProductId {
  params: { productID: string };
}

const page: React.FC<IProductId> = ({ params }) => {
  const id: number = Number(params.productID);
  return <ProductDetailsView id={id} />;
};

export default page;
