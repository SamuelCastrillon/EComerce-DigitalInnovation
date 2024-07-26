import React from "react";

const CartProductCard = (data) => {
  const { image, name, price, description, categoryId, stock } = data;
  return (
    <div className="flex w-[350px] h-[100px] gap-2 bg-gray-300">
      <div className="w-[100px] h-[100px] bg-lime-900"></div>
      {/* <img src={image} alt={`Product Image - ${name}`} className="w-[50px]" /> */}
      <div className="flex flex-col w-[240px] h-full justify-around">
        <div className="flex w-full">
          <strong>{name}</strong>
          <span>{`$${price}`}</span>
        </div>
        <div className="flex w-full">
          <span>{`Product Stok: ${stock}`}</span>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
