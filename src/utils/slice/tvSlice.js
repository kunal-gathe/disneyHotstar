import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tv",
  initialState: {
    arrivingToday:null,
    tvShowDetails:null,
    tvTrailer:null,
  },
  reducers: {
    addArrivingToday: (state, action) => {
      state.arrivingToday = action.payload;
    },
    addTvShowDetails: (state, action) => {
      state.tvShowDetails = action.payload;
    },
    addTvTrailer: (state, action) => {
      state.tvTrailer = action.payload;
    },
  },
});

export const {addArrivingToday, addTvShowDetails, addTvTrailer} = tvSlice.actions;
export default tvSlice.reducer;
