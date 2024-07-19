import Link from "next/link";
import React from "react";

interface IButtonData {
  name: string;
  url: string;
}

const ButtonNav: React.FC<IButtonData> = ({ name, url }) => {
  return (
    <Link href={url} className="flex items-center">
      <button>{name}</button>
    </Link>
  );
};

export default ButtonNav;
