import React from 'react';
import { Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import { Work as WorkIcon, Star as StarIcon } from '@mui/icons-material';

const experienceData = [
    {
      date: "Mar 2024 - Present",
      title: "IT Project Manager - e-commerce",
      company: "Axabee Sp. z o.o.",
      description: [
        "Defined and executed development roadmap for Seeplaces.com platform",
        "Managed sprint planning, backlog prioritization, and daily Agile ceremonies",
        "Coordinated development, UX/UI, and QA teams",
      ],
      achievements: [
        "Doubled the number of active travel offers on the Seeplaces.com platform from 1,500 to 3,000",
        "Contributed to a 30% year-over-year increase in sales through product improvements and partner integrations"
      ]
    },
    {
      date: "Jul 2022 - Mar 2024",
      title: "Project Manager",
      company: "MS POS Poland Sp. z o.o.",
      description: [
        "Managed international IT projects in UK, AU, DE, IT",
        "Managing the project in line with the project's scope, schedule, and budget",
        "Monitoring and controlling project activities",
      ],
      achievements: [
        "Reduced WIP from 3000h to 1000h in 4 months",
        "Automated Jira workflows, increasing ticket handling efficiency by 15%"
      ]
    },
    {
      date: "Sep 2017 - Jul 2023",
      title: "Project Manager // Product Owner",
      company: "FUTURE IT Sp. z o. o.",
      description: [
        "Coordination and management of project teams (up to 15 people)",
        "Designed and managed development of a gamification system",
      ],
      achievements: [
        "Implemented reusable architecture, saving 28% dev time",
        "Automated employee knowledge validation, saving 240h/month",
        "Raised average knowledge level to 98.5%"
      ]
    },
    {
      date: "Sep 2015 - Sep 2017",
      title: "Project Manager",
      company: "X-Coding IT Studio",
      description: [
        "Customer acquisition and project management",
        "Coordinating the implementation process of projects on the Magento platform",
      ],
      achievements: [
        "Managed Magento e-commerce projects and client onboarding",
        "Increased company revenue by 1.5M PLN",
      ]
    }
  ];

const Experience = () => {
    return (
        <Box>
            <Typography variant="h2" component="h2" gutterBottom>
                Experience
            </Typography>
            <Timeline position="alternate">
                {experienceData.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {item.date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary">
                                <WorkIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {item.title}
                            </Typography>
                            <Typography>{item.company}</Typography>
                            <ul>
                                {item.description.map((point, i) => <li key={i}><Typography variant="body2">{point}</Typography></li>)}
                            </ul>
                            <Typography variant="subtitle1" sx={{mt: 1, fontWeight: 'bold'}}>Achievements:</Typography>
                            <ul>
                                {item.achievements.map((point, i) => <li key={i}><Typography variant="body2">{point}</Typography></li>)}
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
};

export default Experience;
