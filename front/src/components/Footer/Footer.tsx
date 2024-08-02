import React from "react";
import { FooterData } from "./FooterData";
import FooterUl from "./FooterUl/FooterUl";
import { IFooterUl } from "./FooterUl/IFooterUl";
import Link from "next/link";
const Footer: React.FC = () => {
  const UlData: IFooterUl[] = FooterData;

  return (
    <>
      <footer className="flex flex-col h-fit md:flex-row items-center w-full md:w-[95%] md:h-[300px] p-5 mt-5 gap-10 md:rounded-t-md bg-lime-950 text-gray-300">
        <div className="flex flex-col w-full gap-10 md:flex-row h-fit md:w-1/2">
          {UlData.map((element, i: number) => {
            return <FooterUl key={i} title={element.title} ulElements={element.ulElements} />;
          })}
        </div>
        <div className="w-full md:w-1/2">
          <form>
            <h3 className="text-3xl font-bold">Get the best offer</h3>
            <div className="flex gap-5">
              <Link href={"/createAccount"}>Create Acount</Link>
              <Link href={"/signIn"}>Sign in</Link>
            </div>
            {/* <hr className="w-full h-[1px] mt-10 border-none bg-lime-600" />
            <div className="flex flex-col">
              <label>Subscribe to receive discounts!</label>
              <input type="email"></input>
            </div>
            <button type="submit">Subscribe</button>
            <hr className="w-full h-[1px] mt-10 border-none bg-lime-600" />
            <strong></strong> */}
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
