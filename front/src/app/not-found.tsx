import Image404 from "@/assets/img/404NotFound.jpg";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center gap-5 mt-10">
      <div className="">
        <img
          src={Image404.src}
          alt="404 Notfund Image"
          className="h-auto w-[400px]  rounded-[50%]"
        />
      </div>
      <button className="px-5 py-2 text-gray-300 rounded h-fit w-fit bg-lime-950 hover:bg-lime-900">
        <Link href="/home" className="font-bold">
          Return Home
        </Link>
      </button>
    </section>
  );
};

export default NotFound;
