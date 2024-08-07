import { IProduct } from "@/helpers/interfaces/products.interface";
import React from "react";
import ButtonAddToCart from "./ButtonAddToCart/ButtonAddToCart";

interface IData {
  data: IProduct;
}

const ProductDetailsCard: React.FC<IData> = ({ data }) => {
  const { id, image, name, price, description, categoryId, stock } = data;
  return (
    <section className="flex justify-center w-screen mt-20 mb-20 md:w-full">
      <div className="flex items-center w-screen md:w-5/6 min-h-[400px] h-fit mt-20 mb-20 p-5 flex-col md:flex-row">
        <div className="flex items-center justify-center w-full md:w-1/2 h-[300px] bg-gradient-to-l from-lime-700 to-lime-300 rounded-t-md md:rounded-l-md md:rounded-r-none shadow-md shadow-lime-950">
          <div className="flex items-center h-[250px] w-[250px] bg-white rounded-sm shadow-lg shadow-lime-950 p-1">
            <img src={image} className="w-auto h-auto max-w-full max-h-full m-auto" />
          </div>
        </div>
        <div className="flex flex-col justify-center w-screen md:w-1/2 bg-gradient-to-tl from-gray-900 to-gray-600 h-[400px] text-gray-300 p-5 rounded shadow-lg shadow-lime-950">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{name}</h2>
            <strong className="mt-5 mb-5 text-2xl">US$ {price}</strong>
            <ButtonAddToCart productID={id} className={null} />
          </div>
          <hr className="h-px mt-2 mb-2 border-none bg-lime-600" />
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;
