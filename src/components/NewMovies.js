import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

function NewMovies() {
  let newMovies = useSelector((store) => store.movie.nowPlayingMovies);
  if(!newMovies) return null;
  return (
    <div className="  bg-slate-950 z-10 -mt-6">
      <h1 className="text-xl py-8 flex items-center align-middle font-bold"><span className="text-blue-400 mr-2">Free </span>  Newly Added</h1>
      <div className="flex overflow-x-scroll  no-scrollbar">
      {newMovies.map((e) => {
        return <div className=" flex">
            <MovieCard key={e.id} poster={e.poster_path }/>
        </div>
      })}
      </div>
    </div>
  );
}

export default NewMovies;
