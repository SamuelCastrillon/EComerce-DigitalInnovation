"use client";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/helpers/Context/GlobalContext";
import ActionButton from "@/components/PublicComponents/Buttons/ActionButton/ActionButton";
import { localData } from "@/helpers/classManagementLocalSotorage";
import NavbarButtonsPublic from "./MenuButtonsComponents/NavbarButtonsPublic";
import NavbarButtonsUserSignIn from "./MenuButtonsComponents/NavbarButtonsUserSignIn";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import { NavigateButton } from "@/components/PublicComponents/Buttons/NavigateButton/NavigateButton";
import MenuDropDowCart from "./MenuDropDowCart/MenuDropDowCart";
import { useCookies } from "react-cookie";

const NavMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [cookies, setCookie, removeCookie] = useCookies(["userSignIn"]);
  const [cartGeneralStatus, setCartGeneralStatus] = useState({
    itemsLength: 0,
    totalPrice: 0,
  });
  const [showCart, shetShowCart] = useState(false);
  const [showMenu, shetShowMenu] = useState(false);

  useEffect(() => {
    shetShowMenu(false);
    shetShowCart(false);
  }, [pathname]);

  function dropDawCart() {
    shetShowCart(!showCart);
    shetShowMenu(false);
  }
  function dropDawMenu() {
    shetShowMenu(!showMenu);
    shetShowCart(false);
  }
  const logicSignOut = () => {
    setCurrentUser(null);
    localData.deletStorage(localData.userData);
    removeCookie("userSignIn");
    router.push("/home");
    console.log("SignOut");
  };

  return (
    <section className="flex gap-3 mr-5 ">
      {/* 
      //? Conditional rendering Button cart toggle show
       */}
      {pathname != "/dashboard/cart" &&
        (currentUser?.login ? (
          <ActionButton
            className={`flex p-2 rounded hover:bg-lime-900 font-bold items-center gap-1 relative ${
              showCart ? "bg-lime-900" : ""
            }`}
            onClick={dropDawCart}>
            <ShoppingCartIcon className="w-[25px] h-auto text-white" />
            {cartGeneralStatus.totalPrice > 0 && (
              <span className="hidden md:block">${cartGeneralStatus.totalPrice}</span>
            )}
            <ChevronDownIcon className="w-[25px] h-auto text-white" />
            {cartGeneralStatus.itemsLength > 0 && (
              <div className="top-0 left-[25px] w-4 h-4 bg-red-700 font-normal text-base rounded-[50%] flex items-center justify-center absolute">
                {cartGeneralStatus.itemsLength}
              </div>
            )}
          </ActionButton>
        ) : (
          <NavigateButton
            href="/signIn"
            className="flex items-center gap-1 p-2 font-bold rounded hover:bg-lime-900 ">
            <ShoppingCartIcon className="w-[25px] h-auto text-white" />
            <span className="hidden md:block">Cart</span>
          </NavigateButton>
        ))}

      {/* 
      //? Hide or show menu button
       */}
      <ActionButton
        className={`flex p-2 rounded hover:bg-lime-900 font-bold items-center gap-1 ${
          showMenu ? "bg-lime-900" : ""
        }`}
        onClick={dropDawMenu}>
        <UserIcon className="w-[25px] h-auto text-white" />
        <span className="hidden md:block">Account</span>
        <ChevronDownIcon className="w-[25px] h-auto text-white" />
      </ActionButton>

      {/* 
      //? DropDaw Cart
       */}
      {currentUser?.login && (
        <article
          className={`${
            showCart ? "flex" : "hidden"
          } flex-col gap-1 p-5 absolute top-[65px] right-0 bg-lime-950 z-20 rounded w-screen sm:w-1/2 sm:mr-1 md:mr-10`}>
          <MenuDropDowCart
            currentUserId={currentUser.user.id}
            cartGeneralStatus={cartGeneralStatus}
            setCartGeneralStatus={setCartGeneralStatus}
          />
        </article>
      )}

      {/* 
      //? DropDaw menu
       */}
      <menu
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col gap-1 p-5 absolute top-[65px] right-0 bg-lime-950 z-20 rounded w-screen md:w-1/3 sm:w-1/2 sm:mr-1`}>
        {currentUser?.login ? NavbarButtonsUserSignIn() : NavbarButtonsPublic()}

        {currentUser?.login && (
          <ActionButton
            className="flex items-center gap-1 p-2 font-bold rounded hover:bg-lime-900"
            onClick={logicSignOut}>
            <ArrowLeftStartOnRectangleIcon className="w-[25px] h-auto text-white mr-1" />
            <span>Sign Out</span>
          </ActionButton>
        )}
      </menu>
    </section>
  );
};

export default NavMenu;
