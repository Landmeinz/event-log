import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// import './Nav.css';

// --- MUI --- // 
import Box from '@mui/material/Box';
import OpacityIcon from '@mui/icons-material/Opacity';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';

import {
  sxNavContainer,
  sxNavLink
} from '../_sxStyles/_sxStyles';



function Nav() {

  const history = useHistory();

  function handleClick(page) {
    switch (page) {
      case 'home':
        history.push('/home');
        break;

      case 'about':
        history.push('/about');
        break;

      default:
        break;
    }; // switch

  }; // handleClick

  // history.push('/PlantDetails');

  return (
    <Box sx={sxNavContainer}>

      <Typography variant='h5' sx={sxNavLink} onClick={() => handleClick("home")}>
        LOG
      </Typography>

      <Typography variant='h5' sx={sxNavLink} onClick={() => handleClick("about")}>
        ABOUT
      </Typography>

    </Box>
  );
}

export default Nav;