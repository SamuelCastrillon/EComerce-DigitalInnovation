import ProductsList from "@/components/ProductsList/ProductsList";
import React from "react";

export default function HomeView() {
  return (
    <main className="items-center m-auto text-center">
      <h1 className="mt-5">Pagina de Inicio</h1>
      <ProductsList />
    </main>
  );
}
