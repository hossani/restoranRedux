import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice.js";
import paginationReducer from "./paginationSlice.js";
import loginReducer from "./loginSlice.js";

const store=configureStore({
reducer:{
    articles:articleReducer,
    pagination:paginationReducer,
    login:loginReducer
},
})

export default store;