import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/slice/movieSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utils/constatnt"

function usePlayingMovies(){
    let dispatch = useDispatch()
    
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ae103127c784918f2533100e1007da9d&THE_KEY&with_origin_country=IN', OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}


export default usePlayingMovies