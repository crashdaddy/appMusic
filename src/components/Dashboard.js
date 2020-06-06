import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OnlineSwitch from './OnlineSwitch';
import VolumeSlider from './VolumeSlider'

  
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
        {this.props.displayControl==="OnlineSwitch" ? <OnlineSwitch/> : ""}
        {this.props.displayControl==="VolumeSlider" ? <VolumeSlider changeVolume={this.props.changeVolume}/> : ""}
        </CardContent>
      </Card>
    );
  }
  }

class Dashboard extends Component {

    render() {
        return(
            <div class="cards" style={{display: "flex", justifyContent: "space-evenly", maxWidth: "1200px", margin: "0 auto", padding: "60px"}}>
                <OutlinedCard displayControl="OnlineSwitch" title="Online Mode" description="Is this application connected to the internet?"/>
                <OutlinedCard displayControl="VolumeSlider" title="Master Volume" description="Overvides all other sound settings in this application" changeVolume={this.props.changeVolume}/>
                <OutlinedCard title="Sound Quality" description="Manually control the music quality in event of poor connection"/>
            </div>
        )

    }
}


 export default Dashboard;