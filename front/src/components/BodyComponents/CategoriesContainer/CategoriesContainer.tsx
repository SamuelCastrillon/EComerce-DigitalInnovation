import React from "react";
import CategorieCard from "./CategorieCard/CategorieCard";
import IconePhones from "@/assets/icons/ProductsCategories/mdi--cellphone.svg";
import IconeTablets from "@/assets/icons/ProductsCategories/mdi--tablet.svg";
import IconeLaptos from "@/assets/icons/ProductsCategories/mdi--computer.svg";
import IconePrinters from "@/assets/icons/ProductsCategories/mdi--printer.svg";

const CategoriesContainer = () => {
  return (
    <section className="w-[95%] h-fit m-auto rounded flex flex-wrap justify-center items-center gap-5">
      <CategorieCard name="Smartphones" icone={IconePhones} />
      <CategorieCard name="Tablets" icone={IconeTablets} />
      <CategorieCard name="Laptops" icone={IconeLaptos} />
      <CategorieCard name="Printers" icone={IconePrinters} />
      {/* <CategorieCard name="Monitors" icone={} /> */}
    </section>
  );
};

export default CategoriesContainer;
