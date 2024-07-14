import React from 'react';
import { Container, Typography, Box, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black', py: 3 }}>
      <Container maxWidth="md">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Box display="flex" alignItems="center">
              <Image src="/zypp-logo.png" alt="Zypp Logo" width={50} height={50} />
              <Typography variant="body2" color="white" sx={{ ml: 2 }}>
                © {new Date().getFullYear()} Zypp Inc. All rights reserved.
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <IconButton
                component="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
