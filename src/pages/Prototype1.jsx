import React from 'react';
import { Container, Grid, Paper, List, ListItem, ListItemText, Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

// Import components
import Summary from '../components/Summary';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Hobby from '../components/Hobby';

const sections = [
    { id: 'summary', title: 'Summary', component: <Summary /> },
    { id: 'skills', title: 'Skills', component: <Skills /> },
    { id: 'experience', title: 'Experience', component: <Experience /> },
    { id: 'education', title: 'Education', component: <Education /> },
    { id: 'hobby', title: 'Hobby', component: <Hobby /> },
];

const Prototype1 = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={3} sx={{ position: 'sticky', top: 80, p: 2 }}>
                        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                            Sections
                        </Typography>
                        <List component="nav">
                            {sections.map((section) => (
                                <ListItem
                                    key={section.id}
                                    button
                                    component={Link}
                                    to={section.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="Mui-selected"
                                >
                                    <ListItemText primary={section.title} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={9}>
                    <main>
                        {sections.map((section) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <Card sx={{ mb: 4 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h3" gutterBottom>
                                            {section.title}
                                        </Typography>
                                        {section.component}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </main>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Prototype1;
