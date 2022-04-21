import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Awards from '../Awards/Awards';

function App() {
    const [active, setActive] = useState(null);

    return (
        <BrowserRouter>
            <Navbar active={active}/>
            <Routes>
                <Route path="/" element={<Home setActive={setActive}/>}/>
                <Route path="/experiences" element={<Experiences setActive={setActive}/>}/>
                <Route path="/projects" element={<Projects setActive={setActive}/>}/>
                <Route path="/awards" element={<Awards setActive={setActive}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;