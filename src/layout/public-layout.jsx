// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { Box } from '@mui/material';
// import withPublic from '../hoc/with-public';

// const PublicLayoutBase = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Outlet />
//     </Box>
//   );
// };

// const PublicLayout = withPublic(PublicLayoutBase);
// export default PublicLayout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import withPublic from '../hoc/with-public';
import BaseLayout from './baseLayout';

const PublicLayoutBase = () => {
  return (
    <BaseLayout>
      <Box>
        <Outlet />
      </Box>
    </BaseLayout>
  );
};

const PublicLayout = withPublic(PublicLayoutBase);
export default PublicLayout;