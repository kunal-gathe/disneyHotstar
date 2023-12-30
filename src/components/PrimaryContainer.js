import React from 'react'
import VideoBackground from './VideoBackground'
import Info from './Info'
import { useSelector } from 'react-redux'
import usePlayingMovies from '../hooks/usePlayingMovies'

function PrimaryContainer() {
    usePlayingMovies()
    let videoInfo = useSelector(store => store.movie.nowPlayingMovies)
    if(!videoInfo) return null
    let mainVideo = videoInfo[0];
    const {title, overview , id} = mainVideo
  return (
    <div className='text-white '>
        <Info title={title} description={overview} />
      <VideoBackground id={id} />
    </div>
  )
}

export default PrimaryContainer