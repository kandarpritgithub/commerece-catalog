import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log("constructor called")
        this.state = {
          username:'Ram', address:'Pune' 
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProp called",state)
        return {state}
    }
    componentDidMount(){
    console.log("componentDidMount called")
    }
    handleChange=()=>{
        console.log("handleChange called")
        this.setState({username:'Happy'})
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called")
        return true
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }
  render() {
    console.log("render called")
    return (
      <div>
        <h2>{this.state.username}</h2>
        <h2>{this.state.address}</h2>
        <button type="button" className="btn btn-primary" onClick={this.handleChange}>Change Username</button>
      </div>
    )
  }
}
