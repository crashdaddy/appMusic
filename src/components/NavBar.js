import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/MenuIcon';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {

    render() {
        return(
            <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className="" color="inherit" aria-label="menu">
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" className="">
                App Music
              </Typography>
            </Toolbar>
          </AppBar>

        )
    }
}



export default NavBar