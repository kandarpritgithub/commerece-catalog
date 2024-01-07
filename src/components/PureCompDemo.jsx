import React, { Component, PureComponent } from 'react'

export default class PureCompDemo extends PureComponent {
    constructor(props) {
      super(props)  
      this.state = { name:'Harshita'}
    }
    changeName=()=>{
        console.log("button clicked")
        this.setState({name:"Happy"})}
  render() {
    console.log("Render called")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button type="button" className="btn btn-primary" 
        onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}
