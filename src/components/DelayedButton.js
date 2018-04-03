// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

  render(){
    return(
      <button onClick={this.setDelay} >Hi</button>
    )
  }

  setDelay = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }
}
