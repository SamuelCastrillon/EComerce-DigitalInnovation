"use client";
import { AuthContext } from "@/components/Context/GlobalContext";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { IUserLoginRes } from "@/interfaces/user.interface";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { IDataButtons, NavDataUserSignIn, NavDataUserSignOut } from "../DataButtonsNav";
import ButtonNav from "../../ButtonNav/ButtonNav";
import ActionButton from "@/components/PublicComponents/Buttons/ActionButton/ActionButton";

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

export function MyDropdown() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [dropDowStatus, setDropDowStatus] = useState(false);

  function changeMenuStatus() {
    setDropDowStatus(!dropDowStatus);
    console.log(dropDowStatus);
  }

  useEffect(() => {
    const dataUser: IUserLoginRes | undefined = localData.getStorage(localData.userData);
    if (dataUser) {
      setCurrentUser(dataUser);
    }
    console.log(dataUser);
  }, []);

  const logicSignOut = () => {
    setCurrentUser({});
    localData.deletStorage(localData.userData + currentUser.user.id);
    console.log("SignOut");
  };

  return (
    <div className="relative block mr-5 w-fit md:hidden">
      <button onClick={changeMenuStatus}>
        <Bars4Icon className="w-[40px] h-[40px]" />
      </button>
      <div
        className={`absolute top-[53px] right-0 h-fit w-[200px] p-2 bg-lime-700 ${
          dropDowStatus ? "flex" : "hidden"
        } flex-col z-20`}>
        {currentUser.login ? RenderButtons(NavDataUserSignIn) : RenderButtons(NavDataUserSignOut)}
        {currentUser.login && (
          <ActionButton className={buttonsStyles} onClick={logicSignOut}>
            Sign Out
          </ActionButton>
        )}
      </div>
    </div>
  );
}
