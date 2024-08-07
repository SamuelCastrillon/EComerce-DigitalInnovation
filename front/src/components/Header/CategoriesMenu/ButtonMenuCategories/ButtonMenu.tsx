import Link from "next/link";
import React from "react";

interface IButtonData {
  name: string;
}

const ButtonMenu: React.FC<IButtonData> = ({ name }) => {
  const categorieRoute = name;
  return (
    <Link
      href={`/shop/products/${categorieRoute.toLowerCase()}`}
      className="flex items-center w-1/2 p-1 pl-5 text-lg rounded-sm hover:text-gray-800 hover:font-bold hover:bg-gradient-to-br from-lime-500 to-lime-700 md:text-base md:px-2 md:w-fit ">
      <button>{name}</button>
    </Link>
  );
};

export default ButtonMenu;
