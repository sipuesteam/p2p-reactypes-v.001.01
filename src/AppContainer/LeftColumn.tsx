import React from 'react';
import { Box } from '@material-ui/core';

const LeftColumn = ({ children }) => {
  return (
    <Box component="aside" p={2}>
      {children}
    </Box>
  );
}

export default LeftColumn;
