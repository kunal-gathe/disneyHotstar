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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      OPTIONS
    );
    let json = await data.json();
    let video = json.results.filter((val) => {
      return val.type === "Trailer";
    });

    dispatch(addMovieVideo(video[0]?.key));
  };

  useEffect(() => {
    getBackgroundVideo(id);
  }, []);
  return (
    <>
      <div className=" text-white md:pl-48 p-2 md:pt-20 flex flex-col items-center">
        <img
          className="md:w-2/3 md:h-80 w-full h-40 rounded-lg  mr-16 ml-16"
          src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
          alt="poster"
        />
        <div className="md:pt-16">
          <h1 className="md:text-3xl  text-xl md:font-bold font-semibold pt-4 md:py-4 ">{details.title}</h1>
          <div className="flex">
            <p className="pr-4">Release: {details?.release_date}</p>
            <p className="pr-4">
              Lang: {details?.original_language.toUpperCase()}
            </p>
            <p className="pr-4">Rating: {details?.vote_average}</p>
          </div>
          <p className="md:w-2/3 py-4 opacity-55">{details?.overview.slice(0,200)}...</p>
          {movieTrailer && <button
            className="bg-gray-800 px-4 py-2 font-bold rounded-lg mb-12"
            onClick={() => setDisplayVideo(true)}
          >
            Watch trailer
          </button>}
        </div>
      </div>
      {displayVideo && (
        <span
          className="absolute font-bold cursor-pointer text-xl text-white md:right-36 z-10 md:top-12 top-48 right-8"
          onClick={() => setDisplayVideo(false)}
        >
          X
        </span>
      )}
      <div className=" flex items-center justify-center absolute md:top-10 top-48 md:left-20 left-4 md:w-[100%]">
        {displayVideo && (
          <iframe
            width="1100"
            height="600"
            // className=" w-80 h-44 md:w-0"
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
