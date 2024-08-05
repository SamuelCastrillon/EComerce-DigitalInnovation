"use client";
import React, { useContext } from "react";
import AccountTitle from "./AccountTitle";
import { AuthContext } from "@/helpers/Context/GlobalContext";
import AccounBody from "./AccounBody";
import { IUser } from "@/helpers/interfaces/user.interface";

const AccountContainer = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  if (currentUser) {
    const { id, name, email, address, orders, phone, role }: IUser = currentUser?.user;
  }

  return (
    <>
      {currentUser && (
        <>
          <SectionContainer>
            <AccountTitle
              userImage=""
              userName={currentUser.user.name}
              userType={currentUser.user.role}
            />
          </SectionContainer>
          <SectionContainer>
            {}
            <AccounBody
              dataBody={{
                userEmail: currentUser.user.email,
                userPhone: currentUser.user.phone,
                userAdress: currentUser.user.address,
                userOrdersCuantity: currentUser.user.orders.length,
              }}
            />
          </SectionContainer>
        </>
      )}
    </>
  );
};

export default AccountContainer;

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full md:w-[80%] h-fit bg-gray-300 flex gap-5 items-center justify-start p-[25px] relative mt-5 rounded-md">
      {children}
    </section>
  );
};
