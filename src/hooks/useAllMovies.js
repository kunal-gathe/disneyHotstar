import { useEffect } from 'react';
import {OPTIONS} from '../utils/constatnt'
import { useDispatch } from 'react-redux';
import { addAllMovies, addSearchVideos } from '../utils/slice/movieSlice';

function useAllMovies(){
    let dispatch = useDispatch()
   async function getAllMovies(){
        let data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', OPTIONS)

        let json = await data.json();
        dispatch(addAllMovies(json.results))
        dispatch(addSearchVideos(json.results))
    }

    useEffect(()=>{
        getAllMovies()
    },[])

}

export default useAllMovies;