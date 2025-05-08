// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { Box } from '@mui/material';
// import withPrivate from '../hoc/with-private';
// import Header from '../container/Header';
// import Footer from '../container/footer';

// const PrivateLayoutBase = () => {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
//         <Outlet />
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// const PrivateLayout = withPrivate(PrivateLayoutBase);

// export default PrivateLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import withPrivate from '../hoc/with-private';
// import BaseLayout from './baseLayout';

const PrivateLayoutBase = () => {
  return (
    // <BaseLayout>
      <Box sx={{ py: 3 }}>
        <Outlet />
      </Box>
    // </BaseLayout>
  );
};

const PrivateLayout = withPrivate(PrivateLayoutBase);
export default PrivateLayout;