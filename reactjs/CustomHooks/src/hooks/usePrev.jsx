//usePrev hook - is used to get the last value of the state

import { useEffect, useRef } from "react"

export const usePrev = (value) => { // then this line of code gets executed
    const ref = useRef();
    console.log("the value or initial value is (the present value of the state)"+ value);
    
    useEffect(()=>{
        console.log("the updated value is (updated value of the state) " + value)
        ref.current = value; 
    },[value]);

    console.log("the ref current value is(previous value of state) " + ref.current)
    return ref.current; // first this line of code gets executed 
}