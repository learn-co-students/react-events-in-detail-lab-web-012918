// Code CoordinatesButton Component Here
import React from 'react'


export default class CoordinatesButton extends React.Component {

  render(){
    return(
      <button onClick={this.getCoordinates} >Click me!!!!</button>
    )
  };

  getCoordinates = (e) => {
    const coordinates = [e.pageX, e.pageY]
    this.props.onReceiveCoordinates(coordinates)
  }
}
