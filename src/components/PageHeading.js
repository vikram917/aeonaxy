import Image from 'next/image'
import React from 'react'

const PageHeading = ({ title, desc, star, style }) => {
  return (
    <div className=' space-y-2 md:space-y-4 lg:space-y-6'>
        <h1 className="text-lg font-semibold md:font-bold md:text-3xl lg:text-4xl lg:font-bold">
        {title}
        </h1>
        <div
          className={`flex w-5 space-x-2 ${
            star && star.trim() !== "" ? "" : "hidden"
          }`}
        >  
          <Image src={star} alt="" width={50} height={50} />
          <Image src={star} alt="" width={50} height={50} />
          <Image src={star} alt="" width={50} height={50} />
          <Image src={star} alt="" width={50} height={50} />
          <Image src={star} alt="" width={50} height={50} />
        </div>
        <p className={`text-gray-600 text-xs md:text-base lg:text-xl ${style ?"italic":""}`}>
          {desc}
        </p>
    </div>
  )
}

export default PageHeading