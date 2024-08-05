import { IProduct } from "@/helpers/interfaces/products.interface";
import { TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

interface IMenuSmallProductCart {
  product: IProduct;
  userId: number;
  onClick: (userId: number, id: number) => void;
}

const MenuSmallProductCard: React.FC<IMenuSmallProductCart> = ({ product, userId, onClick }) => {
  function handeler() {
    onClick(userId, product.id);
  }
  return (
    <div className="flex justify-between w-full pr-2 bg-gray-300 rounded">
      <div className="flex items-center gap-2 h-fit">
        <div className="h-[60px] w-[60px] p-[4px] items-center flex justify-center bg-white rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-auto h-auto max-w-full max-h-full"
          />
        </div>
        <div className="h-fit w-fit">
          <Link href={`/shop/product/${product.id}`}>
            <strong className="text-lime-950 hover:border-b-2 border-lime-950 h-[25px]">
              {product.name}
            </strong>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-1 ">
        <span className="text-lg font-bold text-lime-950">${product.price}</span>
        <button onClick={handeler}>
          <TrashIcon className="h-[20px] text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default MenuSmallProductCard;
