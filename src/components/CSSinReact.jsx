import { Button, Form } from 'react-bootstrap'
import React from 'react'
import styles from '../app.module.css'
import styled from 'styled-components'

const CSSinReact = () => {
    let cssvariable={display:'inline-block',textDecoration:'underline',color:'#e1a298',backgroundColor:'lightblue',width:'500px'}

    let MyButton=styled.button({
        width:'200px',color:'red',backgroundColor:'lightgrey'
        ,height:'150px',borderRadius:'30px',fontSize:'30px'
    })

    let MyText=styled.input`
        width:200px;background-color:lightpink;
    `

    return (
    <div>
        <h1 style={{color:'red',backgroundColor:'lightblue',width:'300px'}}>inline css</h1>
        <h3 style={cssvariable}>css variable demo</h3><span>dfjfdjg</span>
        {/* <h1 className='success'>css file</h1> */}
        {/* <h2 className={'success ${style.error}'}>css module</h2>

        <Button variant="danger" type="submit">Click me</Button><br/>

        <form>
        <div className='form-group mb-3'>
          <label className='form-label'>Email</label>
          <input type="text" className='form-control'></input>
        </div>
        </form>

        <Form>
            <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
        </Form> */}

      <br/>
        <MyButton>Styled Button</MyButton>
        <MyText type="date"></MyText>

    </div>
  )
}

export default CSSinReact
