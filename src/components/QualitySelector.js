import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class QualitySelector extends Component {

    handleChange = (event) => {
        this.props.setQuality(event.target.value);
    };

    render() {
        return (
            <div>
                <FormControl>
                    <Select
                        id="demo-simple-select"
                        value={this.props.quality}
                        defaultValue={2}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={1}>Low</MenuItem>
                        <MenuItem value={2}>Normal</MenuItem>
                        <MenuItem value={3}>High</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default QualitySelector