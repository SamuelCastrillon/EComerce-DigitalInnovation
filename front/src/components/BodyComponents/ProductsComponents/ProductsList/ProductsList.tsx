import { arrayProducts } from "@/helpers/dataProducts";
import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { IProductCard } from "./ProductCard/IProductCard";
import { IProduct } from "@/interfaces/products.interface";

const ProductsList = ({ dataRendering }: { dataRendering: IProduct[] }) => {
  // const Products: IProduct[] = arrayProducts;
  const Products: IProduct[] = dataRendering;

  return (
    <section className="w-[95%] m-auto p-5 mt-5 rounded flex flex-wrap justify-center gap-5 bg-white ">
      {Products.map((e: IProductCard) => {
        return <ProductCard key={e.id} id={e.id} name={e.name} price={e.price} image={e.image} />;
      })}
    </section>
  );
};

export default ProductsList;
