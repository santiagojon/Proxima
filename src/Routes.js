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
// import NavBar from './components/NavBar';
import SearchType from './components/Search';

// import NotFoundPage from "./NotFoundPage";
// import Test from './components/Test';
// import { TestCanvas } from './components/TestCanvas';
import NavBar from './components/NavBar';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchType />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<SolarSystemView />} />
        <Route path="/learnMore" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
