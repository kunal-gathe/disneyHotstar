import React, { useEffect, useState } from "react";
import Search from "./Search";
import { OPTIONS } from "../utils/constatnt";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { addTvShowDetails } from "../utils/slice/tvSlice";
import { useDispatch } from "react-redux";
import { addMovieDetail } from "../utils/slice/movieSlice";

function Category() {
  const movieCategories = [
    "Action",
    "Comedy",
    "Drama",
    "Romance",
    "Science",
    "Horror",
    "Thriller",
    "Adventure",
    "Fantasy",
    "Animation",
    "Documentary",
    "Mystery",
    "Crime",
    "Family",
    "Musical",
    "War",
    "Historical",
    "Biographical",
    "Sports",
    "Western",
  ];

  let dispatch = useDispatch();

  const [searchText, setSearchText] = useState("Action");
  const [allMovies, setAllMovies] = useState();

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
      <div className=" md:pl-40 pl-2 md:pt-8 pt-2 flex">
        <div>
          {movieCategories.map((e, index) => {
            return (
              <div onClick={(e) =>  setSearchText(movieCategories[index])}>
                <button className="text-white my-3 md:p-2 rounded-lg md:font-bold font-semibold text-xs md:text-lg bg-slate-900 md:hover:text-xl md:hover:border">
                  {e}
                </button>
              </div>
            );
          })}
        </div>
        {allMovies && (
          <div className=" flex flex-wrap md:ml-12">
            {allMovies.map((e, index) => {
              if (!e?.poster_path) return null;
              return (
                <div className="py-3 mr-8 px-16">
                  <div
                    className="w-40"
                    onClick={() => {
                      dispatch(addMovieDetail(e));
                    }}
                  >
                    <Link to="/movies">
                      <MovieCard key={e?.id} poster={e?.poster_path} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Category;
