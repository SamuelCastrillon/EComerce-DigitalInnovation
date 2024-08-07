import React from "react";
import Link from "next/link";
import { IProductCard } from "@/helpers/interfaces/IProductCard";

export const ProductCard: React.FC<IProductCard> = ({ id, name, price, image }) => {
  return (
    <div className="rounded-sm hover:shadow-lime-900 hover:shadow-md">
      <Link href={`/shop/product/${id}`}>
        <div className="flex flex-col items-center w-[160px] justify-between h-[240px] bg-gradient-to-tl from-lime-800 to-lime-300 to-90% rounded-sm">
          <div className="flex items-center w-[120px] h-[120px] p-2 bg-white rounded-sm shadow-lg shadow-lime-950 mt-[20px]">
            <img
              src={image}
              alt={name}
              className="w-auto h-auto max-w-full max-h-full m-auto shadow-xs"
            />
          </div>
          <div className="flex flex-col pl-3 justify-between p-1 text-sm h-[80px] w-[140px] bg-gradient-to-tl from-gray-800 to-gray-500 text-white shadow-md shadow-lime-950">
            <strong className="">{name}</strong>
            <span>{`Price US$ ${price}`}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
