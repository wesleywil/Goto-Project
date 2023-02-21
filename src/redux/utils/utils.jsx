import { createSlice} from "@reduxjs/toolkit";



const initialState = {
    cardInDB:false,
};

export const utilsSlice = createSlice({
    name:"utils",
    initialState,
    reducers:{
    }
})

export default utilsSlice.reducer;