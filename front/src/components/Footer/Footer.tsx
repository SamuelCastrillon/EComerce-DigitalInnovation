import React from "react";
import { FooterData } from "./FooterData";
import FooterUl from "./FooterUl/FooterUl";
import { IFooterUl } from "./FooterUl/IFooterUl";
const Footer: React.FC = () => {
  const UlData: IFooterUl[] = FooterData;

  return (
    <footer className="flex mt-10 mb-10">
      <div className="w-1/2 flex justify-around">
        {UlData.map((element, i: number) => {
          return <FooterUl key={i} title={element.title} ulElements={element.ulElements} />;
        })}
      </div>
      <div className="w-1/2">
        <form>
          <h3></h3>
          <button></button>
          <button></button>
          <hr />
          <label></label>
          <input></input>
          <button></button>
          <hr />
          <strong></strong>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
