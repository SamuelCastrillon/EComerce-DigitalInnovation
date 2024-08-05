import React from "react";
import Link from "next/link";
import { IProductCard } from "@/helpers/interfaces/IProductCard";

export const ProductCard: React.FC<IProductCard> = ({ id, name, price, image }) => {
  return (
    <div className=" border-lime-500 border-[1.5px] rounded-md hover:shadow-lime-600 hover:shadow-md">
      <Link href={`/shop/product/${id}`}>
        <div className="flex flex-col items-center w-56 justify-evenly h-80 ">
          <div className="flex items-center w-full p-2 h-1/2">
            <img
              src={image}
              alt={name}
              className="w-auto h-auto max-w-full max-h-full m-auto shadow-xs"
            />
          </div>
          <div className="flex flex-col w-full pl-3">
            <strong>{name}</strong>
            <span>{`US$ ${price}`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
