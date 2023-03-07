import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {IncreamentACTION, DecreamentACTION,ResetACTION,IncreamentByValueACTION} from './action/action.js'
import CounterReducer from './reducer/reducer.js'

function Counter() {
    const selector = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <>
    <h1>{selector}</h1>
    <button onClick={()=> dispatch(IncreamentACTION())}>increament</button>
    <button onClick={()=> dispatch(DecreamentACTION())}>decreament</button>
    <button onClick={()=> dispatch(IncreamentByValueACTION(10))}>increament by value</button>
    <button onClick={()=> dispatch(ResetACTION())}>reset</button>
    </>
  )
}

export default Counter