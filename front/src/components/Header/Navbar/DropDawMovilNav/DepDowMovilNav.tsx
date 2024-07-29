"use client";
import { AuthContext } from "@/components/Context/GlobalContext";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { IUserLoginRes } from "@/interfaces/user.interface";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

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

  return (
    <div className="relative block mr-5 w-fit md:hidden">
      <button onClick={changeMenuStatus}>
        <Bars4Icon className="w-[40px] h-[40px]" />
      </button>
      <div
        className={`absolute top-[53px] right-0 h-fit w-[200px] p-2 bg-lime-700 ${
          dropDowStatus ? "flex" : "hidden"
        } flex-col z-20`}>
        <Link className="block data-[focus]:bg-blue-100" href="/signIn">
          Sign In
        </Link>
        <Link className="block data-[focus]:bg-blue-100 " href="/createAccount">
          Create Account
        </Link>
      </div>
    </div>
  );
}
