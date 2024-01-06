import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS } from "../utils/constatnt";
import { addMovieVideo } from "../utils/slice/movieSlice";

function MoviesDtails() {
  const [displayVideo, setDisplayVideo] = useState(false);
  let details = useSelector((store) => store.movie.movieDetail);
  let id = details.id;

  let dispatch = useDispatch();
  let movieTrailer = useSelector((store) => store.movie.movieVideo);

  const getBackgroundVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      OPTIONS
    );
    let json = await data.json();
    let video = json.results.filter((val) => {
      return val.type === "Trailer";
    });

    dispatch(addMovieVideo(video[0].key));
  };

  useEffect(() => {
    getBackgroundVideo(id);
  }, []);
  return (
    <>
      <div className=" text-white pl-48 pt-20 flex">
        <img
          className="w-72 rounded-lg h-96 mr-16"
          src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
          alt="poster"
        />
        <div className="pt-16">
          <h1 className="text-3xl font-bold py-4">{details.title}</h1>
          <div className="flex">
            <p className="pr-4">Release: {details.release_date}</p>
            <p className="pr-4">
              Language: {details.original_language.toUpperCase()}
            </p>
            <p className="pr-4">Rating: {details.vote_average}</p>
          </div>
          <p className="w-2/3 py-4 opacity-55">{details.overview}</p>
          <button
            className="bg-gray-800 px-4 py-2 font-bold rounded-lg"
            onClick={() => setDisplayVideo(true)}
          >
            Watch trailer
          </button>
        </div>
      </div>
      {displayVideo && (
        <span
          className="absolute font-bold cursor-pointer text-xl text-white right-60 z-10 top-12"
          onClick={() => setDisplayVideo(false)}
        >
          X
        </span>
      )}
      <div className="flex items-center justify-center absolute top-10 left-32 w-[100%]">
        {displayVideo && (
          <iframe
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </>
  );
}

export default MoviesDtails;
