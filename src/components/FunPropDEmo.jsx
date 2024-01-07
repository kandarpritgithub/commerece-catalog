import React from 'react'

const FunPropDEmo = (props) => {
    // props.address="Ahmedabad" //error
  return (
    <div>
      <h2>Prop Demo in fun Component</h2>
      <h3>{props.username}</h3>
      <h3>{props.address}</h3>
    </div>
  )
}

export default FunPropDEmo
