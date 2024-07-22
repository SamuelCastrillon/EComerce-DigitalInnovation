"use client";
import React from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import IconeMenu from "@/assets/icons/ic-round-menu.svg";

const MenuComponent: React.FC = () => {
  return (
    <menu className="h-8 flex bg-lime-600 text-white gap-5">
      <button className="flex h-8 items-center gap-1 ml-1">
        <img src={IconeMenu.src} alt="MenuIcone" />
        Categorias
      </button>
      <ButtonMenu name={"Register"} url={"/register"} />
      <ButtonMenu name={"LogIn"} url={"/login"} />
    </menu>
  );
};

export default MenuComponent;
