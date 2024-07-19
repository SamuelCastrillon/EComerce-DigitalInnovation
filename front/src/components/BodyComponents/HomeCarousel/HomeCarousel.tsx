import React from "react";

const HomeCarousel = () => {
  return (
    <section className="w-full h-96 bg-lime-200 relative">
      <div></div>
      <button className=" w-12 h-28 rounded font-sans font-bold text-4xl bg-white text-lime-500 hover:bg-lime-500 hover:text-white absolute left-5 top-1/3">
        &lt;
      </button>
      <button className="w-12 h-28 rounded font-sans font-bold text-4xl bg-white text-lime-500 hover:bg-lime-500 hover:text-white absolute right-5 top-1/3">
        &gt;
      </button>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="w-full h-24 bg-gradient-to-t from-gray-200 to-lime-200 absolute -bottom-24 -z-10 "></div>
    </section>
  );
};

export default HomeCarousel;
