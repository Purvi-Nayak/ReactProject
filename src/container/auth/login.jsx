
//this is username and Password for Login
//  "username": "johnd",
    // "password": "m38rmF$",
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Alert
} from '@mui/material';
import { api } from '../../api/client';
import { loginStart, loginSuccess, loginFailure } from '../../redux/slices/Auth.slice';
import { URLS } from '../../constant/url';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');
    dispatch(loginStart());

    try {
      const response = await api.AUTH.login({
        username: formData.username,
        password: formData.password
      });

      // Handle successful login
      dispatch(loginSuccess(response));
      setSuccessMessage('Login successful!');
      
      // Redirect after successful login
      setTimeout(() => {
        navigate(URLS.Home);
      }, 1500);

    } catch (err) {
      dispatch(loginFailure(err.message));
      setError(err.message || 'Login failed. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
          Login
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Please login using account detail below.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          {successMessage && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMessage}
            </Alert>
          )}
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 1 }}
          />

          <Link
            href="#"
            variant="body2"
            sx={{
              display: 'block',
              textAlign: 'left',
              mb: 2,
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.main',
              }
            }}
          >
            Forgot your password?
          </Link>

          <Button
            disabled={!formData.username || !formData.password}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 3,
              bgcolor: '#FB2E86',
              '&:hover': {
                bgcolor: '#e91e63'
              },
              textTransform: 'none',
              py: 1.5
            }}
          >
            Sign In
          </Button>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            Don't have an Account?
            <Link
              href="#"
              sx={{
                ml: 0.5,
                color: '#FB2E86',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Create account
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;