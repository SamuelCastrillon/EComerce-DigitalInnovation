import { IProduct } from "./products.interface";

//?Create Order interface
export interface ICreateOrderReq {
  userId: number;
  products: number[];
}

export interface IOrderResponce {
  id: number;
  status: string;
  date: string;
  products: IProduct[];
}

export interface IUserOrders {
  orders: IOrderResponce[];
}
