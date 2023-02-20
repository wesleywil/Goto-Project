import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { allMangas as selectAllMangas} from "../../server/db_functions_mangas";

const initialState = {
    mangas:[],
    status:"idle",
    error:null,
};

export const fetchMangas = createAsyncThunk("mangas/fetchMangas",
async()=>{
    const response = await selectAllMangas();
    return response;
})

export const mangasSlice = createSlice({
    name:"mangas",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchMangas.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(fetchMangas.fulfilled, (state, action)=>{
            state.status = "succeeded";
            state.mangas = action.payload;
        })
        .addCase(fetchMangas.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const allMangas = (state)=> state.mangas.mangas;

export const selectMangaById = (state, mangaId)=>state.mangas.mangas.find((item)=> item.id === mangaId);

export default mangasSlice.reducer;