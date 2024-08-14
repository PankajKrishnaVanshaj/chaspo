import Image from "next/image";
import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Link from "next/link";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div
        className="p-6 rounded-xl border border-gray-300 bg-gradient-to-br 
        from-white to-gray-100 shadow-lg  hover:shadow-2xl hover:shadow-red-500 transition-shadow duration-300 ease-in-out 
        flex flex-col gap-5 cursor-pointer h-full transform hover:-translate-y-1.5"
      >
        <div className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <Image
            src={item.icon}
            alt={item.name}
            width={64}
            height={64}
            // className="rounded-full"
          />
        </div>
        <h2 className="font-bold text-xl text-purple-900 transition-colors duration-300 ease-in-out hover:text-gray-900">
          {item.name}
        </h2>
        <p className="text-gray-700 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
