import React from "react";
import { IButtonForm } from "../FormInterface";

const ButtonForm: React.FC<IButtonForm> = ({ name }) => {
  return (
    <button className="" type="submit">
      {name}
    </button>
  );
};

export default ButtonForm;
