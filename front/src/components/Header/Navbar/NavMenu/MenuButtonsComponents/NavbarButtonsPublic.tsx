import React from "react";
import { ArrowLeftEndOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { IDataButtons } from "./Buttons.InterFaces";
import RenderButtons from "./RenderButtonsFunction";

const NavDataUserSignOut: IDataButtons[] = [
  {
    name: "Sign in",
    url: "/signIn",
    icone: <ArrowLeftEndOnRectangleIcon className="w-[25px] h-auto text-white mr-1" />,
  },
  {
    name: "Create Acount",
    url: "/createAccount",
    icone: <UserPlusIcon className="w-[25px] h-auto text-white mr-1" />,
  },
];

const NavbarButtonsPublic = () => {
  return RenderButtons(NavDataUserSignOut);
};
export default NavbarButtonsPublic;
