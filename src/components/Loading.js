import Image from "next/image";
import React from "react";

const Loading = ({ img, desc }) => {
  return (
    <div className="flex justify-center items-center flex-col p-5 h-screen space-y-4 md:space-y-6 lg:space-y-8">
      <div className="w-10 md:w-20 lg:w-40">
        <Image src={img} width={100} height={100} alt="Loading" />
      </div>
      <div className="text-center text-sm md:text-xl lg:text-2xl font-bold w-10/12">
        <h1>{desc}</h1>
      </div>
    </div>
  );
};

export default Loading;
