import React from 'react'
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import useTvEpisode from '../hooks/useTvEpisode';
import { Link } from 'react-router-dom';
import { addMovieDetail } from '../utils/slice/movieSlice';

function TvEpisode() {
  let dispatch = useDispatch()
    useTvEpisode()
    let tvEpisode = useSelector((store) => store.movie.tvEpisode);

  
    if (!tvEpisode) return null;
  
    return (
      <div className="  bg-slate-950 z-10 -mt-6">
        <h1 className="text-xl py-8 mt-3 flex items-center align-middle font-bold">
         Tv Episode
        </h1>
        <div className="flex overflow-x-scroll  no-scrollbar">
          {tvEpisode.map((e, index) => {
            return (
              <div className=" flex" onClick={()=>{dispatch(addMovieDetail(e))}}>
                 <Link to='movies'> <MovieCard key={e.id} poster={e.poster_path } /></Link>
              </div>
            );
          })}
        </div>
      </div>
    );

}

export default TvEpisode