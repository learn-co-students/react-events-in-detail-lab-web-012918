import React from 'react'

export default class DelayedButton extends React.Component {

  handleClickEvent = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render(){
    return <button onClick={this.handleClickEvent}>Im another button!</button>
  }
}
