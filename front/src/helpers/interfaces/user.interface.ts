import { IOrderResponce } from "./oerder.interface";

//?User login interfaces
export interface IUserLoginReq {
  email: string;
  password: string;
}
export interface IUserLoginRes {
  login: boolean;
  user: IUser;
  token: string;
}

//?User Register interfaces
export interface IUserRegisterReq {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

//? User active
export interface IUser extends IUserRegisterReq {
  id: number;
  role: string;
  orders: IOrderResponce[];
}
