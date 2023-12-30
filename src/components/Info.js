import React from 'react'
import watch from '../images/icons/play.png'

function Info({title, description}) {
  return (
    <div className='absolute top-[37%] ml-16  w-[35%]  z-10'>
      <h1 className='text-3xl font-medium'>{title}</h1>
      <p className='text-lg opacity-70 my-2'>{description.slice(0,150)}</p>
      <button className='w-full p-4 flex justify-center bg-slate-100/40 font-bold text-xl rounded-lg '>Watch for Free</button>
    </div>
  )
}

export default Info
