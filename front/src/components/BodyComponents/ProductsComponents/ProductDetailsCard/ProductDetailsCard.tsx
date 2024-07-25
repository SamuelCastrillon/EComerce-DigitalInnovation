import { IProduct } from "@/interfaces/products.interface";
import React from "react";

interface IData {
  data: IProduct;
}

const ProductDetailsCard: React.FC<IData> = ({ data }) => {
  const { image, name, price, description, categoryId, stock } = data;
  return (
    <section className="flex justify-center w-full mt-20 mb-20">
      <div className="flex w-5/6 h-[400px] mt-20 mb-20 p-5 bg-white rounded">
        <div className="flex items-center w-1/2">
          <img src={image} className="w-auto h-auto m-auto" />
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{name}</h2>
            <strong className="mt-5 mb-5 text-2xl">US$ {price}</strong>
            <button className="p-1 font-semibold text-white rounded w-44 bg-lime-600">
              Add to Cart
            </button>
          </div>
          <hr className="h-px mt-2 mb-2 border-none bg-lime-600" />
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
