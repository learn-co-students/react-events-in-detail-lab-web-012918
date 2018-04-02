import React from 'react'

class CoordinatesButton extends React.Component {
  
  createArray = (e) => {
    let arr = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(arr) 
  }

  render() {
    return (
      <button onClick={this.createArray}></button>
    )
  }
}

export default CoordinatesButton