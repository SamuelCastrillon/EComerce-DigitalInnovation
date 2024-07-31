import Link from "next/link";
import React from "react";

interface IButtonData {
  children: React.ReactNode;
  url: string;
  className: string;
}

const ButtonNav: React.FC<IButtonData> = ({ url, className, children }) => {
  return (
    <Link href={url} className={className}>
      <button className="flex items-center">{children}</button>
    </Link>
  );
};

export default ButtonNav;
