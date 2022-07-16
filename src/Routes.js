import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import App from './App';
import { SolarSystemView } from './components/SolarSystemView';
import InfoPage from './components/InfoPage';
import NavBar from './components/NavBar';
import SearchType from "./components/Search";
import SystemFromSearch from "./components/SystemFromSearch";
import PageNotFound from "./components/PageNotFound";



// import NotFoundPage from "./NotFoundPage";
// import Test from './components/Test';
// import { TestCanvas } from './components/TestCanvas';
// import NavBar from './components/NavBar';

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/system/:starName" element={<SystemFromSearch />} />
        <Route path="/search/:type" element={<SearchType />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<SolarSystemView />} />
        <Route path="/learnMore" element={<InfoPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
