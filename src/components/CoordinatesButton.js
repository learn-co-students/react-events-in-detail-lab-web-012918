import React from 'react'

class CoordinatesButton extends React.Component {

  coordinate = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button type="submit" onClick={this.coordinate} />
    )
  }
}

export default CoordinatesButton
