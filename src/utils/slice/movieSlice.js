import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        tvEpisode: null,
        movieDetail: null,
        movieVideo: null,
        allMovies: null,
        trailer: null,
        defaultMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload
        },
        addTvEpisode: (state, action)=>{
            state.tvEpisode = action.payload
        },
        addTrailer: (state, action)=>{
            state.trailer = action.payload
        },
        addMovieDetail: (state, action)=>{
            state.movieDetail = action.payload
        },
        addMovieVideo: (state, action)=>{
            state.movieVideo = action.payload
        },
        addAllMovies: (state, action)=>{
            state.allMovies = action.payload
        },
        addSearchVideos: (state, action)=>{
            state.defaultMovies = action.payload
        }
        },
})

export const {addNowPlayingMovies,addUpcomingMovies,addAllMovies,addSearchVideos, addMovieDetail,addMovieVideo, addTrailer,addTvEpisode, addTopRatedMovies} = movieSlice.actions
export default movieSlice.reducer