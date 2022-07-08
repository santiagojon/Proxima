import React, { useEffect, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';

// import {
//   Canvas,
//   useThree,
//   useLoader,
//   extend,
//   useFrame,
// } from "@react-three/fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { Stars } from "@react-three/drei";
// import * as THREE from "three";

// import { createPlanet } from "./util/PlanetCreator";

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.minDistance = 3;
//     controls.maxDistance = 20;
//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

// function Scene() {
//   return (
//     <>
//       <CameraController />
//       <Stars
//         radius={100}
//         depth={50}
//         count={5000}
//         factor={4}
//         saturation={0}
//         fade
//         speed={1}
//       />
//       <ambientLight intensity={0.2} />
//       <pointLight position={[10, 1, 1]} />
//       {createPlanet(
//         0.5,
//         [1, 0.34, 0.17],
//         [1, 0.34, 0.17],
//         [0, 0, 8],
//         "mars.jpg"
//       )}
//     </>
//   );
// }

const LandingPage = () => {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
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
          backgroundRepeat: 'no-repeat',
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

      {/* <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas> */}

      <section className="placeHolder3D"></section>

      <section className="placeHolder3D"></section>

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
          <h3 id="milkyWayCTALandingPage">Select a star system to begin</h3>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
