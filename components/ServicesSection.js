import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const services = [
  { title: 'Home Improvement', description: 'Cleaning, Repairs, Pest Control', image: '/home-improvement.jpg' },
  { title: 'Personal Care', description: 'Beauty Treatments, Fitness, Healthcare', image: '/personal-care.jpg' },
  { title: 'Lifestyle Services', description: 'Event Planning, Pet Care, Tutoring', image: '/lifestyle-services.jpg' },
];

const ServicesSection = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item key={service.title} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 200 }}
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
