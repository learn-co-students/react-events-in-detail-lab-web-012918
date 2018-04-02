import React from 'react';

export default class CoordinatesButton extends React.Component {

  mouseLocate = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.mouseLocate}></button>
    );
  }
}
