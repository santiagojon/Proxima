// import '../Nav.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlanetsByName } from '../store/planetSearchBar';
import { useDispatch, useSelector } from 'react-redux';

const NavBar = () => {
  const [isActive, setActive] = useState('false');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const planets = useSelector((state) => state.planetSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleToggle = () => {
    setActive(!isActive);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    console.log(planets);
    setSearch(query);
    dispatch(getPlanetsByName(query));
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
          <form
            id="masthead-search"
            className={isActive ? null : 'is-active'}
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              name="s"
              aria-labelledby="search-label"
              placeholder="Search&hellip;"
              className="draw"
              value={search}
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">&rarr;</button>
          </form>
          <nav
            id="site-nav"
            className={isActive ? null : 'is-active'}
            role="navigation"
          >
            <div className="col">
              <h4>
                <Link
                  // className="site-nav"
                  style={{ textDecoration: 'none' }}
                  to="/"
                  // onClick={() => window.history.push('/')}
                >
                  Home Page
                </Link>
              </h4>
              <ul>
                <li>
                  <h4></h4>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Featured</h4>
              <ul>
                <li>
                  <Link
                    className="site-nav"
                    to="/home"
                    // onClick={() => window.location.reload()}
                  >
                    Our System
                  </Link>
                </li>
                <li>
                  <a href="/#milk">Milky Way</a>
                </li>
                <li>{/* <a href="#">Logistics Industry</a> */}</li>
                <li>{/* <a href="#">Blog</a> */}</li>
              </ul>
            </div>

            <div className="col">
              <h4>Planets by Type</h4>
              <ul>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/terrestrial"
                    onClick={() => window.history.push('/search/terrestrial')}
                  >
                    Terrestrial
                  </Link>
                </li>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/superearth"
                    onClick={() => window.history.push('/search/superearth')}
                  >
                    Super Earth
                  </Link>
                </li>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/neptuntunian"
                    onClick={() => window.history.push('/search/neptuntunian')}
                  >
                    Neptuntunian
                  </Link>
                </li>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/gasgiant"
                    onClick={() => window.history.push('/search/gasgiant')}
                  >
                    Gas Giant
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h4>Learn More</h4>
              <ul>
                <li>
                  <Link
                    className="site-nav"
                    to="/learnmore"
                    // onClick={() => window.location.reload()}
                  >
                    Info
                  </Link>
                </li>
                {/* <li><a href="#">Client Partners</a></li> */}
              </ul>
            </div>
            {/* <div className="col"> */}
            {/* <h4>{'         '}   Approach</h4> */}
            {/* <ul> */}
            {/* <li> */}
            {/* <a href="#">Digital Transformation</a> */}
            {/* </li> */}
            {/* <li> */}
            {/* <a href="#">Digital Readiness Tool</a> */}
            {/* </li> */}
            {/* <li> */}
            {/* <a href="#">Solution Partners</a> */}
            {/* </li> */}
            {/* </ul> */}
            {/* </div> */}
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
