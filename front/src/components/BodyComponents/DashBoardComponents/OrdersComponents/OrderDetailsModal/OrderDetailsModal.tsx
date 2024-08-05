import { IOrderResponce } from "@/helpers/interfaces/oerder.interface";
import { IProduct } from "@/helpers/interfaces/products.interface";
import Link from "next/link";
import React from "react";
import OrderProductCard from "./OrderProductCard";

interface IOrder {
  data: IOrderResponce | undefined;
  setModalStatus: Function;
}

const OrderDetailsModal: React.FC<IOrder> = ({ data, setModalStatus }) => {
  if (data === undefined) {
    return;
  }

  const { id, date, products, status } = data;

  function handelerClose() {
    setModalStatus(false);
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-4 bg-white rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-lime-950 ">Order Details!</h2>
          <button
            onClick={handelerClose}
            className="justify-center px-3 py-2 text-sm font-medium text-gray-300 rounded-lg w-fit bg-lime-950 hover:bg-lime-800 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:w-auto">
            Close
          </button>
        </div>
        <dl className="flex items-center justify-between">
          <dt className="mb-1 font-normal text-gray-500 sm:mb-0 ">Order Id:</dt>
          <dd className="font-medium text-gray-900 sm:text-end">#{id}</dd>
        </dl>
        <dl className="flex items-center justify-between ">
          <dt className="mb-1 font-normal text-gray-500 sm:mb-0">Date</dt>
          <dd className="font-medium text-gray-900 sm:text-end">{date}</dd>
        </dl>
        <dl className="items-center justify-between sm:flex">
          <dt className="mb-1 font-normal text-gray-500 sm:mb-0 ">Status</dt>
          <dd className="font-medium text-gray-900 sm:text-end">{status}</dd>
        </dl>
      </div>
      <hr className="my-2 border-white" />
      <div className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-lg">
        {products.map((product: IProduct) => {
          return <OrderProductCard key={product.id} data={product} />;
        })}
      </div>
    </>
  );
};

export default OrderDetailsModal;
