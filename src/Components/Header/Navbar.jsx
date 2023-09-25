
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { faLaptopCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';
import "../../Pages/Home/Home.css"
import Grid from '@mui/material/Grid';
import logo from "../../assets/logo2.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check if the screen size is 'sm' or smaller
  const isSmallScreen = useMediaQuery('(max-width:1000px)');
  const socialIcons = [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/noor-ul-ain-670096190/' },
    { icon: faGithub, link: 'https://github.com/noorulaink00' },
    { icon: faMediumM, link: 'https://medium.com/@noorulaink00' },
    { icon: faEnvelope, link: 'mailto:noorulaink00@gmail.com' },
  ];

  const menuItems = [
    { icon: faLaptopCode ,label: 'Skills', path: '#skills' },
    { icon: faCode ,label: 'Projects', path: '#projects' },
    { icon: faBlog ,label: 'Blog', path: '#blog' },
    { icon: faAddressBook,label: 'Contact', path: '#contact' },
  ];
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff', // Change this color to set the AppBar background color
      },
    },
  });
  // Function to handle menu button click
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleImageClick = () => {
    // Handle any additional logic if needed before navigation
    window.location.href = '#home'; // Navigate to the desired hash fragment
  };
  return (
    <div className="header">
     <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item className='logo'>
              <CardMedia
                component="img"
                alt="Example Image"
                style={{ marginTop:'10px', marginLeft:'10px' }}
                height="70"
                image={logo}
                onClick={handleImageClick}
              />
            </Grid>
            
            <Grid item>
              {isSmallScreen ? (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuClick}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                menuItems.map((menu, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    style={{ color: 'black' , transition: 'background-color 0.3s, color 0.3s', marginLeft:'30px' }}
                    sx={{
                      my: 1,
                      padding: "10px"
                    }}
                    href={menu.path}
                    rel="noopener noreferrer"
                    className='menuitems'
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <FontAwesomeIcon icon={menu.icon} size="lg" style={{ marginRight: '10px' }} />
                      <Typography variant="h6">{menu.label}</Typography>
                    </div>
                  </Button>
                ))
              )}
            </Grid>
          {/* 
            {isSmallScreen && socialIcons.length > 0 && (
              <Grid item>
                {socialIcons.map((socialIcon, index) => (
                  <IconButton
                    key={index}
                    variant="contain"
                    style={{ padding: '5px 10px',color: "#420d50" }}
                    sx={{
                      my: 1,
                    }}
                    href={socialIcon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='socialicon'
                  >
                    <div>
                      <FontAwesomeIcon icon={socialIcon.icon} size="lg" />
                    </div>
                  </IconButton>
                ))}
              </Grid>
            )}
            */}  
          </Grid>
        </Toolbar>
      </AppBar>

      {isSmallScreen && isMenuOpen && (
        <Box display="flex" justifyContent="flex-end" p={2}>
          {menuItems.map((menuItem, index) => (
            <Button
              key={index}
              variant="outlined"
              style={{ backgroundColor: 'purple', color: 'white', marginRight: '10px' }}
              sx={{
                my: 1,
                width: '40px',
                height: '40px',
              }}
              href={menuItem.path}
            >
              <FontAwesomeIcon icon={menuItem.icon} size="lg" />
            </Button>
          ))}
        </Box>
      )}
    </ThemeProvider>


</div>
  )
}

export default Navbar