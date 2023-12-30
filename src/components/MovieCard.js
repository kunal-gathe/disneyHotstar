import React from 'react'

function MovieCard({poster}) {
  return (
    <div className=' w-80 '>
      <img src={`https://image.tmdb.org/t/p/original${poster}`} className='w-[70%] h-52' alt='poster' />
    </div>
  )
}

export default MovieCard
