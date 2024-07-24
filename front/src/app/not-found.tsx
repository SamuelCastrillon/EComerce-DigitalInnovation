import Image404 from "@/assets/img/404NotFound.jpg";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <section className="relative flex flex-col gap-5 mt-20">
      <div className="">
        <img src={Image404.src} alt="404 Notfund Image" className="h-auto w-max  rounded-[50%]" />
      </div>
      <button className="px-5 py-2 rounded bg-lime-950">
        <Link href="/home" className="font-bold">
          Return Home
        </Link>
      </button>
    </section>
  );
};

export default NotFound;
