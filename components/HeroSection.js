import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '150px 0',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Zypp
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your one-stop solution for all urban household services
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2 }}>
          We're launching soon!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="https://forms.gle/TA6GkirvwrkKTjc87"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: 4, borderRadius: 30 }}
        >
          Take Our Survey
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
