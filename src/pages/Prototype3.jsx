import React from 'react';
import { Container, Typography, Box, Grid, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { FaFacebookF, FaBehance } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import myPhoto from '../assets/photo.png';

const Prototype3 = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container>
                {/* Left Column */}
                <Grid item xs={12} md={4} sx={{ background: '#222', color: 'white', p: 4 }}>
                    <Avatar
                        alt="Kamil Mikołajczyk"
                        src={myPhoto}
                        sx={{ width: 150, height: 150, mb: 2, border: '4px solid white' }}
                    />
                    <Typography variant="h5" component="h2" gutterBottom>
                        Contacts
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}><Phone /></ListItemIcon>
                            <ListItemText primary="+48 577 845 827" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}><Email /></ListItemIcon>
                            <ListItemText primary="vitaliy@dark-agency.com" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}><FaFacebookF /></ListItemIcon>
                            <ListItemText primary="fb.com/design.kolomiets" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}><FaBehance /></ListItemIcon>
                            <ListItemText primary="behance.net/kolomiets" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}><LocationOn /></ListItemIcon>
                            <ListItemText primary="Warszawa" />
                        </ListItem>
                    </List>
                    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
                        Technical Skills
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sx={{ textAlign: 'center' }}>
                            <SiAdobephotoshop size={40} />
                            <Typography variant="body2">Photoshop</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'center' }}>
                            <SiAdobeillustrator size={40} />
                            <Typography variant="body2">Illustrator</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={8} sx={{ p: 4 }}>
                    <Box
                        sx={{
                            backgroundImage: 'url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            p: 4,
                            color: 'white',
                            mb: 4,
                        }}
                    >
                        <Typography variant="h3" component="h1">
                            Vitaliy Kolomiets
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Web Designer
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5" component="h3" gutterBottom>
                            Education
                        </Typography>
                        <Typography variant="body1">
                            09/2009-07/2014, Kirovograd National Technical University, Ukraine
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Masters degree in Systems Engineering
                        </Typography>

                        <Typography variant="h5" component="h3" gutterBottom>
                            Languages
                        </Typography>
                        <List dense>
                            <ListItem>Russian - C1</ListItem>
                            <ListItem>Ukrainian - C1</ListItem>
                            <ListItem>English - A2</ListItem>
                        </List>

                        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3 }}>
                            Professional Skills
                        </Typography>
                        <List dense>
                            <ListItem>Able to organise own workload effectively and prioritise tasks.</ListItem>
                            <ListItem>Learning new technologies and keeping abreast of markets developments.</ListItem>
                            <ListItem>Having a passion for customer service & responding quickly to enquiries.</ListItem>
                            <ListItem>Can manage multiple projects in a fast-paced, deadline-driven environment.</ListItem>
                            <ListItem>Adaptable and able to quickly pick up new techniques.</ListItem>
                            <ListItem>Having creativity and imagination.</ListItem>
                        </List>

                        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3 }}>
                            Personal Skills
                        </Typography>
                        <List dense>
                            <ListItem>Passionate about doing a good job.</ListItem>
                            <ListItem>First rate interpersonal and communication skills, able to easily interact with fellow developers and customers alike.</ListItem>
                            <ListItem>Working to short lead times.</ListItem>
                            <ListItem>Confident, friendly and easy to get along with.</ListItem>
                        </List>

                        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 3 }}>
                            Work Experience
                        </Typography>
                        <Typography variant="body1">
                            01/2013-12/2014
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Direct-service - developing landing pages
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Web Designer
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Prototype3;
