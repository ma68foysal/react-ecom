import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decreament, Increament } from './slices/SlieceOne'

function Rtk() {
    const statevalue=useSelector((state)=>state  )
    const dispatch= useDispatch()
    function handleClick(){
      dispatch(Increament())
    }
  return (
    <div className='m-auto text-center'>
        <h1>{statevalue}</h1>
        <button onClick={()=>dispatch(Increament())}>+</button>
        <button onClick={()=>dispatch(Decreament())}>-</button>
    </div>
  )
}

export default Rtk