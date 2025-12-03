import React from 'react';
import { Card, CardContent, Typography, Grid, Chip, Box } from '@mui/material';
import { FaProjectDiagram, FaUsers, FaChartLine, FaCode, FaLanguage, FaLightbulb } from 'react-icons/fa';

const skillsData = [
    { 
        category: "Project Management Tools", 
        list: ["Jira", "Confluence", "Redmine", "MS Office", "Google Workspace"],
        icon: <FaProjectDiagram size="2em" color="#1976d2" />
    },
    { 
        category: "Methodologies", 
        list: ["Agile", "Scrum", "Kanban", "Waterfall"],
        icon: <FaUsers size="2em" color="#1976d2" />
    },
    { 
        category: "Technologies", 
        list: ["Magento", "Dynamics 365", "Comarch ERP", "PWA", "BLE", "App Clips"],
        icon: <FaCode size="2em" color="#1976d2" />
    },
    { 
        category: "Analytics & Optimization", 
        list: ["Google Analytics", "GTM", "GA4", "A/B Testing"],
        icon: <FaChartLine size="2em" color="#1976d2" />
    },
    { 
        category: "Languages", 
        list: ["English (C1)", "Polish (native)"],
        icon: <FaLanguage size="2em" color="#1976d2" />
    },
    { 
        category: "Soft Skills", 
        list: ["Leadership", "Problem-solving", "Team motivation", "Communication", "Risk management"],
        icon: <FaLightbulb size="2em" color="#1976d2" />
    }
];

const Skills = () => {
    return (
        <Box>
            <Typography variant="h2" component="h2" gutterBottom>
                Core Skills
            </Typography>
            <Grid container spacing={3}>
                {skillsData.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    {skill.icon}
                                    <Typography variant="h6" component="div" sx={{ ml: 2, fontWeight: 'bold' }}>
                                        {skill.category}
                                    </Typography>
                                </Box>
                                <Box>
                                    {skill.list.map((item, i) => (
                                        <Chip label={item} key={i} sx={{ m: 0.5 }} />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
