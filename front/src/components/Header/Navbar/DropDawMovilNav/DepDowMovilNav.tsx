"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function MyDropdown() {
  return (
    <div className="block mr-5 w-fit md:hidden">
      <Menu>
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
      </Menu>
    </div>
  );
}
