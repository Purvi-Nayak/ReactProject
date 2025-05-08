import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Icon
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {IMAGES} from '../../assets/index';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    if(!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    alert('Form submitted successfully!');
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ color: '#6B21A8' }} />,
      title: 'Tel: 877-67-88-99',
      subtitle: 'For over 24hr'
    },
    {
      icon: <EmailIcon sx={{ color: '#FB2E86' }} />,
      title: 'E-Mail: shop@store.com',
      subtitle: 'Online Support'
    },
    {
      icon: <LocationOnIcon sx={{ color: '#FFB265' }} />,
      title: '20 Margaret st, London',
      subtitle: 'Great Britain, 3NM98-LK'
    },
    {
      icon: <AccessTimeIcon sx={{ color: '#1BE982' }} />,
      title: 'Free standard shipping',
      subtitle: 'on all orders.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        {/* Information Section */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" component="h1" sx={{ mb: 3, color: '#151875' }}>
            Information About us
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#8A8FB9' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
            mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae 
            eget dolor lobortis.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, mb: 6 }}>
            {['#FB2E86', '#FFB265', '#1BE982'].map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: color
                }}
              />
            ))}
          </Box>

          <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#151875' }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#8A8FB9' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
            tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
          </Typography>

          <Grid container spacing={2}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card elevation={0} sx={{ bgcolor: 'transparent' }}>
                  <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    {info.icon}
                    <Box>
                      <Typography variant="subtitle1" sx={{ color: '#151875' }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#8A8FB9' }}>
                        {info.subtitle}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={4}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}
          >
            <Grid container spacing={2} display={{ xs: 'block', md: 'flex' }}>
          
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  label="Your E-mail*"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              name="subject"
              label="Subject*"
              value={formData.subject}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              name="message"
              label="Type Your Message*"
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#FB2E86',
                '&:hover': { bgcolor: '#e91e63' },
                alignSelf: 'flex-start',
                px: 4,
                py: 1.5
              }}
            >
              Send Mail
            </Button>
          </Box>
        
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;