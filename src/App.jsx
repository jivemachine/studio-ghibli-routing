import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import People from './pages/People';

const App = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>Go Home</Route>
                <Route path="/films" element={<Films />}>View Films</Route>
                <Route path="/films/:filmid" element={<FilmDetails />} />
                <Route path="/people" element={<People />}>View People</Route>
                <Route path="*">404 Not Found</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;