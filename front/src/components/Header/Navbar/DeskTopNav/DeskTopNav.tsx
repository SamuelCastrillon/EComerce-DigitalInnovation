"use client";
import React, { useContext } from "react";
import ButtonNav from "../../ButtonNav/ButtonNav";
import { IDataButtons, NavDataUserSignIn, NavDataUserSignOut } from "../DataButtonsNav";
import { AuthContext } from "@/components/Context/GlobalContext";

const buttonsStyles = "p-2 rounded hover:bg-lime-900";

const RenderButtons = (data: IDataButtons[]) => {
  return data.map((e, i) => {
    return (
      <ButtonNav key={i} url={e.url} className={buttonsStyles}>
        {e.name}
      </ButtonNav>
    );
  });
};

const DeskTopNav = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  return (
    <menu className="hidden gap-3 mr-5 md:flex">
      {currentUser.login ? RenderButtons(NavDataUserSignIn) : RenderButtons(NavDataUserSignOut)}
    </menu>
  );
};

export default DeskTopNav;
