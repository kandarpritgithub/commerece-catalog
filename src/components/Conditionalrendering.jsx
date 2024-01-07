import React from 'react'

const Conditionalrendering = (props) => {
    const Conditionalrendering = (props) => {
        // console.log(props.logging)
        // if(props.logging){ // true
        //     return( <h1>Welcome User</h1>)
        // }
        // else{
        //     return( <h1>Welcome Guest</h1>)
        // }
    
        // let result
        // if(props.logging)
        //     result=<h1>Welcome User</h1>
        // else 
        //     result=<h1>Welcome Guest</h1>
        
        //  return(
        //     <div>
        //         {result}
        //     </div>
        //  ) 
    
        return (
            <>
                {/* {props.logging ?<><h1>Welcome User</h1> 
                    <h2>fdhjhjdghf</h2> </>
                 :<h1>Welcome Guest</h1>
                 } */}
    
          {props.logging && <>
           <h1>Welcome User</h1> 
           <h2>fdhjhjdghf</h2> </>}
            </>
        )
    }
}
    
export default Conditionalrendering
