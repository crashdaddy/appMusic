import React, {Component} from 'react';
import Slider from '@material-ui/core/Slider';

function valuetext(value) {
  return `${value}`;
}

class VolumeSlider extends Component {

 changeVolume = (event, value) => {
  this.props.changeVolume(value);
}

render() {
  return (
    <div>
      <Slider
        value={this.props.volume}
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChangeCommitted={this.changeVolume}
      />
     </div>
  );
}
}

export default VolumeSlider
