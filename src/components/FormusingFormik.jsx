import { useFormik } from 'formik';
import React from 'react'
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
const FormusingFormik = () => {
    let validateuser=(user)=>{
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
    let formik=useFormik({
        initialValues:{username:'',email:'',password:'',cpassword:''},
        validate:validateuser,
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })
  return (
    <>
    <Row>
      <Col xs={8}>
          <h1>Add User using Formik Library</h1> <hr/>
       <Form onSubmit={formik.handleSubmit}>
          <FloatingLabel label="Username">
            <Form.Control type="text" placeholder=""name="username"  value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}
          >
            </Form.Control>
          </FloatingLabel>
          <span class="text-danger">{(formik.touched.username && formik.errors.nameerr) ? formik.errors.nameerr :null}</span>
          <FloatingLabel className="mt-3" label="Email Address">
            <Form.Control  type="text"  placeholder="" name="email"value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} >           
            </Form.Control>
          </FloatingLabel>
          <span class="text-danger">{(formik.touched.email && formik.errors.emailerr) ? formik.errors.emailerr : null}</span>
          <FloatingLabel className="mt-3" label="Password">
            <Form.Control type="password"  placeholder=""  name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            </Form.Control>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Confirm Password">
            <Form.Control
              type="password"
              placeholder=""
              name="cpassword"  value={formik.values.cpassword} onChange={formik.handleChange} onBlur={formik.handleBlur}
            ></Form.Control>
          </FloatingLabel>
          <Button type="submit" className="mt-3"  variant="danger">
            Add User
          </Button>
        </Form>
      </Col>
    </Row>
  </>
  )
}

export default FormusingFormik
