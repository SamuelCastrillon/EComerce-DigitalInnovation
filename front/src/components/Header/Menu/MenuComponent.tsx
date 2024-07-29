"use client";
import React from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import CMenuDrow from "./CatMenuDrow/CatMenuDrow";

const MenuComponent: React.FC = () => {
  return (
    <menu className="hidden h-8 gap-5 text-white md:flex bg-lime-700">
      <CMenuDrow />
      <ButtonMenu name={"Register"} url={"/register"} />
      <ButtonMenu name={"LogIn"} url={"/login"} />
    </menu>
  );
};

export default MenuComponent;
