import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.ClientX, event.ClientY])
  }

  render(){
    return(
      <button onClick={this.whenClicked}></button>
    )
  }
}

export default CoordinatesButton;




// In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
// This component takes in one prop: onReceiveCoordinates.
// This prop is a function. (This props is only passed in the test suite, you will have errors in the browser)
// When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse.
// Find these using the event data.
// The onReceiveCoordinates callback prop is then called with these coordinates.
