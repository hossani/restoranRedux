import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:"login",
    initialState:{
        user:null,
        isLogin:false
    },
    reducers:{
        setIsLogin: (state, action) => {
            state.isLogin = action.payload.isLogin;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
        },    }
});

export const {setIsLogin,logout}=loginSlice.actions;
export default loginSlice.reducer;