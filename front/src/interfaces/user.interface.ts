//?User login interfaces

export interface IUserLoginReq {
  email: string;
  password: string;
}
export interface IUserLoginRes {
  login: boolean;
  user: object;
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
