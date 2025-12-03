import React from 'react';
import { Container, Box } from '@mui/material';
import { motion } from 'framer-motion';

// Import components
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Hobby from './components/Hobby';

const App = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const Section = ({ children }) => (
        <Box my={4}>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {children}
            </motion.div>
        </Box>
    );


    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <main>
                    <Section><Summary /></Section>
                    <Section><Skills /></Section>
                    <Section><Experience /></Section>
                    <Section><Education /></Section>
                    <Section><Hobby /></Section>
                </main>
            </Container>
        </>
    );
}

export default App;