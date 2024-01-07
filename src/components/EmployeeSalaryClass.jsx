import React, { Component } from 'react'
import EmployeeSalaryChildClass from './EmployeeSalaryChildClass'
import EmployeeSalaryChildFun from './EmployeeSalaryChildFun'

export default class EmployeeSalaryClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         salary:{basic2:this.props.basic1 , hra2:this.props.hra1 , da2:this.props.da1}
      }
    }
    handleChange=(e)=>{
      this.setState({salary:{
        ...this.state.salary , 
        [e.target.name] : e.target.value
      }})
    }
    updateSal=(e)=>{
      e.preventDefault()
      let t=parseInt(this.state.salary.basic2)+parseInt(this.state.salary.hra2)+parseInt(this.state.salary.da2)
      this.props.changeSal(t,this.state.salary.basic2,this.state.salary.hra2,this.state.salary.da2)
    }
  render() {
    return (
      <div className='row'>
        <div className='col-6'>
          <h2>Employee Salary</h2> <hr/>
        
          <form onSubmit={this.updateSal}>
              <div class="mb-3">
                <label for="" class="form-label">Basic</label>
                <input type="text" name="basic2" id="" class="form-control" placeholder="" value={this.state.salary.basic2} onChange={this.handleChange} ref={this.basicRef}/>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">HRA</label>
                <input type="text" name="hra2" id="" class="form-control" placeholder="" value={this.state.salary.hra2} onChange={this.handleChange}/>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">DA</label>
                <input type="text" name="da2" id="" class="form-control" placeholder="" value={this.state.salary.da2} onChange={this.handleChange}/>
              </div>
              <button type="submit" class="btn btn-primary">Update Salary</button>
          </form>
        </div>
        <div className='col-6'>
          <EmployeeSalaryChildClass basic3={this.state.salary.basic2} hra3={this.state.salary.hra2} da3={this.state.salary.da2} innerRef={this.basicRef}/>

          <EmployeeSalaryChildFun basic3={this.state.salary.basic2} hra3={this.state.salary.hra2} da3={this.state.salary.da2} ref={this.basicRef}/>
        </div>
      </div>
    )
  }
}
