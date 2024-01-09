import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slice/movieSlice";
import tvSlice from "./slice/tvSlice";
import userSlice from "./slice/userSlice";

const store = configureStore({
    reducer:{
        movie: movieSlice,
        tv: tvSlice,
        user: userSlice
    }
})

export default store;