import React, { Component } from 'react'

export default class ClassEventDemo extends Component {
    handleClick=()=>{ alert("button clicked")}
    handleClick1=(a,b)=>alert(a+b)

    render() {
    return (
      <div>
        <button type="button" class="btn btn-primary">Button</button>
        <button type="button" class="btn btn-success me-2" 
        onClick={this.handleClick}>Button</button>
        <button type="button" class="btn btn-danger me-2" 
        onClick={()=>alert("button clicked")}>Button</button>
        <button type="button" class="btn btn-success me-2" 
        onClick={()=>this.handleClick1(2,3)}>Button</button>
        <button type="button" class="btn btn-success me-2" 
        onClick={()=>this.handleClick()}>Button</button>
      </div>
    )
  }
}
