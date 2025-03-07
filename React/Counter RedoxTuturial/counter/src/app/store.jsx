import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
//this guy just updates   /counterSlice/counterSlice
export const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
})