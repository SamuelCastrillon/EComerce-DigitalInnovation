"use client";
import React, { useEffect, useState } from "react";
import Baner0 from "@/assets/img/Baner0.jpg";
import Baner1 from "@/assets/img/Baner1.jpg";
import Baner2 from "@/assets/img/Baner2.jpg";

const carouselItems = [
  { image: Baner0.src, bg: "bg-gradient-to-t from-gray-700 to-gray-800" },
  { image: Baner1.src, bg: "bg-lime-300" },
  { image: Baner2.src, bg: "bg-gradient-to-t from-gray-800 to-gray-600" },
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

  useEffect(() => {
    //? Carousel aouto play
    const intervalId = setInterval(() => {
      handleNext();
      console.log("Ejecutando cada 3000 ms");
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [handleNext]);

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
