import React from 'react';
import { Box } from '@material-ui/core';

const Body = ({ children }) => {
  return (
    <Box component="main" p={2}>
      {children}
    </Box>
  );
}

export default Body;
