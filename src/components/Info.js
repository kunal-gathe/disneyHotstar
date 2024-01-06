import React from 'react'

function Info({title, description}) {
  return (
    <div className='absolute top-[45%] ml-36  w-[30%]  z-0 text-white '>
      <h1 className='text-3xl font-medium'>{title}</h1>
      <p className='text-lg opacity-70 my-2'>{description.slice(0,150)}</p>
      <button className='w-full p-4 flex justify-center bg-slate-100/40 font-bold text-xl rounded-lg '>Watch for Free</button>
    </div>
  )
}

export default Info
