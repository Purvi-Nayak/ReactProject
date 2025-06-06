
import React from 'react';
import { Box, Container, Typography, Button,Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {IMAGES} from '../../assets/index';



const OrderComplete = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      bgcolor: '#F6F7FB', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="md">
        <Box sx={{ 
          bgcolor: 'white',
          borderRadius: 2,
          p: 6,
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          {/* Navigation Path */}
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            justifyContent: 'center',
            mb: 6,
            color: '#9096B2'
          }}>
             <Link component="button" onClick={() => navigate('/')} sx={{ color: '#151875', textDecoration: 'none' }}>
            Home
          </Link>
            <Typography>/</Typography>
              <Link component="button" onClick={() => navigate('/pages')} sx={{ color: '#151875', textDecoration: 'none' }}>
                       Pages
                     </Link>
            <Typography>/</Typography>
            <Typography sx={{ color: '#FB2E86' }}>Order Completed</Typography>
          </Box>

          {/* Icons Container */}
          <Box sx={{

alignItems: 'center',
// Changed to space-between
  width: '100%',
  maxWidth: '500px', // Added max width for better control
  mx: 'auto', // Center the container

}}>
  {/* Clock on left */}
 
  
  {/* Right arrow in center */}
  {/* <Box component="img"
    src={IMAGES.Right}
    alt="Right Arrow"
    sx={{ 
      width: 48,
      height: 39,
      flexShrink: 0
    }}
  /> */}
  <Box component="img"

    src={IMAGES.Right}
    alt="Clock"
    sx={{
      width: 94,
      height: 94,
      flexShrink: 0
    }}
  />
  {/* Book on right */}
  {/* <Box component="img"
    src={IMAGES.book}
    alt="Book"
    sx={{ 
      width: 62,
      height: 70,
      flexShrink: 0
    }}
  /> */}
</Box>

          {/* <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          mb: 4
        }}>
          <Box component="img" 
            src={ClockSvg} 
            alt="Clock"
            sx={{ width: 94, height: 94 }}
          />
          <Box component="img" 
            src={RightSvg} 
            alt="Right Arrow"
            sx={{ width: 48, height: 39 }}
          />
          <Box component="img" 
            src={BookSvg} 
            alt="Book"
            sx={{ width: 62, height: 70 }}
          />
        </Box> */}

          {/* Completion Message */}
          <Typography variant="h4" sx={{ 
            color: '#151875',
            fontWeight: 700,
            mb: 3
          }}>
            Your Order Is Completed!
          </Typography>
   
          <Typography sx={{ 
            color: '#8D92A7',
            maxWidth: 600,
            mx: 'auto',
            mb: 4,
            lineHeight: 1.8
          }}>
            Thank you for your order! Your order is being processed and will be completed within 3-6 
            hours. You will receive an email confirmation when your order is completed.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate('/')}
            sx={{
              bgcolor: '#FF1788',
              color: 'white',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: '#e91e63'
              },
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OrderComplete;