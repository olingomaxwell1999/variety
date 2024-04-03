import Link from "next/link";
import React from "react";

interface DealscardProps {
  title: string;
  image: string;
  description: string;
  link: string;
  btn: string;
}

const Dealscard: React.FC<DealscardProps> = ({
  title,
  image,
  description,
  link,
  btn,
}) => {
  return (
    <div className="relative w-full h-96">
      <img src={image} alt={title} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-white">
        <div>
          <p className="text-lg font-bold">{title}</p>
          <h2 className="text-3xl font-bold">{description}</h2>
        </div>
        <Link href={link}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {btn}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dealscard;
