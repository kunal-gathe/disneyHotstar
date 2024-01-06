import React from "react";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { addMovieDetail } from "../utils/slice/movieSlice";
import { Link } from "react-router-dom";

function TopRatedMovies() {
  let dispatch = useDispatch()
  useTopRatedMovies();
  let topMovies = useSelector((store) => store.movie.topRatedMovies);

  if (!topMovies) return null;

  return (
    <div className="  bg-slate-950 z-10 -mt-6">
      <h1 className="text-xl py-8 flex mt-3 items-center align-middle font-bold">
        Top Rated Added
      </h1>
      <div className="flex overflow-x-scroll   no-scrollbar">
        {topMovies.map((e, index) => {
            if(index < 5) return null
          return (
            <div className="">
              <button className="bg-blue-500 relative z-20  w-12 py-1 px-2 font-semibold text-sm overflow-x-scroll no-scrollbar m-2 rounded-lg h-8">Free</button>
              <div className="-mt-11" onClick={()=>{ dispatch(addMovieDetail(e))}}>
              <Link to='movies'> <MovieCard key={e.id} poster={e.poster_path } /></Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopRatedMovies;
