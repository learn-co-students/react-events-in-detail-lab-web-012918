// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
  create = () => {
    console.log('delayed check')
    // return [event.target.x, event.target.y]
  }

  render() {
    return (
      <button onReceiveCoordinates={this.create()} />
    )
  }
}

export default DelayedButton
