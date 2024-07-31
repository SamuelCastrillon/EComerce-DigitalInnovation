import React from "react";
import LogoApp from "./LogoApp/LogoApp";
import { MyDropdown } from "./DropDawMovilNav/DropDowMovilNav";
import ShearcForm from "./SeacrhForm/ShearcForm";
import NavMenu from "./NavMenu/NavMenu";

const NavbarComponent: React.FC = () => {
  return (
    <nav className="h-[60px] flex justify-between pl-2 items-center bg-lime-950 text-white ">
      <LogoApp />
      <ShearcForm />
      {/* <MyDropdown /> */}
      <NavMenu />
    </nav>
  );
};

export default NavbarComponent;
