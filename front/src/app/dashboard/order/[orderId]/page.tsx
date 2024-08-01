import ProductDetailsView from "@/views/ProductDetails/ProductDetailsView";
import OrderDetailsView from "@/views/UserDashboard/Orders/OrderDetails/OrderDetailsView";
import React from "react";

interface IOrderId {
  params: { orderId: string };
}

const page: React.FC<IOrderId> = ({ params }) => {
  const id: number = Number(params.orderId);
  return <OrderDetailsView id={id} />;
};

export default page;
