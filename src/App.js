import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import DescriptionAlert from './components/DescriptionAlerts';

const alertType = [{
  title: 'Volume Alert',
  text: 'Listening to music at a high volume could cause long-term hearing loss.',
  severity: 'error'
},{
  title: 'Low Quality',
  text: 'Music quality is degraded. Increase quality if your connection allows it.',
  severity: 'warning'
}
,{
  title: 'Currently Offline',
  text: "Your application is offline. You won't be able to share or stream music to other devices.",
  severity: 'info'
}
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      showInfo: false,
      alerts: [],
      volume: 20,
      loggedIn: false, 
      online: true,
      quality: 2
    };
  }

  login = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  
  }

  setOnline = (onOrOff) => {
    this.setState({
      online: onOrOff
    })
    if (!onOrOff) {
      this.setState({
        alerts: [...this.state.alerts, 2]
      })
    
    }
  }

  
  setQuality = (newQuality) => {
    this.setState({
      quality: newQuality
    })
    if (newQuality === 1) {
      this.setState({
        alerts: [...this.state.alerts, 1]
      })
  }
}

  changeVolume=(newVolume) => {
    this.setState({
      volume: newVolume
    })
    if (newVolume > 80) {
      this.setState({
        alerts: [...this.state.alerts, 0]
      })
    }
  }

  render() {
  return (
    <div>

      {this.state.alerts.map((alert, index) => (<DescriptionAlert key={index} alertType={alertType[alert]} />))}
      <NavBar login={this.login}  />
      {this.state.loggedIn ? <Dashboard volume={this.state.volume} changeVolume={this.changeVolume} setQuality={this.setQuality} quality={this.state.quality} online={this.state.online} setOnline={this.setOnline}/> : (
        <div>Login</div>
     )}
    </div>
  );
  }
}

export default App;
