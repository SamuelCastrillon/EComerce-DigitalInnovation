import React from "react";
import CategorieCard from "./CategorieCard/CategorieCard";
import IconePhones from "@/assets/icons/ProductsCategories/mdi--cellphone.svg";

const CategoriesContainer = () => {
  return (
    <section className="w-[95%] h-fit m-auto rounded flex flex-wrap justify-center items-center gap-5">
      <CategorieCard name="Smartphones" url="/shop" icone={IconePhones} />
      {/* <CategorieCard name="Laptops" Icone="" url="/shop" />
      <CategorieCard name="Tablets" Icone="" url="/shop" />
      <CategorieCard name="Printers" Icone="" url="/shop" />
      <CategorieCard name="Monitors" Icone="" url="/shop" /> */}
    </section>
  );
};

export default CategoriesContainer;
