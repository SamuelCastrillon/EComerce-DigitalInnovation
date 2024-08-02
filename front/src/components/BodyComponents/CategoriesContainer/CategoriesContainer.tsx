import React from "react";
import CategorieCard from "./CategorieCard/CategorieCard";
import { categoriesList } from "@/helpers/categoriesList";

const CategoriesContainer = () => {
  return (
    <section className="w-[95%] h-fit m-auto rounded flex flex-wrap justify-center items-center gap-5">
      {categoriesList.map((card) => {
        return (
          <CategorieCard key={card.id} name={card.name}>
            {card.iconeObject ? (
              <card.iconeObject className="w-1/2 text-lime-600" />
            ) : (
              <img src={card.iconeUrl} alt={`${card.name}Icone`} className="w-1/2" />
            )}
          </CategorieCard>
        );
      })}
    </section>
  );
};

export default CategoriesContainer;
