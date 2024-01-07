import React, { Component } from 'react'

export default class ClassStateDemo extends Component {
    constructor(props) {
        super(props)
       //  this.count=1
       this.state={count:parseInt(this.props.c),username:'Ram'}
    }
    increase=()=>{
       // this.count +=1
       // console.log(this.count)
       this.setState({count:this.state.count+1})}
    
       handleChange=(e)=>{
        this.setState({username:e.target.value})
    }
    
    render() {
        return (<div><button type="button" className="btn btn-primary" 
           onClick={this.increase}>Counter</button>
           {/* <h1>{this.count}</h1> */}
           <h1>{this.state.count}</h1>
           
           <div className='col-4'>
            <input type="text" name="uname" className='form-control' value={this.state.username}
           onChange={this.handleChange}/>
           <h1>hello {this.state.username}</h1>
           </div>
         </div>
       )
    }
}
