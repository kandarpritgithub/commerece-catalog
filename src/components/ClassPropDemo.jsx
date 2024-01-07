import React, { Component } from 'react'

export default class ClassPropDemo extends Component {
  render() {
    return (
      <div>
        <h2>Prop Demo in class Component</h2>
        <h3>{this.props.username}</h3>
        <h3>{this.props.address}</h3>

      </div>
    )
  }
}
