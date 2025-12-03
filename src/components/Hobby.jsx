import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SportsEsports, Gavel, Build } from '@mui/icons-material';

const hobbies = [
    { text: "Emerging technologies (AI, ChatGPT)", icon: <Build color="primary"/> },
    { text: "Team-based games (Call of Duty, FIFA)", icon: <SportsEsports color="primary"/> },
    { text: "Politics with a focus in decision-making processes", icon: <Gavel color="primary"/> }
];

const Hobby = () => {
    return (
        <Box>
            <Typography variant="h2" component="h2" gutterBottom>
                Hobbies
            </Typography>
            <Card>
                <CardContent>
                    <List>
                        {hobbies.map((hobby, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {hobby.icon}
                                </ListItemIcon>
                                <ListItemText primary={hobby.text} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Hobby;
