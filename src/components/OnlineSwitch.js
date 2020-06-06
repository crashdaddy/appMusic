import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';


class OnlineSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }
  }
  toggleChecked = () => {
    console.log(this.state.checked);
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (

      <Switch
        checked={this.state.checked}
        onChange={this.toggleChecked}
        color='primary'
      />
    )
  }
}

export default OnlineSwitch