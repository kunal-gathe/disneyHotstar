import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { addMovieDetail } from "../utils/slice/movieSlice";

function NewMovies() {
  let dispatch = useDispatch()
  let newMovies = useSelector((store) => store.movie.nowPlayingMovies);
  if(!newMovies) return null;
  return (
    <div className="  bg-slate-950 z-10 md:-mt-6 ">
      <h1 className="md:text-xl md:py-8 py-4 t flex items-center align-middle font-bold"><span className="text-blue-400 md:mr-2 mr-1">Free </span>  Newly Added</h1>
      <div className="flex overflow-x-scroll  no-scrollbar" >
      {newMovies.map((e) => {
        return <div className=" flex mr-4" key={e.poster_path } onClick={()=>{dispatch(addMovieDetail(e))}} >
           <Link to='movies'> <MovieCard key={e.id} poster={e.poster_path } /></Link>
        </div>
      })}
      </div>
    </div>
  );
}

export default NewMovies;
