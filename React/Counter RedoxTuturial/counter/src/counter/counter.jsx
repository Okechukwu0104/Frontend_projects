import React from "react";
// import "./"
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement,clearNumber } from "../counterSlice/counterSlice";


const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <p>{count}</p>
            <div>
                <button onClick={()=>dispatch(increment())}><span>+</span></button>
                <button onClick={()=>dispatch(decrement())}><span>-</span></button>
                <button onClick={()=>dispatch(clearNumber())}><span>Reset</span></button>
            </div>
        </>
    )
}

export default Counter;