import CategoriesContainer from "@/components/BodyComponents/CategoriesContainer/CategoriesContainer";
import HomeCarousel from "@/components/BodyComponents/HomeCarousel/HomeCarousel";
import ProductsList from "@/components/BodyComponents/ProductsComponents/ProductsList/ProductsList";
import { arrayProducts } from "@/helpers/dataProducts";
import React from "react";

export default function HomeView() {
  return (
    <>
      <HomeCarousel />
      <CategoriesContainer />
      <ProductsList dataRendering={arrayProducts} />
    </>
  );
}
