import { useEffect } from "react";
import { OPTIONS } from "../utils/constatnt";
import { useDispatch } from "react-redux";
import { addArrivingToday } from "../utils/slice/tvSlice";

function useTv() {
  let dispatch = useDispatch();

  async function getTvData() {
    let data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', OPTIONS)

    let json = await data.json();
    dispatch(addArrivingToday(json.results));
  }

  useEffect(() => {
    getTvData();
  }, []);
}

export default useTv;
