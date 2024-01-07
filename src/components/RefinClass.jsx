import React, { Component } from 'react'

export default class Refinclass extends Component {
    constructor(props) {
      super(props)  
      this.state = {name:'ram'}
      this.myRef=React.createRef()
      this.myRef1=React.createRef()
      this.myRef2=React.createRef()
    }
    fetchData=()=>{
        // alert(this.state.name)
        // alert(this.myRef.current.value)
        this.myRef.current.style.color='blue'
        this.myRef.current.value="Meera"
    }
    componentDidMount(){
        this.myRef1.current.focus()
    }
  render() {
    console.log("render called")
    return (
      <>
        {/* <div className="mb-3">
          <label for="" className="form-label">Name</label>
          <input type="text" name="name" id="" className="form-control"
          value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.fetchData}>Fetch Textbox data</button> */}


<div className="mb-3">
          <label for="" className="form-label">Name</label>
          <input type="text" name="name" id="" className="form-control"
            ref={this.myRef} defaultValue='ram'/>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.fetchData}>Fetch Textbox data</button>

        <form>
            <div class="mb-3">
              <label for="" class="form-label">Email</label>
              <input type="text" name="email" id="" class="form-control" ref={this.myRef1} />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Password</label>
              <input type="text" name="password" id="" class="form-control" />
            </div>
        </form>
        <br/>
        <button type="button" class="btn btn-primary me-2" onClick={()=>this.myRef2.current.play()}>play</button>
        <button type="button" class="btn btn-primary" onClick={()=>this.myRef2.current.pause()}>pause</button> <br/> <br/>
        <video ref={this.myRef2}> 
            <source src={require('../assests/videoplayback.mp4')}/>
        </video>
      </>
    )
  }
}
