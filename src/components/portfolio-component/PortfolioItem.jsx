import Image from "next/image";
import Link from "next/link";

const PortfolioItem = ({ item }) => {
  return (
    <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
      <div className="flex flex-col gap-8 text-white">
        <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
          {item.title}
        </h1>
        <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
          <Image src={item.img} alt={item.title} fill />
        </div>
        <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
          {item.desc}
        </p>
        <Link href={item.link} className="flex justify-end">
          <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
            See Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
