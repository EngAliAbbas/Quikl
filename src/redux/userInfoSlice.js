import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice ({
    name : 'info',
    initialState :{
        name : "",
        src : ""

    },
    reducers:{
        addInfo:(state,action)=>{
            state.name= action.payload.name;
            state.src = action.payload.src;
        }
    }
})

export const {addInfo} = userInfoSlice.actions;
export default userInfoSlice.reducer