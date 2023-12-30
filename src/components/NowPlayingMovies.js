import React from "react";
import usePlayingMovies from "../hooks/usePlayingMovies";

function NowPlayingMovies() {
  usePlayingMovies();
  return <div></div>;
}

export default NowPlayingMovies;
