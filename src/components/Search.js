import React, { useEffect, useState } from "react";
import useAllMovies from "../hooks/useAllMovies";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetail, addSearchVideos } from "../utils/slice/movieSlice";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { OPTIONS } from "../utils/constatnt";
import { addTvShowDetails } from "../utils/slice/tvSlice";

function Search() {
  useAllMovies();
  let dispatch = useDispatch();
  let getAllMovies = useSelector((state) => state.movie.allMovies);
  let defaultMovie = useSelector((state) => state.movie.defaultMovies);
  const [allMovies, setAllMovies] = useState(getAllMovies);
  const [searchText, setSearchText] = useState("");

  async function getSearchResult() {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
      OPTIONS
    );
    const json = await data.json();
    setAllMovies(json.results);
  }

  useEffect(() => {
    getSearchResult();
  }, [searchText]);
  return (
    <>
      <div className="text-white md:pl-44 pl-4 md:pt-10 pt-3">
        <input
          className="bg-gray-800 w-[95%] outline-none rounded-lg text-lg p-4 mr-4"
          type="text"
          value={searchText}
          placeholder="Movie Show & More.."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>


      <h1 className="text-xl py-2 text-white mt-3 md:pl-44 pl-4 flex items-center align-middle font-bold">
         All Time <span className="text-blue-400 px-2 mr-2"> Favorite </span>
        </h1>
      {searchText === "" ? (
        <div className="flex flex-wrap md:ml-44 md:mt-4 ml-4 ">
          {defaultMovie?.map((e, index) => {
            if(!e.poster_path) return null
            return (
              <div className="" key={e.poster_path}>
                <div key={e.poster_path}
                  className="my-4 md:mr-3"
                  onClick={() => {
                    dispatch(addTvShowDetails(e));
                  }}
                >
                  <Link to="/serial">
                    <MovieCard key={e.id} poster={e.poster_path} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap md:ml-44 md:mt-12 ml-4 ">
          {allMovies?.map((e, index) => {
            if(!e.poster_path) return null
            return (
              <div className="">
                <div
                  className="my-4 mr-4"
                  onClick={() => {
                    dispatch(addMovieDetail(e));
                  }}
                >
                  <Link to="/movies">
                    <MovieCard key={e.id} poster={e.poster_path} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Search;
