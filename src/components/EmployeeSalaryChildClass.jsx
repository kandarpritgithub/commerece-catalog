import React, { Component } from 'react'
//callback ref
export default class EmployeeSalaryChildClass extends Component {
  render() {
    return (
      <div>
        <h3>Employee Salary child class</h3>
        <h4 onClick={()=>this.props.innerRef.current.focus()}>
            Basic :{this.props.basic3}</h4>
        <h4>HRA :{this.props.hra3}</h4>
        <h4>DA :{this.props.da3}</h4>
      </div>
    )
  }
}
