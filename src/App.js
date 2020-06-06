import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import OnlineSwitch from './components/OnlineSwitch';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loggedIn: false, 
      online: false,
    };
  }

  login = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
  return (
    <div>
      <NavBar login={this.login} online={this.state.online} />
      {this.state.loggedIn ? <Dashboard /> : (
        <div>Login</div>
     )}
    </div>
  );
  }
}

export default App;
