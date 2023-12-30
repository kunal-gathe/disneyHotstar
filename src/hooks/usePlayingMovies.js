import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/slice/movieSlice"
import { useEffect } from "react"
import { OPTIONS } from "../utils/constatnt"

function usePlayingMovies(){
    let dispatch = useDispatch()

    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1?api_key=ae103127c784918f2533100e1007da9d', OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}


export default usePlayingMovies