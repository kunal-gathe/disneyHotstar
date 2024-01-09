import React from 'react'
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import useTvEpisode from '../hooks/useTvEpisode';
import { Link } from 'react-router-dom';
import { addMovieDetail } from '../utils/slice/movieSlice';
import { addTvShowDetails } from '../utils/slice/tvSlice';

function TvEpisode() {
  let dispatch = useDispatch()
    useTvEpisode()
    let tvEpisode = useSelector((store) => store.movie.tvEpisode);

  
    if (!tvEpisode) return null;
  
    return (
      <div className="  bg-slate-950 z-10 -mt-6">
        <h1 className="md:text-xl md:py-8 py-5 mt-3 flex items-center align-middle font-bold ">
         Tv Episode
        </h1>
        <div className="flex overflow-x-scroll  no-scrollbar">
          {tvEpisode.map((e, index) => {
            return (
              <div className=" flex mr-4" key={e.poster_path} onClick={()=>{ dispatch(addTvShowDetails(e))}}>
                 <Link to='/serial'> <MovieCard key={e.id} poster={e.poster_path } /></Link>
              </div>
            );
          })}
        </div>
      </div>
    );

}

export default TvEpisode