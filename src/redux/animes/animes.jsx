import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { allAnimes as selectAllAnimes } from "../../server/db_functions_animes";

const initialState = {
    animes:[],
    status:"idle",
    error:null,
};

export const fetchAnimes = createAsyncThunk("animes/fetchAnimes",
async()=>{
    const response = await selectAllAnimes();
    return response;
})

export const animesSlice = createSlice({
    name:"animes",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchAnimes.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(fetchAnimes.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.animes = action.payload;
        })
        .addCase(fetchAnimes.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const allAnimes = (state)=> state.animes.animes;

export const selectAnimeById = (state, animeId)=>state.animes.animes.find((item)=> item.id === animeId);

export default animesSlice.reducer;