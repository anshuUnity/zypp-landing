import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Box, Grid, IconButton, Typography, Link as MuiLink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black' }} elevation={0}>
      <Container>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Box display="flex" alignItems="center">
                <Image src="/zypp-logo.png" alt="Zypp Logo" width={50} height={50} />
              </Box>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <MuiLink color="inherit" href="#" underline="none" sx={{ ml: 3 }} onClick={() => scrollToSection('home')}>
                Home
              </MuiLink>
              <MuiLink color="inherit" href="#" underline="none" sx={{ ml: 3 }} onClick={() => scrollToSection('services')}>
                Services
              </MuiLink>
              <MuiLink color="inherit" href="#" underline="none" sx={{ ml: 3 }} onClick={() => scrollToSection('about')}>
                About Us
              </MuiLink>
              <MuiLink color="inherit" underline="none" sx={{ ml: 3 }} onClick={() => scrollToSection('contact')}>
                Contact
              </MuiLink>
              <Button 
                color="primary" 
                variant="contained" 
                href="https://forms.gle/TA6GkirvwrkKTjc87" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ ml: 3, borderRadius: 30 }}
              >
                Take Our Survey
              </Button>
            </Grid>
            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuToggle}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        {mobileMenuOpen && (
          <Box sx={{ display: { xs: 'block', md: 'none' }, backgroundColor: 'black', padding: '10px' }}>
            <MuiLink color="inherit" href="#" underline="none" sx={{ display: 'block', py: 1 }} onClick={() => scrollToSection('home')}>
              Home
            </MuiLink>
            <MuiLink color="inherit" href="#" underline="none" sx={{ display: 'block', py: 1 }} onClick={() => scrollToSection('services')}>
              Services
            </MuiLink>
            <MuiLink color="inherit" href="#" underline="none" sx={{ display: 'block', py: 1 }} onClick={() => scrollToSection('about')}>
              About Us
            </MuiLink>
            <MuiLink color="inherit" underline="none" sx={{ display: 'block', py: 1 }} onClick={() => scrollToSection('contact')}>
              Contact
            </MuiLink>
            <Button
              color="primary"
              variant="contained"
              href="https://forms.gle/TA6GkirvwrkKTjc87"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', mt: 2, borderRadius: 30, width: 'auto', padding: '10px 20px', mx: 'auto' }}
            >
              Take Our Survey
            </Button>
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
