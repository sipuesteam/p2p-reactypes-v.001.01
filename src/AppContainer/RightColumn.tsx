import React from 'react';
import { Box } from '@material-ui/core';

const RightColumn = ({ children }) => {
  return (
    <Box component="aside" p={2}>
      {children}
    </Box>
  );
}

export default RightColumn;
