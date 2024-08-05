"use client";
import React, { useContext } from "react";
import { AuthContext } from "../Context/GlobalContext";
import { IUser } from "../interfaces/user.interface";

interface IContextUser {
  currentUser: {} | IUser;
  setCurrentUser: (dataCurrentUser: IUser) => {};
}

const useCurrentUser = (): IContextUser => {
  const currentUser = useContext(AuthContext);

  return currentUser;
};

export default useCurrentUser;
