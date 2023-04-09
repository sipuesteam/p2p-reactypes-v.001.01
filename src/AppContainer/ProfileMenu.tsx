import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar, Link, MenuItem, Menu, Typography } from '@material-ui/core';
import { User } from './types';

interface ProfileMenuProps {
  user: User;
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
}));

function ProfileMenu({ user }: ProfileMenuProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Link color="inherit" component={RouterLink} onClick={handleOpen} to="#">
        <Box display="flex" alignItems="center">
          <Avatar className={classes.avatar} src={user.avatarUrl} alt="User Avatar" />
          <Typography variant="body1">{user.name}</Typography>
        </Box>
      </Link>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
