import Link from "next/link";
import React from "react";
import LogoPage from "@/assets/img/LogoPage.jpg";

const LogoApp: React.FC = () => {
  return (
    <Link href="/home">
      <div className="flex items-center ml-1 gap-1">
        <img src={LogoPage.src} alt="Logo" className="h-[54px] w-auto rounded-[50%]" />
        {/* <div className="w-10 h-10 bg-lime-200 rounded-e-full"></div> */}
        <strong className="text-xl">DigitaLInnovation</strong>
      </div>
    </Link>
  );
};

export default LogoApp;
