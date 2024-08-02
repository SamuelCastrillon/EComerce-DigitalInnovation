import { IOrderResponce } from "@/interfaces/oerder.interface";
import Link from "next/link";
import React from "react";

interface IOrdersCard {
  dataOrder: IOrderResponce;
  orderDetailsStatus: boolean;
  setOrderDetailsStatus: Function;
  setOrderID: Function;
}

const OrdersCard: React.FC<IOrdersCard> = ({
  dataOrder,
  orderDetailsStatus,
  setOrderDetailsStatus,
  setOrderID,
}) => {
  const { id, date, products, status } = dataOrder;
  const price = products.reduce((totalPrice, product) => {
    return (totalPrice += product.price);
  }, 0);
  const dateShort = date.split("T");

  function handelerDetails() {
    setOrderDetailsStatus(!orderDetailsStatus);
    setOrderID(id);
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-white">
      <dl className="w-1/3 lg:w-auto">
        <dt className="text-base font-medium text-gray-500 ">Order ID:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
          <a href="#" className="hover:underline">
            #{id}
          </a>
        </dd>
      </dl>

      <dl className="w-1/3 lg:w-auto ">
        <dt className="text-base font-medium text-gray-500">Date:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900">{dateShort[0]}</dd>
      </dl>

      <dl className="w-1/3 lg:w-auto ">
        <dt className="text-base font-medium text-gray-500">Price:</dt>
        <dd className="mt-1.5 text-base font-semibold text-gray-900 ">${price}</dd>
      </dl>

      <dl className="w-1/3 lg:w-auto ">
        <dt className="text-base font-medium text-gray-500 ">Status:</dt>
        <dd className="flex mt-1.5 items-center font-medium w-fit">
          <svg
            className="w-3 h-3 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"
            />
          </svg>
          {status}
        </dd>
      </dl>

      <button
        onClick={handelerDetails}
        className="inline-flex justify-center w-full px-3 py-2 text-sm font-medium text-gray-300 border border-gray-400 rounded-lg bg-lime-950 hover:bg-lime-800 hover:text-primary-700 focus:z-10 lg:w-auto">
        View details
      </button>
    </div>
  );
};

export default OrdersCard;
