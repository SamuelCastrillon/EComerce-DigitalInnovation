"use client";
import React, { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import OrdersCard from "./OrdersCard";
import { AuthContext } from "@/helpers/Context/GlobalContext";
import { fetchUserOrders } from "@/helpers/userOrdersHelpers";
import { IOrderResponce } from "@/helpers/interfaces/oerder.interface";
import OrderDetailsModal from "./OrderDetailsModal/OrderDetailsModal";

const OrdersContainer = () => {
  const { currentUser } = useContext(AuthContext);
  const [userOrdersData, setUserOrdersData] = useState<IOrderResponce[]>();
  const [showOrderModaal, setShowOrderModal] = useState(false);
  const [orderSelect, setOrderSelect] = useState<null | number>(null);
  const [order, setOrder] = useState<string>("");

  function habdelerSelect(event: BaseSyntheticEvent) {
    setOrder(event.target.value);
    userOrdersData?.sort((a, b) => {
      if (order === "Max") {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    console.log(order);
  }

  useEffect(() => {
    currentUser?.login && fetchUserOrders(currentUser.token, setUserOrdersData);
  }, [currentUser]);

  useEffect(() => {
    console.log(userOrdersData);
  }, [userOrdersData]);

  return (
    <>
      <section className="py-8 antialiase md:py-16 ">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="max-w-5xl mx-auto">
            <div className="gap-4 p-4 rounded sm:flex sm:items-center sm:justify-between bg-lime-950">
              <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">My orders</h2>

              <div className="gap-4 mt-6 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 sr-only ">
                    Select order type
                  </label>
                  <select
                    id="order-type"
                    onChange={habdelerSelect}
                    className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 ">
                    {/* <option selected>Order By Id</option> */}
                    <option value="Max">Max to min</option>
                    <option value="Min">Min to max</option>
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

            <div className="flex flex-col max-h-[72vh] gap-5 mt-6 overflow-y-auto sm:mt-8">
              {userOrdersData &&
                userOrdersData.length &&
                userOrdersData.map((order: IOrderResponce) => {
                  return (
                    <OrdersCard
                      key={order.id}
                      dataOrder={order}
                      orderDetailsStatus={showOrderModaal}
                      setOrderDetailsStatus={setShowOrderModal}
                      setOrderID={setOrderSelect}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      {showOrderModaal && (
        <section className="absolute z-10 w-screen h-full p-10 bg-opacity-55 bg-slate-800">
          <div className="w-full px-4 mx-auto 2xl:px-0 md:w-[80%] lg:w-[60%]">
            {/* {orderSelect && userOrdersData &&
            userOrdersData.find((order) => {
              order.id = orderSelect && return
              (<OrderDetailsModal
                data={}
                setModalStatus={setShowOrderModal}
              />)}
            )} */}
            {orderSelect &&
              userOrdersData &&
              userOrdersData.map((orderData) => {
                if (orderData.id === orderSelect) {
                  return (
                    orderData && (
                      <OrderDetailsModal data={orderData} setModalStatus={setShowOrderModal} />
                    )
                  );
                }
              })}
          </div>
        </section>
      )}
    </>
  );
};

export default OrdersContainer;
