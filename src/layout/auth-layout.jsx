
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import withAuth from '../hoc/with-auth';
import BaseLayout from './baseLayout';

const AuthLayoutBase = () => {
  return (
    <BaseLayout>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 8 }}>
        <Outlet />
      </Box>
    </BaseLayout>
  );
};

const AuthLayout = withAuth(AuthLayoutBase);
export default AuthLayout;