import React, {useState} from 'react'

const FunStateDemo = (props) => {
    let [count,setCount]=useState(parseInt(props.c))
    let [uname,setUname]=useState("ram")
    let increase=()=>{
        setCount(count+1)
    }

   let handleChange=(e)=>{
        setUname(e.target.value)
    }
    
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={increase}>Counter</button>
            <input type="text" name='uname' className='form-control' value={uname} onChange={handleChange}/>
            
            <h1>{count}</h1>
            <h1>{uname}</h1>
        </div>
  )
}

export default FunStateDemo