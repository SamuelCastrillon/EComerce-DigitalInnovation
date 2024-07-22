import Link from "next/link";
import React from "react";

interface ICategorieCard {
  name: string;
  url: string;
  icone: any;
}

const CategorieCard: React.FC<ICategorieCard> = ({ name, url, icone }) => {
  return (
    <Link href={url}>
      <div className="w-56 h-80 bg-white border-lime-400 border-[1px] rounded-md flex flex-col items-center justify-around">
        <img src={icone.src} alt="CategorieIcone" />
        <strong>{name}</strong>
      </div>
    </Link>
  );
};

export default CategorieCard;
