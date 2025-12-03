import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { School } from '@mui/icons-material';

const educationData = [
    {
        school: "Wrocław University of Economics",
        degree: "Postgraduate studies: Project Manager",
        years: "2014 - 2015"
    },
    {
        school: "Wrocław University of Economics",
        degree: "Master of Management",
        years: "2011 - 2013"
    }
];

const Education = () => {
    return (
        <Box>
            <Typography variant="h2" component="h2" gutterBottom>
                Education
            </Typography>
            <Grid container spacing={3}>
                {educationData.map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <School sx={{ fontSize: 40, mr: 2 }} color="primary" />
                                    <Box>
                                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                                            {item.school}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {item.degree}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {item.years}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Education;
