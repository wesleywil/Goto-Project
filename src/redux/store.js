import { configureStore } from "@reduxjs/toolkit";
import animesReducer from "./animes/animes";
import mangasReducer from "./mangas/mangas";
import utilsReducer from "./utils/utils";

export const store = configureStore({
    reducer:{
        animes:animesReducer,
        mangas:mangasReducer,
        utils:utilsReducer
    },
})