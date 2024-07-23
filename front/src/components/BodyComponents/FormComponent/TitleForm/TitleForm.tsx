import React from "react";
import { ITitleForm } from "../FormInterface";

const TitleForm: React.FC<ITitleForm> = ({ title, icone }) => {
  return (
    <div className="flex gap-5">
      <img src={icone} alt="CoffeLogo" className="iconeTitleForm" />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default TitleForm;
