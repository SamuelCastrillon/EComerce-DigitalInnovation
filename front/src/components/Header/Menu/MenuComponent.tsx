import React from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";

const MenuComponent = () => {
  return (
    <menu className="h-8 flex bg-lime-600 text-white gap-5">
      <button className="flex h-8 items-center">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTQgMThoMTZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMW0wLTVoMTZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMU0zIDdjMCAuNTUuNDUgMSAxIDFoMTZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTFINGMtLjU1IDAtMSAuNDUtMSAxIi8+PC9zdmc+"
          alt="IcMenu"
        />
        Categorias
      </button>
      <ButtonMenu name={"Register"} url={"/register"} />
      <ButtonMenu name={"LogIn"} url={"/login"} />
    </menu>
  );
};

export default MenuComponent;
