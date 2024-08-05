"use client";
import React, { useContext } from "react";
import AccountTitle from "./AccountTitle";
import { AuthContext } from "@/helpers/Context/GlobalContext";

const AccountContainer = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  return (
    <>
      <section className="w-[400px] h-[400px] bg-white flex flex-col items-center">
        <AccountTitle />
        <div>Data</div>
      </section>
    </>
  );
};

export default AccountContainer;
