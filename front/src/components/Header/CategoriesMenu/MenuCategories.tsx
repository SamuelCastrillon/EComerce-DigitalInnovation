"use client";
import React, { useState } from "react";
import ButtonMenu from "./ButtonMenuCategories/ButtonMenu";
import ButtonMenuDrow from "./ButtonMenuCategories/ButtonMenuDrow";
import { categoriesList } from "@/helpers/categoriesList";

const MenuCategories: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <menu className="relative flex justify-center gap-5 text-white h-fit bg-lime-800">
      <ButtonMenuDrow onClick={setShowMenu} previusState={showMenu} />
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } absolute z-20 flex-col h-fit border-t-2 border-lime-950 bg-lime-800 top-[100%] p-2 w-full items-center gap-1 md:flex md:static md:flex-row md:justify-evenly md:border-none md:z-0`}>
        {categoriesList.map((categorie) => {
          return <ButtonMenu key={categorie.id} name={categorie.name} />;
        })}
      </div>
    </menu>
  );
};

export default MenuCategories;
