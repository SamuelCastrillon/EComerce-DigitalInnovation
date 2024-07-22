import React from "react";
import IconeMenu from "@/assets/icons/ic-round-menu.svg";

const CatMenuDrow = () => {
  return (
    <button className="flex h-8 items-center gap-1 ml-1">
      <img src={IconeMenu.src} alt="MenuIcone" />
      Categorias
    </button>
  );
};

export default CatMenuDrow;
