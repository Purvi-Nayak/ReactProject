import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#EEEFFB', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Hekto Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Hekto
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <TextField
                
                placeholder="Your email address"
                variant="outlined"
                sx={{
                  bgcolor: '#fff',
                  borderRadius: '3px 0 0 3px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#FB2E86',
                  borderRadius: '0 3px 3px 0',
                  '&:hover': { bgcolor: '#e91e63' }
                }}
              >
                Sign Up
              </Button>
            </Box>

            <Typography variant="body2" sx={{ color: '#8A8FB9', mb: 1 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ color: '#8A8FB9' }}>
              17 Princess Road, London, Greater London NW1 8JR, UK
            </Typography>
          </Grid>

          {/* Categories Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Categories
            </Typography>
            {[
              'Laptops & Computers',
              'Cameras & Photography',
              'Smart Phones & Tablets',
              'Video Games & Consoles',
              'Waterproof Headphones'
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  display: 'block',
                  color: '#8A8FB9',
                  mb: 1,
                  '&:hover': { color: '#FB2E86' }
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Customer Care Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Customer Care
            </Typography>
            {[
              'My Account',
              'Discount',
              'Returns',
              'Orders History',
              'Order Tracking'
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  display: 'block',
                  color: '#8A8FB9',
                  mb: 1,
                  '&:hover': { color: '#FB2E86' }
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Pages Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Pages
            </Typography>
            {[
              'Blog',
              'Browse the Shop',
              'Category',
              'Pre-Built Pages',
              'Visual Composer Elements',
              'WooCommerce Pages'
            ].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{
                  display: 'block',
                  color: '#8A8FB9',
                  mb: 1,
                  '&:hover': { color: '#FB2E86' }
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;