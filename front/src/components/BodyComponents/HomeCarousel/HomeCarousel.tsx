"use client";
import React, { useState } from "react";

const carouselItems = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselLength = carouselItems.length - 1;

  const handleNext = () => {
    currentIndex < carouselLength ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
  };

  const handlePrev = () => {
    currentIndex === 0 ? setCurrentIndex(carouselLength) : setCurrentIndex(currentIndex - 1);
  };

  //? Carousel aouto play
  function nextSlideWithDelay(delayInMilliseconds: number) {
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % 3);
    }, delayInMilliseconds);
  }
  nextSlideWithDelay(4000);

  return (
    <section className="relative w-screen h-[350px] bg-lime-200 flex justify-center">
      <div className="overflow-hidden h-fit z-[0]">
        <div
          className={
            "flex w-fit h-[400px] transition-transform " + `translate-x-[-${currentIndex * 100}%]`
          }>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`w-full h-full shrink-0 grow-0 basis-full bg-lime-950 transition-transform duration-300 transform`}>
              <img src={item} alt={`Item ${index}`} className="w-auto h-auto" />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute w-12 font-sans text-4xl font-bold transform -translate-y-1/2 bg-white rounded h-28 text-lime-500 hover:bg-lime-500 hover:text-white left-5 top-1/3">
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute w-12 font-sans text-4xl font-bold transform -translate-y-1/2 bg-white rounded h-28 text-lime-500 hover:bg-lime-500 hover:text-white right-5 top-1/3">
        &gt;
      </button>
      <div className="absolute w-full h-24 bg-gradient-to-t from-gray-200 to-lime-200 -bottom-24 z-[-10] "></div>
      <div className="absolute w-full h-24 bg-gradient-to-t from-gray-200 to-transparent -bottom-24 "></div>
    </section>
  );
};

export default HomeCarousel;
