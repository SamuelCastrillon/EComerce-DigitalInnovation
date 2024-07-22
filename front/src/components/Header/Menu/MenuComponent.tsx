"use client";
import React from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import CMenuDrow from "./CatMenuDrow/CatMenuDrow";

const MenuComponent: React.FC = () => {
  return (
    <menu className="h-8 flex bg-lime-600 text-white gap-5">
      <CMenuDrow />
      <ButtonMenu name={"Register"} url={"/register"} />
      <ButtonMenu name={"LogIn"} url={"/login"} />
    </menu>
  );
};

export default MenuComponent;
