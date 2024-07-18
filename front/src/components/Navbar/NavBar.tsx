import React from "react";
import LogoApp from "../LogoApp/LogoApp";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="h-14 flex justify-evenly items-center bg-lime-950 text-white font-bold">
        <LogoApp />
        <ul className="nav-ul">
          <h3>Nav Bar</h3>
        </ul>
        <button>Login</button>
      </nav>
      <menu className="h-8 flex bg-lime-600 text-white">
        <div className="flex m-1 gap-1">
          <img src="" alt="menuIcone" />
          <span>Categorias</span>
        </div>
        <button>Contacto</button>
        <button>Ayuda</button>
      </menu>
    </header>
  );
};

export default Navbar;
