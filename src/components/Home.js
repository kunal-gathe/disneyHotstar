import React from "react";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import usePlayingMovies from "../hooks/usePlayingMovies";
import useTv from "../hooks/useTv";

function Home() {
  
  usePlayingMovies();
  useTv();
  let videoInfo = useSelector((store) => store.movie.nowPlayingMovies);
  if (!videoInfo) return null;
  let mainVideo = videoInfo[0];
  const { title, overview, id } = mainVideo;

  return (
    <div>
      <PrimaryContainer title={title} id={id} overview={overview}/>
      <SecondaryContainer />
    </div>
  );
}

export default Home;
