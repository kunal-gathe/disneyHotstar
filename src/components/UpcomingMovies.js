import React from 'react'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { addMovieDetail } from '../utils/slice/movieSlice';

function UpcomingMovies() {
  let dispatch = useDispatch()
    useUpcomingMovies();
    let upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  
    if (!upcomingMovies) return null;
  
    return (
      <div className="  bg-slate-950 z-10 -mt-6">
        <h1 className="md:text-xl md:py-8 py-5 mt-3 flex items-center align-middle font-bold">
          Upcoming Movies
        </h1>
        <div className="flex overflow-x-scroll  no-scrollbar">
          {upcomingMovies.map((e, index) => {
            return (
              <div className=" flex mr-4" key={e.poster_path} onClick={()=>{dispatch(addMovieDetail(e))}}>
                <Link to='movies'> <MovieCard key={e.id} poster={e.poster_path } /></Link>
              </div>
            );
          })}
        </div>
      </div>
    );}

export default UpcomingMovies
