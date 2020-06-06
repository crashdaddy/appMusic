import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';


class OnlineSwitch extends Component {
 
  toggleChecked = (event) => {
    this.props.setOnline(event.target.checked);
  }

  render() {
    return (
      <Switch
        checked={this.props.online}
        onChange={this.toggleChecked}
        color='primary'
      />
    )
  }
}

export default OnlineSwitch