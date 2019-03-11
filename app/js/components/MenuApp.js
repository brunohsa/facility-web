import React, {Component}from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

import '../../styles/menu-app.css';

class MenuApp extends Component {

    render() {
        return (
          <div>           
            <AppBar className="app-bar" position="static">
                <Toolbar>
                    <IconButton className="icon-button" color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" style={{ flexGrow: '1'}}>
                        Facility
                    </Typography>
                    
                    <MenuItem className="menu-item">
                        <p>Resumo</p>
                    </MenuItem>

                    <MenuItem className="menu-item">
                        <p>Lancamentos</p>
                    </MenuItem>

                    <IconButton color="inherit">
                        <Badge badgeContent={1}>
                        <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
          </div>
        );
    }
}

export default MenuApp;