import React, { useEffect, Suspense, useRef } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div className="landingPage">
      <div
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/originals/f9/a8/ed/f9a8ed161524ca06e0d5250fe2d33e51.gif")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <section id="introLandingPage">
          <h1>Proxima</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h2>
        </section>
      </div>

      <section className="SegmentHolder">
        <div className="container grid grid--2-cols">
          <div className="text-box">
            {/* EARTH SECTION */}

            <h3 className="container-heading">Earth</h3>
            <p className="container-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              labore fuga blanditiis minima, saepe error id inventore nisi unde
              quo fugit facere tempora, eligendi animi illo! Omnis ad aliquam
              magni.
            </p>
          </div>
          <div className="step-image-box">
            <img
              src="earthProxima.jpg"
              className="step-image"
              alt="earth planet"
            />
          </div>

          {/* MOON SECTION */}

          <div className="step-image-box">
            <img src="moonProxima.jpg" className="step-image" alt="moon" />
          </div>
          <div className="text-box">
            <h3 className="container-heading">Moon</h3>
            <p className="container-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              labore fuga blanditiis minima, saepe error id inventore nisi unde
              quo fugit facere tempora, eligendi animi illo! Omnis ad aliquam
              magni.
            </p>
          </div>

          {/* MARS SECTION */}

          <div className="text-box">
            <h3 className="container-heading">Mars</h3>
            <p className="container-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              labore fuga blanditiis minima, saepe error id inventore nisi unde
              quo fugit facere tempora, eligendi animi illo! Omnis ad aliquam
              magni.
            </p>
          </div>
          <div className="step-image-box">
            <img
              src="earthProxima.jpg"
              className="step-image"
              alt="mars planet "
            />
          </div>
        </div>
      </section>

      <div id="milkyWayLandingPageContainer">
        <section id="milkyWayLandingPage">
          <img
            src="https://scitechdaily.com/images/Milky-Way-Galaxy-and-Central-Bar-Viewed-From-Above.jpg"
            alt="milkway"
          />
          <div id="sunWrapper">
            <Link to={"/home"}>
              <button id="sun" className="galaxyButtons"></button>
            </Link>
            <span id="sunDescription">The Sun</span>
          </div>
        </section>
        <div id="milkyWayTextLandingPage">
          <h3 id="milkyWayTitleLandingPage">Milky Way</h3>
          <h3 id="milkyWayCTALandingPage">Select a star system to begin</h3>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
