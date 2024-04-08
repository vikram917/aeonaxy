import Image from "next/image";
import React from "react";

const BoxCard = ({ img, title, desc }) => {
  return (
    <div className="flex  border border-slate space-x-4 rounded-lg items-center p-2 lg:h-28 lg:p-4">
      <div>
        <Image src={img} alt="Picture of the author" width={60} height={60} />
      </div>
      <div>
        <p className="text-[14px] md:text-base lg:text-xl">
          {title} <span className="text-slate-400">{desc}</span>
        </p>
      </div>
    </div>
  );
};

export default BoxCard;
