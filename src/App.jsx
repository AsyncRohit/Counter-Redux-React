import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,asyncdecerement } from './store/actions/counterActions'


const App = () => {

  const dispatch=useDispatch()
  const {counter} = useSelector((state)=>state);
  console.log(counter);

  const h1Ref = useRef(null)

  const IncreaseCount=()=>{
    h1Ref.current.style.color='green';
    dispatch(increment())
  }

  const DecreaseCount=()=>{
    h1Ref.current.style.color='red';


    dispatch(asyncdecerement())
  }

    return (
    <div className='bg-gray-400 h-screen w-full flex items-center justify-center text-center'>
      <div className='w-1/3 h-1/3flex flex-col justify-between'>
      <h1
      ref={h1Ref} 
      className='text-red-500 text-7xl mb-14'>{counter.value}</h1>
      <div className='flex justify-between px-10'>
        <button 
        onClick={()=>{
          IncreaseCount()
        }}
        className='px-4 py-4 bg-green-600 rounded-xl text-white font-semibold text-xl ' >Increase</button>
        <button 
        onClick={()=>
          DecreaseCount()}
        className='px-4 py-4 bg-red-600 rounded-xl text-white font-semibold text-xl ' >Decrese</button>
      </div>

      </div>  
      </div>
  )
}

export default App