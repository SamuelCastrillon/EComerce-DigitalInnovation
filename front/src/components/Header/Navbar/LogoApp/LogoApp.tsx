import Link from "next/link";
import React from "react";
import LogoPage from "@/assets/img/LogoPage.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "600", style: "normal", subsets: ["latin"] });

const LogoApp: React.FC = () => {
  return (
    <Link href="/home">
      <div className="flex items-center gap-1 ml-1">
        <img src={LogoPage.src} alt="Logo" className="h-[54px] w-auto rounded-[50%]" />
        <div className="text-xl">
          <span className={` hidden md:block ${poppins.className} `}>DigitaLInnovation</span>
        </div>
      </div>
    </Link>
  );
};

export default LogoApp;
