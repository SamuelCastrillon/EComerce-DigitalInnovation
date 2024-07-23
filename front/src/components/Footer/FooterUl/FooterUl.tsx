import React from "react";
import { IFooterUl } from "./IFooterUl";

const FooterUl: React.FC<IFooterUl> = ({ title, ulElements }) => {
  return (
    <div className="font-sans">
      <h4 className="font-bold">{title}</h4>
      <ul>
        {ulElements.map((element: string, i: number) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterUl;
