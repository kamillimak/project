import React from 'react';
import { Container, Typography } from '@mui/material';

const Changelog = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Changelog
      </Typography>
      <Typography variant="h6" component="h2">
        Version 1.0.0
      </Typography>
      <Typography variant="body1">
        - Initial release of the portfolio.
      </Typography>
    </Container>
  );
};

export default Changelog;
