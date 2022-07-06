import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';

import LandingPage from './LandingPage';
import App from './App';
import { SolarSystemView } from './components/SolarSystemView';
// import NotFoundPage from "./NotFoundPage";
import Test from './components/Test';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<SolarSystemView />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
