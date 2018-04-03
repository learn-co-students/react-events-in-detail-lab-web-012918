// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component {
  clickEventer = (event) => {
      this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }



  render() {
    return (
      <button onClick={this.clickEventer}>CoordinatesButton</button>
    )
  }
}






export default CoordinatesButton;
