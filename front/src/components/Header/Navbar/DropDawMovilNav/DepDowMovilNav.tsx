"use client";
import { AuthContext } from "@/components/Context/GlobalContext";
import { localData } from "@/helpers/classManagementLocalSotorage";
import { IUserLoginRes } from "@/interfaces/user.interface";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext, useEffect } from "react";

export function MyDropdown() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    const dataUser: IUserLoginRes | undefined = localData.getStorage(localData.userData);
    if (dataUser) {
      setCurrentUser(dataUser);
    }
    console.log(dataUser);
  }, []);

  return (
    <div className="block mr-5 w-fit md:hidden">
      <Menu>
        {currentUser?.login ? (
          <>
            <MenuItem>
              <Link className="block data-[focus]:bg-blue-100" href="/dashboard">
                DashBoard
              </Link>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuButton>
              <Bars4Icon className="w-[40px] h-[40px]" />
            </MenuButton>
            <MenuItems anchor="bottom">
              <MenuItem>
                <Link className="block data-[focus]:bg-blue-100" href="/signIn">
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block data-[focus]:bg-blue-100" href="/createAccount">
                  Create Account
                </Link>
              </MenuItem>
            </MenuItems>
          </>
        )}
      </Menu>
    </div>
  );
}
