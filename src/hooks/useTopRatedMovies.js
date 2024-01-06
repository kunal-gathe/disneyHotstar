import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/slice/movieSlice"
import { OPTIONS } from "../utils/constatnt"

function useTopRatedMovies(){
    let dispatch = useDispatch()

    const getTopRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', OPTIONS)

        const json = await data.json()
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        getTopRatedMovies()
    },[])
}


export default useTopRatedMovies