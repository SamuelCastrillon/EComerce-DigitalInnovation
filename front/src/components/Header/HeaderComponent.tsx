import React from "react";
import NavbarComponent from "./Navbar/NavBarComponent";
import MenuCategories from "./CategoriesMenu/MenuCategories";

const HeaderComponent = () => {
  return (
    <header className="w-full">
      <NavbarComponent />
      <MenuCategories />
    </header>
  );
};

export default HeaderComponent;
