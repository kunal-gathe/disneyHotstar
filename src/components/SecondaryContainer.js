import React from 'react'
import NewMovies from './NewMovies'
import TopRatedMovies from './TopRatedMovies'
import UpcomingMovies from './UpcomingMovies'
import TvEpisode from './TvEpisode'

function SecondaryContainer() {
 
  return (
    <div className='text-white md:-mt-36 -mt-[22rem] bg-slate-950 relative z-10 md:pl-32 pl-2'>
     <NewMovies />
     <TvEpisode />
     <TopRatedMovies />
     <UpcomingMovies />
    </div>
  )
}

export default SecondaryContainer
