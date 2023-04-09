import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" align="center">
        © Place2Pay {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}

export default Footer;
