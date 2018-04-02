import React from 'react'

class DelayedButton extends React.Component {

  delayBtn = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)},
      this.props.delay
    )
  }

  render() {
    return (
      <button type="submit" onClick={this.delayBtn} />
    )
  }
}

export default DelayedButton
