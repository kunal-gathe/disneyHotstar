import React, { useEffect } from "react";
import { OPTIONS } from "../utils/constatnt";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/slice/movieSlice";

function VideoBackground({ id }) {
  let dispatch = useDispatch();
  let trailer = useSelector((store) => store.movie.trailer);
  
  const getBackgroundVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      OPTIONS
    );
    let json = await data.json();
    let video = json.results.filter((val) => {
      return val.type === "Trailer";
    });

    dispatch(addTrailer(video[0].key));
  };

  useEffect(() => {
    getBackgroundVideo(id);
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <iframe
        width="1800"
        height="900"
        className="w-screen aspect-video -mt-40"
        src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1&controls=0&&showinfo=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
