import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../utils/slice/movieSlice"
import { OPTIONS } from "../utils/constatnt"

function useUpcomingMovies(){
    let dispatch = useDispatch()

    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', OPTIONS)
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[])
}


export default useUpcomingMovies