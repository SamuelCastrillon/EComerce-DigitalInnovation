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
      <div className="w-[126px] h-[160px] flex flex-col items-center justify-around p-[2px] rounded-sm hover:shadow-lg hover:shadow-lime-200 hover:bg-gradient-to-bl hover:from-gray-800 hover:to-lime-300 shadow-lime-950">
        <div className="flex items-center justify-center h-[80px] w-[120px] rounded-t-sm bg-gradient-to-tl from-lime-700 to-lime-300">
          {children}
        </div>
        <div className="flex items-center justify-center w-full bg-gradient-to-tl from-gray-800 to-gray-500 rounded-sm h-[80px]">
          <strong className="text-gray-300">{name}</strong>
        </div>
      </div>
    </Link>
  );
};

export default CategorieCard;
