import Link from "next/link";
import React from "react";

interface ICategorieCard {
  name: string;
  children: any;
}

const CategorieCard: React.FC<ICategorieCard> = ({ name, children }) => {
  const categorieRoute = name;
  return (
    <Link href={`/shop/products/${categorieRoute.toLowerCase()}`}>
      <div className="w-[120px] h-[180px] bg-white border-lime-500 border-[1px] rounded-md flex flex-col items-center justify-around">
        {children}
        <strong>{name}</strong>
      </div>
    </Link>
  );
};

export default CategorieCard;
