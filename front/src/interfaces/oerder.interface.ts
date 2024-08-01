import { IProduct } from "./products.interface";
import { IUser } from "./user.interface";

//?Create Order interface
export interface ICreateOrderReq {
  userId: number;
  products: number[];
}

export interface IOrderResponce {
  date: string;
  id: number;
  products: IProduct[];
  status: string;
  user: IUser;
}

export interface IUserOrders {
  orders: IOrderResponce[];
}
