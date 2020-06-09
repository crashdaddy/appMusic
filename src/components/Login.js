import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class Login extends Component {

    // isLoggedIn = (event) => {
    //   this.props.logIn;
    // }

    render() {
        return (
            <div class="login-form">
                <div><PersonIcon style={{ color: '#3f51b5', position: 'relative', top: '10px', marginRight: '10px' }} /><Input placeholder="Username" name="username-input" id="username-input" style={{ width: '85%' }}></Input></div>
                <div><VpnKeyIcon style={{ color: '#3f51b5', position: 'relative', top: '10px', marginRight: '10px' }} /><Input placeholder="Password" name="password-input" id="password-input" style={{ width: '85%' }}></Input></div>
                <div><Button onClick={this.props.login} style={{ width: '100%', backgroundColor: '#3f51b5', color: 'white', marginTop: '20px' }}>Login</Button></div>
            </div>
        )
    }
}

export default Login


// <i class="fas fa-users"></i> 
// <i class="fas fa-key"></i>