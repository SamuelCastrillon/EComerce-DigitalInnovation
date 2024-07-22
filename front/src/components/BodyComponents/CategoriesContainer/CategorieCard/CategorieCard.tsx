import Link from "next/link";
import React from "react";

interface ICategorieCard {
  name: string;
  icone: any;
}

const CategorieCard: React.FC<ICategorieCard> = ({ name, icone }) => {
  return (
    <Link href={`/shop/filters/${name}`}>
      <div className="w-56 h-80 bg-white border-lime-400 border-[1px] rounded-md flex flex-col items-center justify-around">
        <img src={icone.src} alt="CategorieIcone" className="w-[45%] h-auto" />
        <strong className="text-2xl">{name}</strong>
      </div>
    </Link>
  );
};

export default CategorieCard;
