import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducer/reducer'
 function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className='couter-container'>
      <h2 className='couter-title'>
        Reactjs redux example
      </h2>
      <p className='counter-value'>{count}</p>
      <div className='couter-buttons'>
        <button className='couter-buttons' onClick={()=>
        dispatch(increment())}>
            increment
        </button>
<button className='couter-buttons' onClick={()=>{
    dispatch(decrement())
}}>
    decrement
</button>
      </div>
    </div>
  )
}

export default Counter