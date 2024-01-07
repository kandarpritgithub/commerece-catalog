import React, { useRef } from 'react'

const RefinFun = () => {
    let countRef=useRef()
    let decreaseCount=()=>{
        if(countRef.current.value > 1)
            countRef.current.value--
        else 
            countRef.current.value=1
    }
  return (
    <div>
      <button onClick={decreaseCount}>-</button><input type="text" 
      style={{width:'40px',textAlign:'center'}} defaultValue={1} 
      ref={countRef}></input><button onClick={()=>countRef.current.value++}>+</button>
    </div>
  )
}

export default RefinFun
