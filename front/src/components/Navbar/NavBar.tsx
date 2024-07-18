import React from "react";
import LogoApp from "../LogoApp/LogoApp";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between">
      <LogoApp />
      <ul className="nav-ul">
        <h3>Nav Bar</h3>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
