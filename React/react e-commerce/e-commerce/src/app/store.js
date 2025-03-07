import {configureStore} from "@reduxjs/toolkit";
import {setUpListeners} from "@reduxjs/toolkit/query";
import { productApi } from "../../../service/productApi";
//this guy just updates   /counterSlice/counterSlice
const Store = configureStore({
    reducer:{
        reducer:{
            [productApi.reducerPath]:productApi.reducer
        },
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productApi.middleware)

})
setUpListeners(productApi.dispatch)
export default Store;
