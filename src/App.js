import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      loggedIn: false 
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
      <NavBar login={this.login} />
      {this.state.loggedIn ? <Dashboard /> : (
        <div>Login</div>
     )}
    </div>
  );
  }
}

export default App;
