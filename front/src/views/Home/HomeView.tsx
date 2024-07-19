import CategoriesContainer from "@/components/BodyComponents/CategoriesContainer/CategoriesContainer";
import HomeCarousel from "@/components/BodyComponents/HomeCarousel/HomeCarousel";
import ProductsList from "@/components/BodyComponents/ProductsList/ProductsList";
import React from "react";

export default function HomeView() {
  return (
    <>
      <HomeCarousel />
      <CategoriesContainer />
      <ProductsList />
    </>
  );
}
