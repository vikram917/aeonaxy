import React from 'react'

const Tag = ({suggest}) => {
  return (
    <div className={`absolute -top-4 h-6 flex justify-center items-center bg-yellow-400 p-2 rounded-full font-bold ${suggest && suggest.trim() !== "" ? "" : "hidden"}`}>
  <h1 className='text-xs'>MOST POPULAR</h1>
</div>

  )
}

export default Tag