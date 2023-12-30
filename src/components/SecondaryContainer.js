import React from 'react'
import { useSelector } from 'react-redux'
import NewMovies from './NewMovies'

function SecondaryContainer() {
 
  return (
    <div className='text-white  bg-slate-950 relative z-10'>
     <NewMovies />
    </div>
  )
}

export default SecondaryContainer
