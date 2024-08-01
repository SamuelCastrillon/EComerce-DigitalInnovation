import OrderDetailsCard from "@/components/BodyComponents/DashBoardComponents/OrdersComponents/OrderDetailsCard/OrderDetailsCard";
import { IOrderResponce } from "@/interfaces/oerder.interface";
import React from "react";

interface IOrderId {
  id: number;
}

const OrderDetailsView: React.FC<IOrderId> = async ({ id }) => {
  //   const productData: IProduct | undefined = await DataToBack.getProductById(id);
  //   return <>{productData ? <ProductDetailsCard data={productData} /> : "Error"}</>;
  const orderData: IOrderResponce | undefined = {};
  return <OrderDetailsCard data={orderData} />;
};
export default OrderDetailsView;
