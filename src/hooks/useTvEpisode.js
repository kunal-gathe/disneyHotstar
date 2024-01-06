import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTvEpisode } from "../utils/slice/movieSlice"
import { OPTIONS } from "../utils/constatnt"

function useTvEpisode(){
    let dispatch = useDispatch()

    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', OPTIONS)
        const json = await data.json()
        dispatch(addTvEpisode(json.results))
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[])
}


export default useTvEpisode