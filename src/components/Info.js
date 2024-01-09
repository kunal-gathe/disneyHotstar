import React from 'react'

function Info({title, description}) {
  return (
    <div className='absolute top-[15%] md:top-[45%] md:ml-36 ml-4 w-[30%]  z-0 text-white '>
      <h1 className='text-3xl font-medium mb-2'>{title}</h1>
      <p className='text-lg opacity-70 my-2 hidden md:block'>{description.slice(0,150)}</p>
      <button className='md:w-full md:p-4 flex justify-center md:bg-slate-100/40 font-bold md:text-xl rounded-lg text-xs w-24 p-1 bg-slate-800 '>Watch for Free</button>
    </div>
  )
}

export default Info
