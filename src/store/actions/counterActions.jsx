export {increment} from "../reducers/counterSlice"

import { decrement } from "../reducers/counterSlice"

export const asyncdecerement=()=>(dispatch,getstate)=>{
    setTimeout(() => {
        dispatch(decrement())
    }, 100);
}





