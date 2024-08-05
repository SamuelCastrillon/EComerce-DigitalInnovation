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
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <img src={product.image} alt={product.name} className="h-[30px] w-auto" />
        <strong className=" hover:border-b-2">
          <Link href={`/shop/product/${product.id}`}>{product.name}</Link>
        </strong>
      </div>
      <div className="flex items-center gap-1">
        <span>${product.price}</span>
        <button onClick={handeler}>
          <TrashIcon className="h-[15px] text-red-600" />
        </button>
      </div>
    </div>
  );
};

export default MenuSmallProductCard;
