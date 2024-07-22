import Link from "next/link";
import React from "react";

interface ICategorieCard {
  name: string;
  children: any;
}

const CategorieCard: React.FC<ICategorieCard> = ({ name, children }) => {
  return (
    <Link href={`/shop/filters/${name}`}>
      <div className="w-56 h-80 bg-white border-lime-500 border-[1px] rounded-md flex flex-col items-center justify-around">
        {children}
        <strong className="text-2xl">{name}</strong>
      </div>
    </Link>
  );
};

export default CategorieCard;
