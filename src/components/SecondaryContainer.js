import React from 'react'
import NewMovies from './NewMovies'
import TopRatedMovies from './TopRatedMovies'
import UpcomingMovies from './UpcomingMovies'
import TvEpisode from './TvEpisode'

function SecondaryContainer() {
 
  return (
    <div className='text-white -mt-36 bg-slate-950 relative z-10 pl-32'>
     <NewMovies />
     <TvEpisode />
     <TopRatedMovies />
     <UpcomingMovies />
    </div>
  )
}

export default SecondaryContainer
