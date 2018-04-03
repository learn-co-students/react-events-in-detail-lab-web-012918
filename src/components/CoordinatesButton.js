// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

  onCoordinates = (event) => {
    let arr =  [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render(){
    return (
      <button onClick={this.onCoordinates}></button>
    )
  }
}

export default CoordinatesButton
