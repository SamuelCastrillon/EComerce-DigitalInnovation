import React from "react";
import { FooterData } from "./FooterData";
import FooterUl from "./FooterUl/FooterUl";
import { IFooterUl } from "./FooterUl/IFooterUl";
const Footer: React.FC = () => {
  const UlData: IFooterUl[] = FooterData;

  return (
    <footer className="flex items-center w-[95%] h-[300px] p-5 mt-5 gap-10 rounded-t-md bg-lime-950 text-gray-300">
      <div className="flex w-1/2 gap-10">
        {UlData.map((element, i: number) => {
          return <FooterUl key={i} title={element.title} ulElements={element.ulElements} />;
        })}
      </div>
      <div className="w-1/2">
        <form>
          <h3 className="text-3xl font-bold">Get the best offer</h3>
          <div className="flex gap-5">
            <button type="button">Create Acount</button>
            <button type="button">Sing in</button>
          </div>
          <hr className="w-full h-[1px] mt-10 border-none bg-lime-600" />
          <div className="flex flex-col">
            <label>Subscribe to receive discounts!</label>
            <input type="email"></input>
          </div>
          <button type="submit">Subscribe</button>
          <hr className="w-full h-[1px] mt-10 border-none bg-lime-600" />
          <strong></strong>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
