import Link from 'next/link'
import React from 'react'

const PrimaryBtn = ({btnName,path}) => {
  return (
    <div className="text-sm p-2 bg-black text-white text-center md:text-xl lg:text-2xl rounded-md lg:w-60">
    <Link href={path}><button>{btnName}</button></Link>
   </div>
  )
}

export default PrimaryBtn