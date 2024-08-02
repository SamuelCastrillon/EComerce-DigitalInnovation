import React from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import { IProductCard } from "../../../../interfaces/IProductCard";
import { IProduct } from "@/interfaces/products.interface";
import { filterProductsByCategory } from "@/helpers/filterProductsHelpers";

interface IProductslist {
  dataRendering: IProduct[];
  filterParams: {
    filters: string[];
  };
}

const ProductsList: React.FC<IProductslist> = ({ dataRendering, filterParams }) => {
  const Products: IProduct[] = dataRendering;
  const Filter: string[] = filterParams.filters;
  const ProductsToRender = filterProductsByCategory(Products, Filter[0]);
  return (
    <section className="w-[95%] m-auto p-5 mt-5 rounded flex flex-wrap justify-center gap-5 bg-white ">
      {ProductsToRender.length ? (
        ProductsToRender.map((e: IProductCard) => {
          return <ProductCard key={e.id} id={e.id} name={e.name} price={e.price} image={e.image} />;
        })
      ) : (
        <strong>There are no products in this category at the moment!</strong>
      )}
    </section>
  );
};

export default ProductsList;
