import {createSlice} from "@reduxjs/toolkit"
const initialState = {value:0};
//this guy does all the work in its own slice and gives it to the store 

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        clearNumber:(state)=>{
            state.value = 0
        },
    }
})
export const {increment,decrement,clearNumber} = counterSlice.actions
export default counterSlice.reducer