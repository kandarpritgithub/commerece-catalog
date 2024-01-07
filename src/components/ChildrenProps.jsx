import React from 'react'

const ChildrenProps = (props) => {
  return (

    //This is for Fragments:
    
    // <React.Fragment>
    //     <h2>{props.uname}</h2>
    //     <h2>{props.address}</h2>
    //     {/* {props.children} */}
    //     {props.children[1]}
    // </React.Fragment>

    
    //This is short-hand of Fragments:
    <>
    <h2>{props.uname}</h2>
    <h2>{props.address}</h2>
    {/* {props.children} */}
    {props.children[1]}
    </>

  )
}

export default ChildrenProps
