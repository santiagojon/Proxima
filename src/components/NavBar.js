// import '../Nav.css';

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getPlanetsByName } from "../store/planetSearchBar";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const [isActive, setActive] = useState("false");
  const [search, setSearch] = useState("");
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
    setSearch(query);
    dispatch(getPlanetsByName(query));
  };

  return (
    <div className="hero" id="pos">
      <header
        id="masthead"
        className={isActive ? null : "is-active"}
        role="banner"
      >
        <div className="container">
          <button
            className={
              isActive
                ? "hamburger hamburger--boring"
                : "is-active hamburger hamburger--boring"
            }
            type="button"
            onClick={handleToggle}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
            <span className="hamburger-label">Menu</span>
          </button>
          <form id="masthead-search" className={isActive ? null : "is-active"}>
            <input
              type="search"
              name="s"
              autoComplete="off"
              aria-labelledby="search-label"
              placeholder="Search&hellip;"
              className="draw"
              value={search}
              onChange={(e) => handleChange(e)}
            />
            <div className="results">
              {planets.map((planet) => (
                <p key={planet.id} className="list">
                  <Link
                    to={`/system/${planet.starName}`}
                    onClick={() =>
                      window.history.push(`/system/${planet.starName}`)
                    }
                  >
                    {planet.planetName}
                  </Link>
                </p>
              ))}
            </div>
            <button type="submit">&rarr;</button>
          </form>
          <nav
            id="site-nav"
            className={isActive ? null : "is-active"}
            role="navigation"
          >
            <div className="col">
              <h4>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/"
                  onClick={() => window.history.push("/")}
                >
                  Home
                </Link>
              </h4>
            </div>
            <div className="col">
              <h4>Featured Systems</h4>
              <ul>
                <li>
                  <a href="/home">The Sun</a>
                </li>
                <li>
                  <a href="/system/Kepler-62">Kepler-62</a>
                </li>
                <li>
                  <a href="/system/Proxima%20Cen">Proxima Centauri</a>
                </li>
                <li>
                  <a href="/system/TRAPPIST-1">Trappist-1</a>
                </li>
                <li>
                  <a href="/system/WASP-12">WASP-12</a>
                </li>
                <li>
                  <a href="/system/tau%20Cet">Tau Ceti</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Planets by Type</h4>
              <ul>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/terrestrial"
                    onClick={() => window.history.push("/search/terrestrial")}
                  >
                    Terrestrial
                  </Link>
                </li>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/superearth"
                    onClick={() => window.history.push("/search/superearth")}
                  >
                    Super Earth
                  </Link>
                </li>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/neptuntunian"
                    onClick={() => window.history.push("/search/neptuntunian")}
                  >
                    Neptunian
                  </Link>
                </li>
                <li>
                  <Link
                    className="site-nav"
                    to="/search/gasgiant"
                    onClick={() => window.history.push("/search/gasgiant")}
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
                    onClick={() => window.location.push("/learnmore")}
                  >
                    More Info
                  </Link>
                </li>
                <li>
                  <Link
                    className="site-nav"
                    to="/dev"
                    onClick={() => window.location.push("/dev")}
                  >
                    Meet The Devs
                  </Link>
                </li>
                {/* <li><a href="#">Client Partners</a></li> */}
              </ul>
            </div>
            {/* <div>
              <ul className="social">
                <li>
                  <a href="">
                    <svg title="Facebook"></svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg title="Twitter"></svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg title="LinkedIn"></svg>
                  </a>
                </li>
              </ul>
            </div> */}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
