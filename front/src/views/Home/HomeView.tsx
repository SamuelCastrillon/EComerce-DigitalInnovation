import HomeCarousel from "@/components/BodyComponents/HomeCarousel/HomeCarousel";
import ProductsList from "@/components/BodyComponents/ProductsList/ProductsList";
import React from "react";

export default function HomeView() {
  return (
    <div className="items-center m-auto text-center">
      <HomeCarousel />
      <ProductsList />
    </div>
  );
}
