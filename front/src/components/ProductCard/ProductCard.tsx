import React from "react";
import { ProductCardProps } from "./type.productCard";

export const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, price }) => {
  return (
    <div className="flex flex-col h-80 w-56 mt-5 mr-5 justify-between items-center bg-gray-50 rounded">
      <img
        src={imageUrl}
        alt={productName}
        className="w-auto max-w-48 h-auto m-auto hover: shadow-xs"
      />
      <div className="flex flex-col w-full pl-3">
        <strong>{productName}</strong>
        <span>{`US$ ${price}`}</span>
      </div>
    </div>
  );
};
