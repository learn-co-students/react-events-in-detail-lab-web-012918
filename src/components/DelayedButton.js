import React from 'react'

class DelayedButton extends React.Component{

  runEvent = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render(){
    return(
      <button onClick={this.runEvent}></button>
    )
  }
}

export default DelayedButton
