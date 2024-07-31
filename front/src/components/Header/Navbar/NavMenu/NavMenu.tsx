"use client";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/components/Context/GlobalContext";
import ActionButton from "@/components/PublicComponents/Buttons/ActionButton/ActionButton";
import { localData } from "@/helpers/classManagementLocalSotorage";
import NavbarButtonsPublic from "./MenuButtonsComponents/NavbarButtonsPublic";
import NavbarButtonsUserSignIn from "./MenuButtonsComponents/NavbarButtonsUserSignIn";
import { ArrowLeftStartOnRectangleIcon, UserIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";

const NavMenu = () => {
  const pathname = usePathname();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [showCart, shetShowCart] = useState(false);
  const [showMenu, shetShowMenu] = useState(false);

  useEffect(() => {
    const dataUser: object | undefined = localData.getStorage(localData.userData);
    if (dataUser) {
      setCurrentUser(dataUser);
    }
  }, []);

  useEffect(() => {
    shetShowMenu(false);
    shetShowCart(false);
  }, [pathname]);

  function drpDawCart() {
    shetShowCart(!showCart);
    shetShowMenu(false);
  }
  function drpDawMenu() {
    shetShowMenu(!showMenu);
    shetShowCart(false);
  }
  const logicSignOut = () => {
    setCurrentUser({});
    localData.deletStorage(localData.userData);
    console.log("SignOut");
  };

  return (
    <section className="flex gap-3 mr-5 ">
      {currentUser.login ? (
        <ActionButton
          className={"flex p-2 rounded hover:bg-lime-900 font-bold items-center gap-1"}
          onClick={drpDawCart}>
          <ShoppingCartIcon className="w-[25px] h-auto text-white" />
          <span className="hidden md:block">Cart</span>
          <ChevronDownIcon className="w-[25px] h-auto text-white" />
        </ActionButton>
      ) : (
        <NavigateButton
          href="/signIn"
          className="flex items-center gap-1 p-2 font-bold rounded hover:bg-lime-900">
          <ShoppingCartIcon className="w-[25px] h-auto text-white" />
          <span className="hidden md:block">Cart</span>
        </NavigateButton>
      )}

      <ActionButton
        className={"flex p-2 rounded hover:bg-lime-900 font-bold items-center gap-1"}
        onClick={drpDawMenu}>
        <UserIcon className="w-[25px] h-auto text-white" />
        <span className="hidden md:block">Account</span>
        <ChevronDownIcon className="w-[25px] h-auto text-white" />
      </ActionButton>

      <menu
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col gap-1 p-5 absolute top-[55px] right-0 bg-lime-800 z-20 rounded`}>
        {currentUser.login ? NavbarButtonsUserSignIn() : NavbarButtonsPublic()}

        {currentUser.login && (
          <ActionButton
            className="flex items-center gap-1 p-2 font-bold rounded hover:bg-lime-900"
            onClick={logicSignOut}>
            <ArrowLeftStartOnRectangleIcon className="w-[35px] h-auto text-white mr-1" />
            <span>Sign Out</span>
          </ActionButton>
        )}
      </menu>
    </section>
  );
};

export default NavMenu;
