import { configureStore } from "@reduxjs/toolkit";
import animesReducer from "./animes/animes";
import mangasReducer from "./mangas/mangas";

export const store = configureStore({
    reducer:{
        animes:animesReducer,
        mangas:mangasReducer
    },
})