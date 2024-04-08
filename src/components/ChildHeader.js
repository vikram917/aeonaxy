import Link from 'next/link'
import React from 'react'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChildHeader = ({ path }) => {
  return (
    <div className="flex justify-center items-center w-full">
        <Link href={path}>
          <div className="w-4">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        </Link>
        <div className="flex justify-start items-center bg-gray-200 h-1 rounded-2xl w-10/12">
          <div className={`h-full rounded-2xl bg-green-600 w-10 md:w-20 lg:w-40 `}></div>
        </div>
      </div>
  )
}

export default ChildHeader