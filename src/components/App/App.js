import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

function App() {
    const [active, setActive] = useState(null);

    return (
        <BrowserRouter>
            <Navbar active={active}/>
            <Routes>
                <Route path="/" element={<Home setActive={setActive}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;