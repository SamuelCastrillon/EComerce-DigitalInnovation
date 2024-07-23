import Link from "next/link";
import React from "react";
import Image404 from "@/assets/img/404NotFound.jpg";

const NotFoundView: React.FC = () => {
  return (
    <section className="relative flex flex-col mt-20">
      <div className="">
        <img src={Image404.src} alt="404 Notfund Image" className="h-auto w-80 rounded-[50%]" />
      </div>
      <button className="absolute top-10 left-1/2 bg-lime-400">
        <Link href="/home" className="font-bold">
          Return Home
        </Link>
      </button>
    </section>
  );
};

export default NotFoundView;
