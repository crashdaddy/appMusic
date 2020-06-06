import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      volume: 20,
      loggedIn: false, 
      online: false,
      quality: 2
    };
  }

  login = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  setQuality = (newQuality) => {
    this.setState({
      quality: newQuality
    })
    console.log(newQuality)
  }

  changeVolume=(newVolume) => {
    this.setState({
      volume: newVolume
    })
  }

  render() {
  return (
    <div>
      <NavBar login={this.login} online={this.state.online} />
      {this.state.loggedIn ? <Dashboard volume={this.state.volume} changeVolume={this.changeVolume} setQuality={this.setQuality} quality={this.state.quality}/> : (
        <div>Login</div>
     )}
    </div>
  );
  }
}

export default App;
