import React from 'react';
import { Box as MuiBox } from '@material-ui/core';

const Box = ({ children, ...rest }) => {
  return (
    <MuiBox {...rest}>
      {children}
    </MuiBox>
  );
}

export default Box;
