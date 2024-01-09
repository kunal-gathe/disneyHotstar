import React from 'react'
import useTv from '../hooks/useTv'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addMovieDetail } from '../utils/slice/movieSlice'
import MovieCard from './MovieCard'
import { addTvShowDetails } from '../utils/slice/tvSlice'

function Tv() {
useTv()
let dispatch = useDispatch()

let tvData = useSelector(store => store.tv.arrivingToday)
  return (
    <div className='text-white md:pl-44 md:py-4 ml-2'>
      <div className="  bg-slate-950 z-10 -mt-6">
      <h1 className="text-xl md:py-8 py-4 flex mt-3 items-center align-middle font-bold">
        Top Rated <span className="text-blue-400 ml-2">Series </span> 
      </h1>
      <div className="flex flex-wrap">
        {tvData.map((e, index) => {
          return (
            <div className="py-3 mr-4" key={e.poster_path}>
              <div className="" key={e.poster_path} onClick={()=>{ dispatch(addTvShowDetails(e))}}>
              <Link to='/serial'><MovieCard key={e.id} poster={e.poster_path } /></Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default Tv
