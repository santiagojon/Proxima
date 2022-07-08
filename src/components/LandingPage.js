import React, { useEffect, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landingPage">
        <Parallax pages={5}>
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/originals/f9/a8/ed/f9a8ed161524ca06e0d5250fe2d33e51.gif")',
              backgroundSize: 'cover',
            }}
          >
            <div>
              <section id="introLandingPage">
                <h1>Proxima</h1>
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h2>
              </section>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.75}
            factor={1.5}
            style={{
              backgroundImage:
                'url("https://c.tenor.com/KRIGLPCuG-4AAAAC/earth-planet.gif")',
              backgroundSize: '50%',
            }}
          >
            <h2 className="rightText">“Look again at that dot..."</h2>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{
              backgroundImage:
                'url("https://universemagazine.com/wp-content/uploads/2018/02/JfTWcaPlXFw-1024x640.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="centerOffsetLeftText">That's here.</h2>
            <h2 className="centerOffsetRightText">That's home.</h2>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5} factor={2.5}>
            <div id="milkyWayLandingPageContainer">
              <section id="milkyWayLandingPage">
                <img
                  src="https://scitechdaily.com/images/Milky-Way-Galaxy-and-Central-Bar-Viewed-From-Above.jpg"
                  alt="milkway"
                />
                <div id="sunWrapper">
                  <Link to={'/home'}>
                    <button id="sun" className="galaxyButtons"></button>
                  </Link>
                  <span id="sunDescription">The Sun</span>
                </div>
              </section>
              <div id="milkyWayTextLandingPage">
                <h3 id="milkyWayTitleLandingPage">Milky Way</h3>
                <h3 id="milkyWayCTALandingPage">
                  Select a star system to begin
                </h3>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.9}></ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default LandingPage;
