import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    cardInDB:false,
    isAnime:true,
};

export const utilsSlice = createSlice({
    name:"utils",
    initialState,
    reducers:{
        set_is_anime:(state, action)=>{
            state.isAnime = action.payload;
        },
        set_cardInDB:(state, action)=>{
            state.cardInDB = action.payload;
        }
    }
})

export const { set_is_anime, set_cardInDB } = utilsSlice.actions;

export default utilsSlice.reducer;