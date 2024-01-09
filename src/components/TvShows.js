import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OPTIONS } from '../utils/constatnt';
import { addTvTrailer } from '../utils/slice/tvSlice';

function TvShows() {
  let tvShowData = useSelector(store => store.tv.tvShowDetails)
  let video = useSelector(store => store.tv.tvTrailer)
  const [displayVideo, setDisplayVideo] = useState(false);
  let dispatch = useDispatch()

  const {poster_path, name, overview,first_air_date, id,original_language,vote_average  } = tvShowData

  let getTvVideo = async ()=>{
    let data = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`, OPTIONS)
    let json = await data.json();
    let tvTrailer = json.results.filter(e =>{
      return e.type === "Trailer"
    })
    dispatch(addTvTrailer(tvTrailer));
  }
  useEffect(()=>{
    getTvVideo()
  },[])
  return (
    <div>
      <div className=" text-white md:pl-48 md:pt-20  p-2  flex flex-col">
        <img
          className="md:w-72 rounded-lg md:h-96 h-48 mr-16 w-full"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
        />
        <div className="md:pt-16 pt-4">
          <h1 className="text-3xl font-bold md:py-4">{name}</h1>
          <div className="flex">
            <p className="pr-4">Release: {first_air_date}</p>
            <p className="pr-4">
              Lang: {original_language.toUpperCase()}
            </p>
            <p className="pr-4">Rating: {vote_average}</p>
          </div>
          <p className="md:w-2/3 py-4 opacity-55">{overview.slice(0,200)}</p>
          {video && <button
            className="bg-gray-800 px-4 py-2 font-bold rounded-lg mb-4"
            onClick={() => setDisplayVideo(true)}
          >
            Watch trailer
          </button>}
        </div>
      </div>
      {displayVideo && (
        <span
          className="absolute font-bold cursor-pointer text-xl text-white md:right-40 right-5 z-10 md:top-12 top-44"
          onClick={() => setDisplayVideo(false)}
        >
          X
        </span>
      )}
      <div className="flex items-center justify-center absolute md:top-10 top-44 md:left-20 w-[100%] ">
        {displayVideo && (
          <iframe
            width="1100"
            height="600"
            src={`https://www.youtube.com/embed/${video[0]?.key}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  )
}

export default TvShows
