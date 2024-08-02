import Link from "next/link";
import React from "react";
import LogoPage from "@/assets/img/LogoPage.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "600", style: "normal", subsets: ["latin"] });

const LogoApp: React.FC = () => {
  return (
    <Link href="/home">
      <div className="flex items-center gap-1 min-w-[60px] w-fit ">
        <img src={LogoPage.src} alt="Logo" className="h-[54px] w-[54px] rounded-[50%]" />
        <strong className={`hidden md:flex ${poppins.className} w-[180px] text-xl`}>
          DigitaLInnovation
        </strong>
      </div>
    </Link>
  );
};

export default LogoApp;
