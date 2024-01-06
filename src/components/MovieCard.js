import React from 'react'

function MovieCard({poster}) {
  return (
    <div className=' w-60 '>
      <img  src={`https://image.tmdb.org/t/p/original${poster}`} className='w-full pr-6 h-52 cursor-pointer' alt='poster' />
    </div>
  )
}

export default MovieCard
