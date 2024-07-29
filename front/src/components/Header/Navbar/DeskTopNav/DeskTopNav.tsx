"use client";
import React, { useContext } from "react";
import ButtonNav from "../../ButtonNav/ButtonNav";
import { IDataButtons, NavDataUserSignIn, NavDataUserSignOut } from "../DataButtonsNav";
import { AuthContext } from "@/components/Context/GlobalContext";
import ActionButton from "@/components/PublicComponents/Buttons/ActionButton/ActionButton";
import { localData } from "@/helpers/classManagementLocalSotorage";

const buttonsStyles = "p-2 rounded hover:bg-lime-900 font-bold";

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
  const logicSignOut = () => {
    setCurrentUser({});
    localData.deletStorage(localData.userData);
    console.log("SignOut");
  };
  return (
    <menu className="hidden gap-3 mr-5 md:flex">
      {currentUser.login ? RenderButtons(NavDataUserSignIn) : RenderButtons(NavDataUserSignOut)}
      {currentUser.login && (
        <ActionButton className={buttonsStyles} onClick={logicSignOut}>
          Sign Out
        </ActionButton>
      )}
    </menu>
  );
};

export default DeskTopNav;
