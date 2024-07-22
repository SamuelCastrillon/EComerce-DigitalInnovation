import { IProduct } from "@/interfaces/products.interface";
import React from "react";

interface IData {
  data: IProduct;
}

const ProductDetailsCard: React.FC<IData> = ({ data }) => {
  const { image, name, price, description, categoryId, stock } = data;
  return (
    <section className="flex w-5/6 h-[400px] mt-20 mb-20 p-5 bg-white rounded">
      <div className="w-1/2">
        <img src={image} className="w-auto h-full m-auto" />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{name}</h2>
          <strong className="text-2xl mt-5 mb-5">US$ {price}</strong>
          <button className="w-44 bg-lime-600 rounded p-1 font-semibold text-white">
            Add to Cart
          </button>
        </div>
        <hr className="border-none h-px bg-lime-600 mt-2 mb-2" />
        <p className="text-gray-600">{description}</p>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
