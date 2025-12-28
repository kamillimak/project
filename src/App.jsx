import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Changelog from './pages/Changelog';
import Projects from './pages/Projects';
import Prototypes from './pages/Prototypes';
import Prototype1 from './pages/Prototype1';
import Prototype2 from './pages/Prototype2';
import Prototype3 from './pages/Prototype3';
import Design from './pages/Design';
import Images from './pages/Images';
import Videos from './pages/Videos';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/changelog" element={<Changelog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/prototypes" element={<Prototypes />} />
                <Route path="/prototypes/1" element={<Prototype1 />} />
                <Route path="/prototypes/2" element={<Prototype2 />} />
                <Route path="/prototypes/3" element={<Prototype3 />} />
                <Route path="/design" element={<Design />} />
                <Route path="/design/images" element={<Images />} />
                <Route path="/design/videos" element={<Videos />} />
            </Routes>
        </>
    );
}

export default App;