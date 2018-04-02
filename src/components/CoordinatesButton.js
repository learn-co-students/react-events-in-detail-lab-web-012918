// Code CoordinatesButton Component Here
import React from 'react'
import ReactDOM from 'react-dom'
class CoordinatesButton extends React.Component {

  coordinates = (e) => {
    let arr = [e.clientX, e.clientY]
    {this.props.onReceiveCoordinates(arr)}
  }
  render(){
    return (
      <button onClick={this.coordinates}></button>
    )
  }
}

export default CoordinatesButton
