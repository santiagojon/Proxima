import React, { useEffect, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


import LandingPageIntroAnimation from "./components/LandingPageIntroAnimation";

//choose font
//fix header fade-out
//add images to Exoplanet intro layer 
  //make these a fixed position fade-in/out as user scrolls?
//clean up galaxy view
  //have text fade-in as that window appears
  //clean up buttons/change colors

const LandingPage = () => {
  //Header fade-out
  const header = document.getElementById("introLandingPageContainer");

  function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }

    let distanceToTop =
      window.scrollY + element.getBoundingClientRect().top;
    console.log("DtT", distanceToTop);
    const elementHeight = element.offsetHeight;
    console.log("eHeight", elementHeight);
    const scrollTop = document.documentElement.scrollTop + 1;
    console.log("SCROLLTOP", scrollTop);


    let opacity = 1;
    console.log("opacity", opacity);

    if (scrollTop > distanceToTop) {
      // if (window.scrollY > 400) {
      opacity = 1 - (scrollTop - distanceToTop) / (elementHeight / 2);
    }

    if (opacity >= 0) {
      element.style.opacity = opacity;
    }
  }

  useEffect(() => {
      function scrollHandler() {
        fadeOutOnScroll(header);
        console.log('window.scrollY', window.scrollY);

  }
      window.addEventListener("scroll", scrollHandler);
       return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
 }, []);
  

  //Header fade-out end

  return (
    <div className="landingPage">
      <Parallax pages={7}>
        <ParallaxLayer id="heroContainer">
          <div id="introLandingPageContainer">
            <section id="introLandingPage">
              <h1>New Worlds</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h2>
            </section>
            <LandingPageIntroAnimation />
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
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div className="centerText">
            <h2>
              Carl Sagan, while unveiling the image <i>Pale Blue Dot</i>, made by Voyager-1, said,
              “...That's here. That's home. That's us. On
              it everyone you love, everyone you know, everyone you ever heard
              of, every human being who ever was, lived out their lives..."
            </h2>
            <h2>
              "...The Earth is the only world known so far to harbor life. There
              is nowhere else, at least in the near future, to which our species
              could migrate. Visit, yes. Settle, not yet. Like it or not, for
              the moment the Earth is where we make our stand..."
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.75}
          factor={1.5}
          style={{
            backgroundImage:
              'url("https://c.tenor.com/KRIGLPCuG-4AAAAC/earth-planet.gif")',
            backgroundSize: "50%",
          }}
        >
          <h2 className="rightText">
            Over 30 years have passed since then. We've continued to learn about our own solar system: its planets, moons, asteroids, and more. Eventually, humanity will begin settling in these places. Our species will spread out futher than our Pale Blue Dot.
          </h2>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2}>
          <h2 className="rightText">But where else will we go?</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.5}
          speed={1}
          // style={{
          //   backgroundImage:
          //     'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71bdf86-58c5-4485-9259-f07a5b859d9c/ddqqwri-02f1cc19-a279-4f07-b2d5-fff2128441b4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWJkZjg2LTU4YzUtNDQ4NS05MjU5LWYwN2E1Yjg1OWQ5Y1wvZGRxcXdyaS0wMmYxY2MxOS1hMjc5LTRmMDctYjJkNS1mZmYyMTI4NDQxYjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QRxyKp3rz3LKUdyN0VjCDHSttCK1RopEL-LcP48JJuw")',
          //   backgroundSize: "50%",
          // }}
        >
          <h2 className="centerText">
            {/* <img
              id="arrakis"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71bdf86-58c5-4485-9259-f07a5b859d9c/ddqqwri-02f1cc19-a279-4f07-b2d5-fff2128441b4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWJkZjg2LTU4YzUtNDQ4NS05MjU5LWYwN2E1Yjg1OWQ5Y1wvZGRxcXdyaS0wMmYxY2MxOS1hMjc5LTRmMDctYjJkNS1mZmYyMTI4NDQxYjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QRxyKp3rz3LKUdyN0VjCDHSttCK1RopEL-LcP48JJuw"
              alt="fictional planet Arrakis. Orange in color"
              style={{ backgroundSize: "50%" }}
            /> */}


            {/* It would  be nice to have each of these paragraphs fade-in/out (in a fixed position) while the user  
            scrolls. Its a better build up to the final question/galaxy view */}

            <p className="landingTextFinal">
              For centuries, fictional depictions of planets orbiting other
              stars have fired our imagination. From the desert world of Arrakis
              in Dune to the lush jungles of Yoda's planet Dagobah in Star Wars,
              we humans have been fascinated with the idea of exotic, far-off
              worlds.
            </p>
            <br></br>

            <p className="landingTextFinal">
              We now know that worlds beyond our solar system — known as
              exoplanets — do exist. In fact, there are a whole lot of them:
              Scientists have found over 5,000 exoplanets, and think that most
              stars have their own solar systems.
            </p>
            <br></br>
            <p className="landingTextFinal">
              Some exoplanets are surprisingly similar to fictional worlds we've
              imagined, while others have turned out to be more exotic than
              anything we could have dreamed.
            </p>
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={2} factor={0.5}>
          <h2 className="centerText">Where would you like to go first?</h2>
        </ParallaxLayer>
        {/* <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            backgroundImage:
              'url("https://universemagazine.com/wp-content/uploads/2018/02/JfTWcaPlXFw-1024x640.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="centerOffsetLeftText">That's here.</h2>
          <h2 className="centerOffsetRightText">That's home.</h2>
        </ParallaxLayer> */}
        <ParallaxLayer offset={4.8} speed={0.5}>
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
        </ParallaxLayer>
      </Parallax>
    </div>
  );

};

export default LandingPage;
