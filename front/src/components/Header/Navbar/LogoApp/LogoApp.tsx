import Link from "next/link";
import React from "react";

const LogoApp: React.FC = () => {
  return (
    <Link href="/home">
      <div className="flex items-center ml-1">
        <div className="w-10 h-10 bg-lime-200 rounded-e-full"></div>
        <strong>igital Innovation</strong>
      </div>
    </Link>
  );
};

export default LogoApp;
