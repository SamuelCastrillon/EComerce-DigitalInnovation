import { IOrderResponce } from "@/interfaces/oerder.interface";
import Link from "next/link";
import React from "react";

interface IOrder {
  data: IOrderResponce;
}

const OrderDetailsCard: React.FC<IOrder> = ({ data }) => {
  const { id, date, products, status, user } = data;
  return (
    <section className="p-8 m-8 antialiased bg-white rounded">
      <div className="max-w-2xl px-4 mx-auto 2xl:px-0 md:max-w-screen-2xl">
        <h2 className="text-xl font-semibold text-lime-950 ">Order Details!</h2>
        <p className="mb-6 text-gray-700 md:mb-8">Your order Id: #{id}</p>
        <div className="flex flex-col gap-5 p-6 mb-6 border rounded-lg sm:space-y-2 bg-lime-950 md:mb-8">
          <dl className="flex items-center justify-between gap-4">
            <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">Date</dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">14 May 2024</dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
              Payment Method
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              JPMorgan monthly installments
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">Name</dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              Flowbite Studios LLC
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">Address</dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              34 Scott Street, San Francisco, California, USA
            </dd>
          </dl>
          <dl className="items-center justify-between gap-4 sm:flex">
            <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">Phone</dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              +(123) 456 7890
            </dd>
          </dl>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            href="#"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-gray-400 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            Return to shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsCard;
