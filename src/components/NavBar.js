
// import '../Nav.css';

import React, { useState } from 'react';

const NavBar = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="hero" id="pos">
      <header
        id="masthead"
        className={isActive ? null : 'is-active'}
        role="banner"
      >
        <div className="container">
          <button
            className={
              isActive
                ? 'hamburger hamburger--boring'
                : 'is-active hamburger hamburger--boring'
            }
            type="button"
            onClick={handleToggle}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
            <span className="hamburger-label">Menu</span>
          </button>
          <form id="masthead-search" className={isActive ? null : 'is-active'}>
            <input
              type="search"
              name="s"
              aria-labelledby="search-label"
              placeholder="Search&hellip;"
              className="draw"
            />
            <button type="submit">&rarr;</button>
          </form>
          <nav
            id="site-nav"
            className={isActive ? null : 'is-active'}
            role="navigation"
          >
            <div className="col">
              <h4>Expertise</h4>
              <ul>
                <li>
                  <a href="#">Insurance Industry</a>
                </li>
                <li>
                  <a href="#">Retail Industry</a>
                </li>
                <li>
                  <a href="#">Logistics Industry</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Results</h4>
              <ul>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Client Partners</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Our Culture</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Join Us</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Approach</h4>
              <ul>
                <li>
                  <a href="#">Digital Transformation</a>
                </li>
                <li>
                  <a href="#">Digital Readiness Tool</a>
                </li>
                <li>
                  <a href="#">Solution Partners</a>
                </li>
              </ul>
            </div>
            {/* <div className="col">
            <ul className="social">
              <li><a href=""><svg title="Facebook"></svg></a></li>
              <li><a href=""><svg title="Twitter"></svg></a></li>
              <li><a href=""><svg title="LinkedIn"></svg></a></li>
            </ul>
          </div> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
