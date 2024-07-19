import { arrayProducts } from "@/helpers/dataProducts";
import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { IProductCard } from "./ProductCard/IProductCard";
import { IProduct } from "@/interfaces/products.interface";

const ProductsList = () => {
  const Products: IProduct[] = arrayProducts;

  return (
    <section className="mt-10 flex flex-wrap justify-start pl-12">
      {Products.map((e: IProductCard) => {
        return <ProductCard key={e.id} id={e.id} name={e.name} price={e.price} image={e.image} />;
      })}
    </section>
  );
};

export default ProductsList;
