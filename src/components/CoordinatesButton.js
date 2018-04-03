// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
  handleClick = (event) => {
    const coord = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coord)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton
