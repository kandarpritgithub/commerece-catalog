import React, { useReducer, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const AddUser = () => {
    let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let [isSubmit,setIsSubmit]=useState(false)
    let [errors,setErrors]=useState({})
    let handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(validations(user))
        setIsSubmit(true)
    }

    let validations=(user)=>{
        let formerrors={}
        let pattern=/^[a-zA-Z]+$/
        if(user.username=='')
            formerrors.nameerr="username is required"
        else if(!pattern.test(user.username))
            formerrors.nameerr="Username should have aplhabets only"
        if(user.email=='')
            formerrors.emailerr="email is required"
        return formerrors
    }
  return (
    <>
      <Row>
        <Col xs={6}>
            <h1>Add User</h1> <hr/>
            {(Object.keys(errors).length ==0 && isSubmit)  ? JSON.stringify(user) : null}
          <Form onSubmit={handleSubmit}>
            <FloatingLabel label="Username">
              <Form.Control type="text" placeholder=""name="username" 
              value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}>
              </Form.Control>
            </FloatingLabel>
            <span class="text-danger">{errors.nameerr}</span>
            <FloatingLabel className="mt-3" label="Email Address">
              <Form.Control  type="text"  placeholder="" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}>           
              </Form.Control>
            </FloatingLabel>
            <span class="text-danger">{errors.emailerr}</span>
            <FloatingLabel className="mt-3" label="Password">
              <Form.Control type="password"  placeholder=""  name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}>
              </Form.Control>
            </FloatingLabel>
            <FloatingLabel className="mt-3" label="Confirm Password">
              <Form.Control
                type="password"
                placeholder=""
                name="cpassword" value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}
              ></Form.Control>
            </FloatingLabel>
            <Button type="submit" className="mt-3"  variant="danger">
              Add User
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddUser;