"use client";
import React, { useEffect, useState } from "react";

const carouselItems = [
  { image: "https://via.placeholder.com/300", bg: "bg-yellow-300" },
  { image: "https://via.placeholder.com/300", bg: "bg-violet-300" },
  { image: "https://via.placeholder.com/300", bg: "bg-orange-300" },
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [translateCarousel, setTranslateCarousel] = useState<string>("");
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
      currentIndex < carouselLength ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0);
    }, delayInMilliseconds);
  }
  nextSlideWithDelay(4000);

  useEffect(() => {
    setTranslateCarousel("translate-x-[-100%]");
    setTranslateCarousel("translate-x-[-200%]");
  }, []);

  useEffect(() => {
    const valueToString = String(currentIndex * 100);
    setTranslateCarousel(`translate-x-[-${valueToString}%]`);
  }, [currentIndex, carouselLength]);

  return (
    <section className="relative w-screen h-[350px] bg-lime-200 flex justify-center">
      <div className="overflow-hidden h-fit w-[900px]">
        <div
          className={`flex h-[400px] w-fit transition-transform duration-300 ${translateCarousel}`}>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`w-full h-full shrink-0 basis-[100%] ${item.bg} transition-transform transform flex items-center justify-center`}>
              <img src={item.image} alt={`Item ${index}`} className="w-auto h-auto" />
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
