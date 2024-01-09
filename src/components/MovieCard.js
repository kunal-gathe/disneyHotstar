import React from 'react'

function MovieCard({poster}) {
  return (
    <div className=' md:w-60 w-40 '>
      <img  src={`https://image.tmdb.org/t/p/original${poster}`} className='w-full md:pr-6 h-40 cursor-pointer' alt='poster' />
    </div>
  )
}

export default MovieCard
