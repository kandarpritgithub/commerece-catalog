import React from 'react'
//forwarding ref
const EmployeeSalaryChildFun =React.forwardRef((props,ref)=>{
  return (
    <div>
      <div>
        <h3>Employee Salary child class</h3>
        <h4 onClick={()=>ref.current.focus()}>
            Basic :{props.basic3}</h4>
        <h4>HRA :{props.hra3}</h4>
        <h4>DA :{props.da3}</h4>
      </div>
    </div>
  )
})

export default EmployeeSalaryChildFun
