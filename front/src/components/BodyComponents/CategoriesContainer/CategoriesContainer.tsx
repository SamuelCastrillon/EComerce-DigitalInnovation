import React from "react";
import CategorieCard from "./CategorieCard/CategorieCard";

const CategoriesContainer = () => {
  return (
    <section className="w-[95%] h-fit m-auto rounded flex flex-wrap justify-center items-center gap-5">
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
      <CategorieCard />
    </section>
  );
};

export default CategoriesContainer;
