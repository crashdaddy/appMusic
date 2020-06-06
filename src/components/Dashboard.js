import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import OnlineSwitch from './OnlineSwitch';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth:350,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 20,
      fontWeight: 800
    },
    pos: {
      marginBottom: 12,
    }
  });
  
function OutlinedCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        {props.displayControl==="OnlineSwitch" ? <OnlineSwitch/> : ""}
        </CardContent>
      </Card>
    );
  }

class Dashboard extends Component {

    render() {
        return(
            <div class="cards" style={{display: "flex", justifyContent: "space-evenly", maxWidth: "1200px", margin: "0 auto", padding: "60px"}}>
                <OutlinedCard displayControl="OnlineSwitch" title="Online Mode" description="Is this application connected to the internet?"/>
                <OutlinedCard title="Master Volume" description="Overvides all other sound settings in this application"/>
                <OutlinedCard title="Sound Quality" description="Manually control the music quality in event of poor connection"/>
            </div>
        )

    }
}


 export default Dashboard;