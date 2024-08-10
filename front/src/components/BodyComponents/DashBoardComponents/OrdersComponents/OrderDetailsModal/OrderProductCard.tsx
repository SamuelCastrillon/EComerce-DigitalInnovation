import { IProduct } from "@/helpers/interfaces/products.interface";
import Link from "next/link";
import React from "react";

const OrderProductCard = ({ data }: { data: IProduct }) => {
  const { id, image, name, price, description, categoryId, stock } = data;

  return (
    <div className="flex w-full md:w-[400px] h-[100px] gap-2 bg-gray-300">
      <div className="w-[100px] h-[100px] bg-white flex items-center justify-center p-2">
        <img src={image} alt={`Product Image - ${name}`} className="max-w-full max-h-full" />
      </div>
      <div className="flex flex-col items-center justify-around w-full h-full">
        <div className="flex justify-between w-full pr-2 h-fit">
          <strong>
            <Link href={`/shop/product/${id}`} className="border-gray-700 hover:border-b-2">
              {name}
            </Link>
          </strong>
          <span className="font-bold">{`$${price}`}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderProductCard;
