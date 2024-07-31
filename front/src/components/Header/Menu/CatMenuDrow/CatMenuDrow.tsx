import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const CMenuDrow = () => {
  return (
    <button className="flex items-center h-8 gap-1 ml-1">
      <Bars3Icon className="text-white size-6" />
      Categories
    </button>
  );
};

export default CMenuDrow;
