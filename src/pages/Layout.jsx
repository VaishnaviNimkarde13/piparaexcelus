import React from 'react';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto', // Centers the content
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;