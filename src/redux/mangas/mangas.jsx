import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { allMangas as selectAllMangas, updateManga as mangaUpdate, removeManga} from "../../server/db_functions_mangas";

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

export const updateManga = createAsyncThunk(
    "animes/updateManga",
    async (data) => {
      const response = await mangaUpdate(data);
      return response;
    }
  );
  
  export const deleteManga = createAsyncThunk("animes/deleteManga", async(id)=>{
      const response = await removeManga(id);
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
        .addCase(updateManga.pending, (state) => {
            state.status = "atempting update";
          })
          .addCase(updateManga.fulfilled, (state) => {
            state.status = "succeeded in updating manga";
          })
          .addCase(updateManga.rejected, (state, action) => {
            state.status = "failed to update manga";
            state.error = action.error.message;
          })
          .addCase(deleteManga.pending, (state) => {
            state.status = "atempting update";
          })
          .addCase(deleteManga.fulfilled, (state) => {
            state.status = "succeeded in deleting manga";
          })
          .addCase(deleteManga.rejected, (state, action) => {
            state.status = "failed to delete manga";
            state.error = action.error.message;
          });
    }
})

export const allMangas = (state)=> state.mangas.mangas;

export const selectMangaById = (state, mangaId)=>state.mangas.mangas.find((item)=> item.id === mangaId);

export default mangasSlice.reducer;