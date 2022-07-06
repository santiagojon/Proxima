import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';

import LandingPage from './LandingPage';
import App from './App';
import Test from './components/Test';
// import NotFoundPage from "./NotFoundPage";

const RouterTest = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<App />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default RouterTest;
