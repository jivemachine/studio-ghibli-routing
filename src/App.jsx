import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/">Go Home</Route>
                <Route path="/films">View Films</Route>
                <Route path="/people">View People</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;