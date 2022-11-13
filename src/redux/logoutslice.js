import { createSlice } from "@reduxjs/toolkit";

export const LogoutSlice = createSlice ({
    name : 'logout',
    initialState :{
        Bar : true,
        del : true,
        popEdit: true,
        popDelete : true

    },
    reducers:{
        ActionOne : (state)=>{
            state.Bar = !state.Bar ;
            
           
        },ActionTwo : (state)=>{
            state.Bar = true ;
            
           
        }
        ,deleteAppear :(state) =>{
            state.del = !state.del;
        }
        ,deleteDisappear :(state) => {
            state.del = true ;
        },popEditOpen :(state)=> {
            state.popEdit = !state.popEdit;
        },popEditClose :(state) => {
            state.popEdit = true
        },popDeleteOpen :(state)=>{
            state.popDelete = false
        },popDeleteClose :(state)=>{
            state.popDelete = true
        }
    }
})

export const {ActionOne,ActionTwo ,deleteAppear,deleteDisappear,popEditOpen,popEditClose ,popDeleteClose,popDeleteOpen} = LogoutSlice.actions;
export default LogoutSlice.reducer