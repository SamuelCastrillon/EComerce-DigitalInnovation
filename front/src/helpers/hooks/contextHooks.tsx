"use client";
import React, { useContext } from "react";
import { AuthContext, IAuthcontext } from "../Context/GlobalContext";
import { IUserLoginRes } from "../interfaces/user.interface";

const useCurrentUser = (data: IUserLoginRes) => {
  const { currentUser, setCurrentUser } = useContext<IAuthcontext>(AuthContext);
  if (data) {
    setCurrentUser(data);
  }
  return { currentUser, setCurrentUser };
};

export default useCurrentUser;
