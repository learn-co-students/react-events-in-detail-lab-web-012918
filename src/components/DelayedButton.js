import React from 'react';

export default class delayedButton extends React.Component {

  delayButton = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)},
      this.props.delay
    )
  }

  render() {
    return (
      <button onClick={this.delayButton}>Delay Button</button>
    )
  }
}
