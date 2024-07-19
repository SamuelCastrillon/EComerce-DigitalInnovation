import Link from "next/link";
import React from "react";

const NotFoundView = () => {
  return (
    <section className="w-full h-80">
      <div className="bg-neutral-700">Hola</div>
      <Link href="/home" className="font-bold text-lime-400">
        Return Home
      </Link>
    </section>
  );
};

export default NotFoundView;
