// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { Box, Container } from '@mui/material';
// import withAuth from '../hoc/with-auth';

// const AuthLayoutBase = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: '#F6F7FB'
//       }}
//     >
//       <Container maxWidth="sm">
//         <Box
//           sx={{
//             bgcolor: 'white',
//             borderRadius: 1,
//             p: 4,
//             boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)'
//           }}
//         >
//           <Outlet />
//         </Box>
//       </Container>
//     </Box>
//   );
// };


// const AuthLayout = withAuth(AuthLayoutBase);

// export default AuthLayout;
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