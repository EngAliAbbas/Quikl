import { configureStore } from "@reduxjs/toolkit";
import logoutslice from "./logoutslice";
import userInfoSlice from "./userInfoSlice";


const store = configureStore({
    reducer : {
        userInfo: userInfoSlice,
        logout : logoutslice
    }
})


export default store