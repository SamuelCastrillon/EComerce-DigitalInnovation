import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const CMenuDrow = () => {
  return (
    <button className="flex h-8 items-center gap-1 ml-1">
      <Bars3Icon className="size-6 text-white" />
      Categorias
    </button>
  );
};

export default CMenuDrow;
