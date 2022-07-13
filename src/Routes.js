import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import App from './App';
import { SolarSystemView } from './components/SolarSystemView';
import InfoPage from './components/InfoPage';
import NavBar from './components/NavBar';

// import NotFoundPage from "./NotFoundPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NavBar />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<SolarSystemView />} />
        <Route path="/learnMore" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
