import React from 'react'

const FunEventDemo = () => {
    let handleClick=()=>{ alert("button clicked")}
    let handleClick1=(a,b)=>alert(a+b)
  return (
    <div>
        <button type="button" class="btn btn-success me-2" onClick={handleClick}>Button</button>
        <button type="button" class="btn btn-danger me-2" onClick={()=>alert("button clicked")}>Button</button>
        <button type="button" class="btn btn-success me-2" onClick={()=>handleClick1(2,3)}>Button</button>
        <button type="button" class="btn btn-success me-2" onClick={()=>handleClick()}>Button</button>   
    </div>
  )
}

export default FunEventDemo
