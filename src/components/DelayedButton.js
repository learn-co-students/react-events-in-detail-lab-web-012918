// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
  // create DelayedButton react component

  whenClicked = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.whenClicked}></button>
    )
  }
}




export default DelayedButton;
