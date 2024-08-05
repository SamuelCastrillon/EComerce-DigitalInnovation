import React from "react";
import ButtonNav from "../../../ButtonNav/ButtonNav";
import { IDataButtons } from "./Buttons.InterFaces";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const NavDataUserSignOut: IDataButtons[] = [
  {
    name: "My Accout",
    url: "/dashboard/account",
    icone: <UserCircleIcon className="w-[25px] h-auto text-white mr-1" />,
  },
  {
    name: "My orders",
    url: "/dashboard/orders",
    icone: <ShoppingBagIcon className="w-[25px] h-auto text-white mr-1" />,
  },
];

const RenderButtons = (data: IDataButtons[]) => {
  return data.map((e, i) => {
    return (
      <ButtonNav
        key={i}
        url={e.url}
        className={"flex gap-2 p-2 rounded hover:bg-lime-900 font-bold"}>
        {e.icone}
        <span>{e.name}</span>
      </ButtonNav>
    );
  });
};

const NavbarButtonsUserSignIn = () => {
  return RenderButtons(NavDataUserSignOut);
};
export default NavbarButtonsUserSignIn;
