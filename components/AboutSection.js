import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';

const AboutSection = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: '#f4f4f4' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          About Us
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '200px' }}>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Why We Exist
                </Typography>
                <Typography variant="body2">
                  Simplifying urban life with seamless, reliable services for your daily needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '200px' }}>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body2">
                  One-stop solution for home improvement, personal care, and lifestyle services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minHeight: '200px' }}>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Our Values
                </Typography>
                <Typography variant="body2">
                  Quality, Trust, Transparency. Vetted providers, clear pricing, dedicated support.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography variant="body1" align="center" sx={{ mt: 4 }}>
          Redefining convenience in the service industry. Join us in our journey.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
