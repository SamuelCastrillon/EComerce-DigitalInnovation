import CategoriesContainer from "@/components/BodyComponents/CategoriesContainer/CategoriesContainer";
import HomeCarousel from "@/components/BodyComponents/HomeCarousel/HomeCarousel";
import ProductsList from "@/components/BodyComponents/ProductsComponents/ProductsList/ProductsList";
import { DataToBack } from "@/helpers/classDataProducts";

import React from "react";

export default async function HomeView() {
  return (
    <>
      <HomeCarousel />
      <CategoriesContainer />
      <ProductsList dataRendering={await DataToBack.getAllProducts()} />
    </>
  );
}
