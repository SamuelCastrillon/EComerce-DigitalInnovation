"use client";
import React, { useContext, useEffect, useState } from "react";
import OrdersCard from "./OrdersCard";
import { AuthContext } from "@/components/Context/GlobalContext";
import { fetchUserOrders } from "@/helpers/userOrdersHelpers";
import { IOrderResponce } from "@/interfaces/oerder.interface";

const OrdersContainer = () => {
  const { currentUser } = useContext(AuthContext);
  const [userOrdersData, setUserOrdersData] = useState<IOrderResponce[]>();

  useEffect(() => {
    currentUser.login && fetchUserOrders(currentUser.token, setUserOrdersData);
  }, [currentUser]);

  useEffect(() => {
    console.log(userOrdersData);
  }, [userOrdersData]);

  return (
    <section className="py-8 antialiase md:py-16 ">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="max-w-5xl mx-auto">
          <div className="gap-4 p-4 rounded sm:flex sm:items-center sm:justify-between bg-lime-950">
            <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">My orders</h2>

            <div className="gap-4 mt-6 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <div>
                <label
                  // for="order-type"
                  className="block mb-2 text-sm font-medium text-gray-900 sr-only ">
                  Select order type
                </label>
                <select
                  id="order-type"
                  className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 ">
                  <option selected>All orders</option>
                  <option value="pre-order">Pre-order</option>
                  <option value="transit">In transit</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              <span className="inline-block text-gray-500 "> from </span>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 sr-only ">
                  Select duration
                </label>
                <select
                  id="duration"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                  <option selected>this week</option>
                  <option value="this month">this month</option>
                  <option value="last 3 months">the last 3 months</option>
                  <option value="lats 6 months">the last 6 months</option>
                  <option value="this year">this year</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-6 sm:mt-8">
            {userOrdersData &&
              userOrdersData.length &&
              userOrdersData.map((order: IOrderResponce) => {
                return <OrdersCard key={order.id} dataOrder={order} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersContainer;
