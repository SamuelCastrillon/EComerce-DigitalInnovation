import HomeCarousel from "@/components/HomeCarousel/HomeCarousel";
import ProductsList from "@/components/ProductsList/ProductsList";
import React from "react";

export default function HomeView() {
  return (
    <main className="items-center m-auto text-center">
      <HomeCarousel />
      <ProductsList />
    </main>
  );
}
