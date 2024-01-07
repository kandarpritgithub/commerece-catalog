import React, { Component } from 'react';
import EmployeeSalaryClass from './EmployeeSalaryClass';

export default class EmployeeClass extends Component {
    constructor(props) {
        super(props)  
        this.state = {
           total:parseInt(this.props.basic)+parseInt(this.props.hra)+parseInt(this.props.da),basic:this.props.basic, hra:this.props.hra,da:this.props.da  }  }  
      getSal=(t,b,h,d)=>{this.setState({total:t,basic:b,hra:h,da:d})}
    render() {
    return (
        <>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Emp ID</th><th>EName</th><th>DOJ</th>
                        <th>basic</th><th>hra</th><th>da</th><th>Total Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.empid}</td>
                        <td>{this.props.ename}</td>
                        <td>{this.props.doj}</td>
                        <td>{this.state.basic}</td>
                        <td>{this.state.hra}</td>
                        <td>{this.state.da}</td>
                        <td>{this.state.total}</td>
                    </tr>
                </tbody>
            </table>
        <hr/>
        <EmployeeSalaryClass basic1={this.props.basic}  hra1={this.props.hra}  da1={this.props.da} changeSal={this.getSal}/>
      </>
    )
  }
}
