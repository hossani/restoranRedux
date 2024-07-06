import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticle=createAsyncThunk('articles/fetchAricle',async()=>{
   const response=await axios.get('http://localhost:3001/articles');
   return response.data.reverse();
});
export const addArticle = createAsyncThunk('articles/addArticle',async (article)=>{
    const response= await axios.post('http://localhost:3001/articles',article);
    return response.data;
});
export const deleteArticle = createAsyncThunk('articles/deleteArticle',async (id)=>{
    await axios.delete(`http://localhost:3001/articles/${id}`);
    return id;
});

export const editArticle = createAsyncThunk('articles/editArticle',async (updatedArticle)=>{
    const response= await axios.put(`http://localhost:3001/articles/${updatedArticle.id}`,updatedArticle);
    return response.data;
});

const articleSlice=createSlice({
    name:"articles",
    initialState: {
        articles:[],
        filteredArticles:[],
        loading:true,
        error:false
    },
    reducers:{
        setFilteredArticles:(state,action)=>{
           state.filteredArticles=action.payload;
        },
        setArticles:(state,action)=>{
            state.articles=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(addArticle.fulfilled,(state,action)=>{
            state.articles=[action.payload,...state.articles]
        })
        .addCase(deleteArticle.fulfilled,(state,action)=>{
         state.articles = state.articles.filter(item => item.id != action.payload);;
        })
        .addCase(editArticle.fulfilled,(state,action)=>{
            state.articles=state.articles.map((item)=>item.id==action.payload.id?action.payload:item);
        })
        .addCase(fetchArticle.fulfilled,(state,action)=>{
                state.loading=false;
            state.filteredArticles=action.payload;
            state.articles=action.payload;
        })
        .addCase(fetchArticle.rejected,(state)=>{
            state.loading=false;
            state.error=true;
        })
    }
})

export const {setFilteredArticles,setArticles }=articleSlice.actions;
export default articleSlice.reducer;