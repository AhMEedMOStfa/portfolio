import React from 'react'
import { useDispatch} from 'react-redux/es/hooks/useDispatch'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {increment ,decrement}  from '../../Redux/counter-toolkit/counter-slice'

const Counter = () => {
    const counter = useSelector((state)=> state.counterSlice.value);
    const dispatch = useDispatch();
    const incrCount = ()=>{
        dispatch(increment());
    }
    const decrCount = ()=>{
        if(counter>0)
        {
            dispatch(decrement());
        }
    }

  return (
    <div className='text-center w-50 max-auto'>
        <h3 className="text-center fs-5 text-danger mb-5"> counter Using React Redux toolkit</h3>
        <h2 >💵{counter} $💵</h2>
        <button onClick={incrCount} className='btn btn-primary my-5 mx-3'>increment</button>
        <button onClick={decrCount} className='btn btn-dark text-white'>decrement</button>
    </div>
  )
}

export default Counter