import { createSlice } from "@reduxjs/toolkit";

export const LogoutSlice = createSlice ({
    name : 'logout',
    initialState :{
        Bar : true

    },
    reducers:{
        ActionOne : (state)=>{
            state.Bar = !state.Bar ;
            
           
        },ActionTwo : (state)=>{
            state.Bar = true ;
            
           
        }
    }
})

export const {ActionOne,ActionTwo} = LogoutSlice.actions;
export default LogoutSlice.reducer