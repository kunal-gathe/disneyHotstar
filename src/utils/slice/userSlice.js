import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name:"user",
    initialState: {
        userData: null,
        isLogin: false,
    },
    reducers:{
        addUserDetail: (state, action)=>{
            state.userData = action.payload;
        },
        addIsLogin: (state, action)=>{
            state.isLogin = action.payload;
        }
    }
}) 
export const {addUserDetail, addIsLogin} = userSlice.actions;
export default userSlice.reducer