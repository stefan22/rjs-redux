import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DocsLogo from '../../images/docs.png';
import '../../index.scss';
import '../../scss/components/top-bar.scss';


function TopBar() {
  return (
    <div className='topbar'>
      <AppBar position="static">
        <Toolbar>
          <IconButton className='topbar-icon' color="inherit">
            <img src={DocsLogo} alt='docs-logo' width='500' />
          </IconButton>
          <Typography variant="h6" color="inherit" className='topbar-grow'>
          </Typography>

          <NavLink className='nav topbar-home'
            to='/' activeClassName='is-active' exact={true}>Home
          </NavLink>

          <NavLink className='nav topbar-expenses'
            to='/expenses' activeClassName='is-active'>Expenses
          </NavLink>

          <NavLink className='nav topbar-expenses'
            to='/movies' activeClassName='is-active'>Movies
          </NavLink>

          <NavLink className='nav topbar-expenses'
            to='/earthquakes' activeClassName='is-active'>Earthquakes
          </NavLink>

        </Toolbar>
      </AppBar>
    </div>
  );
}



export default TopBar;
