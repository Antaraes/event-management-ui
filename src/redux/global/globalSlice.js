import { createSlice } from "@reduxjs/toolkit";

const inititalState = {
    isDrawer:false 
}
export const globalSlice = createSlice({
    name:"isDrawer",
    initialState:inititalState,
    reducers:{
        setDrawer:(state)=>{
            state.isDrawer = !state.isDrawer;
        }
    }
})

export const {setDrawer} = globalSlice.actions 
export default globalSlice.reducer