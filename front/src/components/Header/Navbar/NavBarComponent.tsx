import React from "react";
import LogoApp from "./LogoApp/LogoApp";
import SearchForm from "./SeacrhForm/SearchForm";
import NavMenu from "./NavMenu/NavMenu";

const NavbarComponent: React.FC = () => {
  return (
    <nav className="h-[60px] flex justify-between px-2 items-center bg-lime-950 text-white gap-2 w-full">
      <LogoApp />
      <SearchForm />
      <NavMenu />
    </nav>
  );
};

export default NavbarComponent;
