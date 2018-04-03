// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

  clickHandler = (event) => {
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render(){
    return(
      <button onClick={this.clickHandler}></button>
    )
  }
}


export default CoordinatesButton
