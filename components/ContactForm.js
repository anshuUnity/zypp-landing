import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 30,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
});

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Contact Us
        </Typography>
        <form ref={form} onSubmit={sendEmail}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Name"
                name="name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton type="submit" fullWidth>
                Send Message
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
