import Image from "next/image";
import React from "react";

const BoxCard3 = ({ title, level, expressions, img, desc }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-center border border-gray-300 rounded-lg w-40 h-40 lg:w-60 lg:h-60">
        <div className="h-1/2 flex justify-center items-center">
          <h1>{expressions}</h1>
        </div>
        <div className="lg:text-xl h-1/4 flex justify-center items-center">
          <h1>{title}</h1>
        </div>
        <div className="lg:text-xl">
          <h1>{desc}</h1>
        </div>
        <div className={`${img && img !== "" ? "":"hidden"}`}>
            <Image
            src={img}
            width={40}
            height={40}
            alt="image"
          />
        </div>
        <div className="lg:text-xl h-1/4 flex justify-center items-center">
          <h1 className="text-slate-500">{level}</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxCard3;
