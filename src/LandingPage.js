import React, { useEffect, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import LandingPageIntroAnimation from "./components/LandingPageIntroAnimation";

const LandingPage = () => {

  //Header fade-out
  const header = document.getElementById("introLandingPageContainer");
  function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }

    let distanceToTop =
      window.pageYOffset + element.getBoundingClientRect().top;
    console.log("DtT", distanceToTop);
    const elementHeight = element.offsetHeight;
    console.log("eHeight", elementHeight);
    const scrollTop = document.documentElement.scrollTop + 1;
    console.log("SCROLLTOP", scrollTop);

    let opacity = 1;
    console.log("opacity", opacity);

    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / (elementHeight / 2);
    }

    if (opacity >= 0) {
      element.style.opacity = opacity;
    }
  }

  function scrollHandler() {
    fadeOutOnScroll(header);
  }
  //Header fade-out end

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="landingPage">
      {window.addEventListener("scroll", scrollHandler)}

      <div id="introLandingPageContainer">
        <section id="introLandingPage">
          <h1>New Worlds</h1>
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
        <LandingPageIntroAnimation />
      </div>

      <section className="placeHolder3D"></section>

      <section className="placeHolder3D"></section>

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
