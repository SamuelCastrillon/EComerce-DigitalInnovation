import React from "react";
import { IButtonForm } from "../FormInterface";

const ButtonForm: React.FC<IButtonForm> = ({ name, type }) => {
  return (
    <button className="" type={type}>
      {name}
    </button>
  );
};

export default ButtonForm;
