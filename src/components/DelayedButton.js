// Code DelayedButton Component Here
import React from 'react'
// import ReactDOM from 'react-dom'
class DelayedButton extends React.Component {
  callback = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e), this.props.delay})
  }

  render(){
    return (
      <button onClick={this.callback}></button>
    )
  }
}

export default DelayedButton
