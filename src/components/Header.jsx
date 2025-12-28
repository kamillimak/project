import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar, Menu, MenuItem } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/photo.png';

const Header = () => {
    const [anchorElPrototypes, setAnchorElPrototypes] = useState(null);
    const [anchorElDesign, setAnchorElDesign] = useState(null);

    const handlePrototypesMenu = (event) => {
        setAnchorElPrototypes(event.currentTarget);
    };

    const handleDesignMenu = (event) => {
        setAnchorElDesign(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElPrototypes(null);
        setAnchorElDesign(null);
    };

    return (
        <AppBar position="sticky" color="background" elevation={1}>
            <Toolbar>
                <Avatar src={myPhoto} sx={{ mr: 2, width: 56, height: 56 }} />
                <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>
                    Kamil Mikołajczyk
                    <Typography variant="subtitle1" color="text.secondary">Project Manager</Typography>
                </Typography>
                <Box>
                    <Button component={Link} to="/changelog" sx={{ mr: 1 }}>
                        Changelog
                    </Button>
                    <Button component={Link} to="/projects" sx={{ mr: 1 }}>
                        Projects
                    </Button>
                    <Button
                        aria-controls="prototypes-menu"
                        aria-haspopup="true"
                        onClick={handlePrototypesMenu}
                        sx={{ mr: 1 }}
                    >
                        Prototypes
                    </Button>
                    <Menu
                        id="prototypes-menu"
                        anchorEl={anchorElPrototypes}
                        keepMounted
                        open={Boolean(anchorElPrototypes)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to="/prototypes/1" onClick={handleClose}>Prototype 1</MenuItem>
                        <MenuItem component={Link} to="/prototypes/2" onClick={handleClose}>Prototype 2</MenuItem>
                        <MenuItem component={Link} to="/prototypes/3" onClick={handleClose}>Prototype 3</MenuItem>
                    </Menu>
                    <Button
                        aria-controls="design-menu"
                        aria-haspopup="true"
                        onClick={handleDesignMenu}
                        sx={{ mr: 1 }}
                    >
                        Design
                    </Button>
                    <Menu
                        id="design-menu"
                        anchorEl={anchorElDesign}
                        keepMounted
                        open={Boolean(anchorElDesign)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to="/design/images" onClick={handleClose}>Images</MenuItem>
                        <MenuItem component={Link} to="/design/videos" onClick={handleClose}>Videos</MenuItem>
                    </Menu>
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
