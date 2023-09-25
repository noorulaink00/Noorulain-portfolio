import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';

function Footer() {
  return (
    <AppBar position="static"style={{background:'white'}}>
      <Toolbar>
        <Typography variant="body1" style={{color:'#420d50'}}>
          &copy; {new Date().getFullYear()} 
        </Typography>
        {/*   <Typography variant="body1" style={{color:'#420d50'}}>
          &copy; {new Date().getFullYear()} {'<NoorulAin/>'}
        </Typography> */}
       
       
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
