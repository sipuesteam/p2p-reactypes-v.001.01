import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Place2Pay
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
