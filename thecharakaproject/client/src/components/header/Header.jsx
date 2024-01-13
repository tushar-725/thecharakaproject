import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [programsMenuAnchor, setProgramsMenuAnchor] = useState(null);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleProgramsMenuOpen = (event) => {
    setProgramsMenuAnchor(event.currentTarget);
  };

  const handleProgramsMenuClose = () => {
    setProgramsMenuAnchor(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar sx={{ backgroundColor: scrolling ? 'black' : 'rgba(255, 255, 255, 0.3)' }} style={{transition: 'transform 0.3s ease-in-out'}}>
      <Toolbar sx={{transition: 'transform 0.3s ease-in-out'}}>
        <Box sx={{ display: { xs: 'block', md: 'none'} }}>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
              sx={{ transition: 'transform 0.3s ease-in-out'}}
            >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          component="img"
          sx={{
            height: 52,
          }}
          alt="Your logo."
          src={logo}
          />
        <Typography variant="h6" component={Link} to="/" sx={{ ml: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 1000,
          letterSpacing: '.3rem',
          color: scrolling ? 'white' : '#000',
          transition: 'transform 0.3s ease-in-out',
          textDecoration: 'none',}}>
          www.thecharakaproject.in
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' },
           justifyContent: 'flex-end', 
           flexGrow: 1, 
           color: scrolling ? 'white' : '#000',
           fontWeight: '600',
           fonstSize: '10',
           transition: 'transform 0.3s ease-in'
           }}>
          <Button color="inherit" component={Link} to="/" sx={{fontWeight: 'inherit',
            fontSize: 'inherit',
          }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="https://aavaranbythecharakaproject.myshopify.com/" target='_blank' sx={{fontWeight: 'inherit',
            fontSize: 'inherit'
          }}>
            Aavaran
          </Button>
          <Button
            color="inherit"
            aria-controls="programs-menu"
            aria-haspopup="true"
            onClick={handleProgramsMenuOpen}
            sx={{fontSize: 'inherit', fontWeight: 'inherit', paddingRight: 0}}
          >
            Programs<span>
              <IconButton color="#000" aria-label="icon" sx={{padding:0, marginTop: -0.5}}>
                <ArrowDropDownIcon fontSize='medium' />
              </IconButton></span>
          </Button>
          <Menu
            id="programs-menu"
            anchorEl={programsMenuAnchor}
            keepMounted
            open={Boolean(programsMenuAnchor)}
            onClose={handleProgramsMenuClose}
            PaperProps={{
              style: {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
          >
            <MenuItem component={Link} to="/vivaad">
              Vivaad - The Book Club
            </MenuItem>
            <MenuItem component={Link} to="/samvaad">
              Samvaad - Pen Pal Program
            </MenuItem>
            <MenuItem component={Link} to="/compendium">
              Compendium
            </MenuItem>
          </Menu>
          <Button color="inherit" component={Link} to="/blog" sx={{fontWeight: 'inherit',
            fontSize: 'inherit'
          }}>
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/our-team" sx={{fontWeight: 'inherit',
            fontSize: 'inherit'
          }}>
            Our Team
          </Button>
        </Box>
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose} PaperProps={{
    sx: {
      backgroundColor: '#000'
    }
  }} sx={{ transition: 'transform 0.3s ease-in-out'}}>
      <Box
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
          sx={{ display: 'flex', justifyContent: 'flex',            
          backgroundColor: '#000',
          color: '#fff',
          }}
        >
          <IconButton color="inherit" edge="end" onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          <List sx={{ color: '#fff' }}>
            <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="https://aavaranbythecharakaproject.myshopify.com/" target='_blank' onClick={handleDrawerClose}>
              <ListItemText primary="Aavaran" />
            </ListItem>
            <ListItem button component={Link} to="/vivaad" onClick={handleDrawerClose}>
              <ListItemText primary="Vivaad" />
            </ListItem>
            <ListItem button component={Link} to="/samvaad" onClick={handleDrawerClose}>
              <ListItemText primary="Samvaad" />
            </ListItem>
            <ListItem button component={Link} to="/blog" onClick={handleDrawerClose}>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button component={Link} to="/our-team" onClick={handleDrawerClose}>
              <ListItemText primary="Our Team" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
