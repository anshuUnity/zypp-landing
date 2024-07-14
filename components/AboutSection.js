import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const AboutSection = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          About Us
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Why We Exist
        </Typography>
        <Typography variant="body1" paragraph>
          We believe that the modern urban lifestyle should be complemented by a seamless, reliable, and comprehensive service platform. Our mission is to create a trusted ecosystem that simplifies urban household management across Canada.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          We envision a world where urban households can effortlessly access a range of services under one roof, from home improvement and maintenance to personal care and wellness.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          What We Offer
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Home Improvement
            </Typography>
            <ul>
              <li>Cleaning Services</li>
              <li>Repairs and Maintenance</li>
              <li>Pest Control</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Personal Care
            </Typography>
            <ul>
              <li>Beauty Treatments</li>
              <li>Fitness and Wellness</li>
              <li>Healthcare Services</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Lifestyle Services
            </Typography>
            <ul>
              <li>Event Planning</li>
              <li>Pet Care</li>
              <li>Education and Tutoring</li>
            </ul>
          </Grid>
        </Grid>

        <Typography variant="h5" component="h2" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" paragraph>
          We prioritize quality, trust, and transparency. Our vetted service providers, clear pricing, and dedicated support ensure a seamless experience for our users.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Join Us
        </Typography>
        <Typography variant="body1" paragraph>
          Join us in redefining convenience and quality in the service industry. Welcome to Zypp, where our why is you.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
