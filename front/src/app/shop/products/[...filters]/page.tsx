import ShopView from "@/views/Shop/ShopView";
import React from "react";

interface IFiltersParams {
  params: { filters: string[] };
}

const page: React.FC<IFiltersParams> = ({ params }) => {
  return <ShopView params={params} />;
};

export default page;
