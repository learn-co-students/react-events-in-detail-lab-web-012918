// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
  //create CoordinatesButton React Component
  whenClicked = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return (
      <button onClick={this.whenClicked}></button>
    )
  }

}



export default CoordinatesButton;
