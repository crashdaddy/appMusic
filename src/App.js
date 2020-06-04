import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/MenuIcon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function App() {
  return (
    <div>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className="">
            News
    </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default App;
