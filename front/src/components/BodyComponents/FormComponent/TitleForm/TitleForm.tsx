import React from "react";
import { ITitleForm } from "../FormInterface";

const TitleForm: React.FC<ITitleForm> = ({ title, icone }) => {
  return (
    <div className="flex gap-2 p-2 mt-5 rounded bg-lime-950">
      <img src={icone} alt="Page Logo" className=" w-[30px] h-auto rounded-[50%]" />
      <h2 className="text-2xl font-bold text-gray-200">{title}</h2>
    </div>
  );
};

export default TitleForm;
