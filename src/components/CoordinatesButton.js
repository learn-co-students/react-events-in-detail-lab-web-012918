// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

  onClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render(){
    return(
      <div>
        <button onClick={this.onClick}/>
      </div>
    )
  }
}

export default CoordinatesButton
