import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmDetails from './pages/FilmDetails';
import People from './pages/People';
import PeopleDetails from './pages/PeopleDetails';
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";

const App = () => {
    return(
        <BrowserRouter basename='/studio-ghibli-routing'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}>Go Home</Route>
                <Route path="/films" element={<Films />}>View Films</Route>
                <Route path="/films/:filmid" element={<FilmDetails />} />
                <Route path="/people" element={<People />}>View People</Route>
                <Route path="/people/:personid" element={<PeopleDetails />} />
                <Route path="/vehicles" element={<Vehicles />}>View Vehicles</Route>
                <Route path="/vehicles/:vehicleid" element={<VehicleDetails />} />
                <Route path="*">404 Not Found</Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;