import Image from "next/image";
import React from "react";
import Tag from "@/components/Tag";

const Boxcard4 = ({ title, desc, img, suggest }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-60 space-x-4 space-y-4 border border-slate-200 rounded-md p-4 md:flex-row md:w-80 lg:w-full">
      <Tag suggest={suggest} />
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div className="md:w-60 lg:w-80">
          <h1 className="text-sm md:text-base lg:text-xl font-semibold">
            {title} <span className="text-gray-600 font-light">{desc}</span>
          </h1>
          {/* <h1>{suggest}</h1> */}
        </div>
        <div>
          <Image src={img} width={100} height={100} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Boxcard4;
