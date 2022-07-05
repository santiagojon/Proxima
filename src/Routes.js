import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from "./LandingPage";
import App from "./App";
// import NotFoundPage from "./NotFoundPage";

const RouterTest = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<App />} />
      </Routes>
    </Router>
  );
};

export default RouterTest;
