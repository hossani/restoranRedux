import { createSlice } from "@reduxjs/toolkit";

const paginationSlice=createSlice({
    name:"pagination",
    initialState:{
        prevPage:1,
        currentPage:1,
    },
    reducers:{
      setPrevPage:(state,action)=>{ state.prevPage=action.payload},
      setCurrentPage:(state,action)=>{ state.currentPage=action.payload}
    }
});

export const {setCurrentPage,setPrevPage}= paginationSlice.actions;
export default paginationSlice.reducer;
