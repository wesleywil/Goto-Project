import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  allAnimes as selectAllAnimes,
  updateAnime as animeUpdate,
  removeAnime
} from "../../server/db_functions_animes";

const initialState = {
  animes: [],
  status: "idle",
  error: null,
};

export const fetchAnimes = createAsyncThunk("animes/fetchAnimes", async () => {
  const response = await selectAllAnimes();
  return response;
});

export const updateAnime = createAsyncThunk(
  "animes/updateAnime",
  async (data) => {
    const response = await animeUpdate(data);
    return response;
  }
);

export const deleteAnime = createAsyncThunk("animes/deleteAnime", async(id)=>{
    const response = await removeAnime(id);
    return response;
})

export const animesSlice = createSlice({
  name: "animes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAnimes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAnimes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animes = action.payload;
      })
      .addCase(fetchAnimes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateAnime.pending, (state) => {
        state.status = "atempting update";
      })
      .addCase(updateAnime.fulfilled, (state) => {
        state.status = "succeeded in updating anime";
      })
      .addCase(updateAnime.rejected, (state, action) => {
        state.status = "failed to update anime";
        state.error = action.error.message;
      })
      .addCase(deleteAnime.pending, (state) => {
        state.status = "atempting update";
      })
      .addCase(deleteAnime.fulfilled, (state) => {
        state.status = "succeeded in deleting anime";
      })
      .addCase(deleteAnime.rejected, (state, action) => {
        state.status = "failed to delete anime";
        state.error = action.error.message;
      });
  },
});

export const allAnimes = (state) => state.animes.animes;

export const selectAnimeById = (state, animeId) =>
  state.animes.animes.find((item) => item.id === animeId);

export default animesSlice.reducer;
