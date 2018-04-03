// Code CoordinatesButton Component Here
import React from 'react';

class DelayedButton extends React.Component{

  onClick = (event) => {
    event.persist();
    setTimeout(() => { this.props.onDelayedClick(event)}, this.props.delay);
  }

  render(){
    return(
      <div>
        <button onClick={this.onClick}/>
      </div>
    )
  }
}

export default DelayedButton
