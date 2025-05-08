import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {IMAGES} from '../../assets/index';

const ErrorPage = () => {

    console.log("ErrorPage");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: '#F6F5FF',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 8
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#151875',
              fontWeight: 700,
              mb: 1
            }}
          >
            404 Not Found
          </Typography>

          <Typography
            sx={{
              color: '#8D92A7',
              mb: 4
            }}
          >
            Home / Pages / 404 Not Found
          </Typography>

          <Box
            component="img"
           src={IMAGES.error}
            alt="404 Error Illustration"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              mb: 4
            }}
          />

          <Typography
            sx={{
              color: '#8D92A7',
              mb: 3
            }}
          >
            oops! The page you requested was not found!
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
            Back To Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorPage;
