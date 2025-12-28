import React from 'react';
import { Container, Typography } from '@mui/material';

const Projects = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1">
        Here are some of my projects on GitHub.
      </Typography>
    </Container>
  );
};

export default Projects;
