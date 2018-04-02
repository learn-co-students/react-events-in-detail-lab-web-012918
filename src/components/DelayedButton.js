import React from 'react'

class DelayedButton extends React.Component{

  runEvent = (event) => {
    let newProps = this.props
    event.persist()
    setTimeout(function(){
      console.log()
      newProps.onDelayedClick(event)
    }, newProps.delay)
  }

  render(){
    return(
      <button onClick={this.runEvent}></button>
    )
  }
}

export default DelayedButton
