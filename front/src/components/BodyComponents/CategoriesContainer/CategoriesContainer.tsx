import React from "react";
import CategorieCard from "./CategorieCard/CategorieCard";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { categoriesList } from "./categoriesList";
// import IconePhones from "@/assets/icons/ProductsCategories/mdi--cellphone.svg";
// import IconeTablets from "@/assets/icons/ProductsCategories/mdi--tablet.svg";
// import IconeLaptos from "@/assets/icons/ProductsCategories/mdi--computer.svg";
// import IconePrinters from "@/assets/icons/ProductsCategories/mdi--printer.svg";

const CategoriesContainer = () => {
  return (
    <section className="w-[95%] h-fit m-auto rounded flex flex-wrap justify-center items-center gap-5">
      {categoriesList.map((card) => {
        return (
          <CategorieCard key={card.id} name={card.name}>
            {<card.icone className="w-1/2 text-lime-600" />}
          </CategorieCard>
        );
      })}
    </section>
  );
};

export default CategoriesContainer;
