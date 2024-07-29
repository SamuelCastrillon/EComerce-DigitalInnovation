import Link from "next/link";
import React from "react";

interface IButtonData {
  children: React.ReactNode;
  url: string;
  className: string;
}

const ButtonNav: React.FC<IButtonData> = ({ url, className, children }) => {
  return (
    <button className={className}>
      <Link href={url} className="flex items-center">
        {children}
      </Link>
    </button>
  );
};

export default ButtonNav;
