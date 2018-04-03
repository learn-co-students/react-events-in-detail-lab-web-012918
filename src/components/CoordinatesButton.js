// Code CoordinatesButton Component Here

import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  // onReceiveCoordinates(x, y) {
  //   console.log(x)
  //   console.log(y)
  // }

  render() {
    return (
      <button onClick={this.handleClick}>Button</button>
    )
  }
}

export default CoordinatesButton;
