import React from "react";

const OrderSummary = () => {
  return (
    <section>
      <h3>Order Summary</h3>
      <div>
        <span>Original Price</span>
        <span>$</span>
      </div>
      <div>
        <span>Discount</span>
        <span>%</span>
      </div>
      <div>
        <span>Quantity of products</span>
        <span>number</span>
      </div>
      <hr />
      <div>
        <span>Total</span>
        <span>$</span>
      </div>
      <button>Proceed to Checkout</button>
    </section>
  );
};

export default OrderSummary;
