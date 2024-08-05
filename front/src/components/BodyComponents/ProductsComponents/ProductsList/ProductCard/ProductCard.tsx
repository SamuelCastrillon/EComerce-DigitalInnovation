import React from "react";
import Link from "next/link";
import { IProductCard } from "@/helpers/interfaces/IProductCard";

export const ProductCard: React.FC<IProductCard> = ({ id, name, price, image }) => {
  return (
    <div className=" border-lime-500 border-[1.5px] rounded-md hover:shadow-lime-600 hover:shadow-md">
      <Link href={`/shop/product/${id}`}>
        <div className="flex flex-col items-center justify-between w-56 h-80 ">
          <img src={image} alt={name} className="w-auto h-auto m-auto shadow-xs max-w-48 hover:" />
          <div className="flex flex-col w-full pl-3">
            <strong>{name}</strong>
            <span>{`US$ ${price}`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
