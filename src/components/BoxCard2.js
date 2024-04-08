import React from "react";
import Image from "next/image";
import PageHeading from "./PageHeading";

const BoxCard2 = ({ img, title, desc, author, star, style }) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex justify-center items-center w-full p-10">
        <Image src={img} alt="Picture of the author" width={900} height={900} />
      </div>
      <div className="flex flex-col justify-center item-center w-full space-y-4 md:space-y-6">
        <PageHeading title={title} desc={desc} star={star} style={style}/>
        <h1 className="text-sm font-semibold md:text-xl">{author}</h1>
      </div>
    </div>
  );
};

export default BoxCard2;
