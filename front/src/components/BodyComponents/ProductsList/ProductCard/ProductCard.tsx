import React from "react";
import Link from "next/link";
import { IProductCard } from "./IProductCard";

export const ProductCard: React.FC<IProductCard> = ({ id, name, price, image }) => {
  return (
    <div className="mt-5 mr-5">
      <Link href={`/shop/${id}`}>
        <div className="flex flex-col h-80 w-56 justify-between items-center bg-gray-50 rounded">
          <img src={image} alt={name} className="w-auto max-w-48 h-auto m-auto hover: shadow-xs" />
          <div className="flex flex-col w-full pl-3">
            <strong>{name}</strong>
            <span>{`US$ ${price}`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
