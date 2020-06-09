import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OnlineSwitch from './OnlineSwitch';
import VolumeSlider from './VolumeSlider'
import QualitySelector from './QualitySelector'
import CardActions from '@material-ui/core/CardActions';


class OutlinedCard extends Component {

  render() {
    return (
      <Card>
        <CardContent>
          <Typography gutterBottom>
            {this.props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {this.props.description}
          </Typography>
          <CardActions>
            {this.props.displayControl === "OnlineSwitch" ? <OnlineSwitch online={this.props.online} setOnline={this.props.setOnline} /> : ""}
            {this.props.displayControl === "VolumeSlider" ? <VolumeSlider changeVolume={this.props.changeVolume} /> : ""}
            {this.props.displayControl === "QualitySelector" ? <QualitySelector setQuality={this.props.setQuality} quality={this.props.quality} /> : ""}
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

class Dashboard extends Component {

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly", maxWidth: "1200px", margin: "0 auto", padding: "60px" }}>
        <OutlinedCard displayControl="OnlineSwitch" title="Online Mode" description="Is this application connected to the internet?" online={this.props.online} setOnline={this.props.setOnline} />
        <OutlinedCard displayControl="VolumeSlider" title="Master Volume" description="Overvides all other sound settings in this application" changeVolume={this.props.changeVolume} />
        <OutlinedCard displayControl="QualitySelector" title="Sound Quality" description="Manually control the music quality in event of poor connection" setQuality={this.props.setQuality} quality={this.props.quality} />
      </div>
    )

  }
}


export default Dashboard;