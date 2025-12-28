import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const sections = [
    {
        title: 'Hello!',
        content: 'I\'m Kamil, a creative developer and project manager.',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    {
        title: 'Skills',
        content: 'React, Material-UI, Framer Motion, and more.',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    {
        title: 'Experience',
        content: 'I have worked on various projects, from small websites to large-scale applications.',
        background: 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)',
    },
];

const FullScreenSection = ({ title, content, background }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const styles = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        config: { mass: 1, tension: 120, friction: 14 },
    });

    return (
        <Box
            ref={ref}
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: background,
                color: 'white',
                textAlign: 'center',
            }}
        >
            <animated.div style={styles}>
                <Typography variant="h2" component="h1" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h5" component="p">
                    {content}
                </Typography>
            </animated.div>
        </Box>
    );
};

const Prototype2 = () => {
    return (
        <div>
            {sections.map((section, index) => (
                <FullScreenSection
                    key={index}
                    title={section.title}
                    content={section.content}
                    background={section.background}
                />
            ))}
        </div>
    );
};

export default Prototype2;
