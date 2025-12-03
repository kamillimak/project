import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="sticky" color="background" elevation={1}>
      <Toolbar>
        <Avatar sx={{ mr: 2, width: 56, height: 56, bgcolor: 'primary.main' }}>KM</Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Kamil Mikołajczyk
          <Typography variant="subtitle1" color="text.secondary">Project Manager</Typography>
        </Typography>
        <Box>
            <Button startIcon={<Email />} href="mailto:mikolajczykamil@gmail.com" sx={{ mr: 1 }}>
                Email
            </Button>
            <Button startIcon={<Phone />} href="tel:+48577539333">
                Call
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
