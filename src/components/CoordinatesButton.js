import React from 'react'

export default class CoordinatesButton extends React.Component {

  getCoords = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  render() {
    return (
      <button onClick={this.getCoords}>Coordinates Button</button>
    )
  }
}
