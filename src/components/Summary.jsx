import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Summary = () => {
  return (
    <Box>
        <Typography variant="h2" component="h2" gutterBottom>
            Professional Summary
        </Typography>
        <Card raised>
            <CardContent>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Project Manager with 9+ years of experience in B2B/B2C e-commerce, gamification
                    platforms, and enterprise IT solutions. Managed cross-functional teams (up to 15 people),
                    delivered projects valued at 15M+ PLN. Strong background in Agile/Scrum, stakeholder
                    communication, and AI tools (ChatGPT).
                </Typography>
            </CardContent>
        </Card>
    </Box>
  );
};

export default Summary;
