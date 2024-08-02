import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface IButtonMenuDrow {
  onClick: Function;
  previusState: boolean;
}

const ButtonMenuDrow: React.FC<IButtonMenuDrow> = ({ onClick, previusState }) => {
  function handeler() {
    onClick(!previusState);
  }
  return (
    <button
      onClick={handeler}
      className="flex items-center w-1/2 gap-1 p-1 pl-5 my-1 text-lg rounded hover:bg-lime-950 border-lime-950 md:hidden">
      <Bars3Icon className="text-white size-6" />
      Categories
    </button>
  );
};

export default ButtonMenuDrow;
