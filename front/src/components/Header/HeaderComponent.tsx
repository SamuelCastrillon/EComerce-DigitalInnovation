import React from "react";
import NavbarComponent from "./Navbar/NavBarComponent";
import MenuComponent from "./Menu/MenuComponent";

const HeaderComponent = () => {
  return (
    <header className="w-full">
      <NavbarComponent />
      <MenuComponent />
    </header>
  );
};

export default HeaderComponent;
