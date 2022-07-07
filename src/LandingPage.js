import React, { useEffect, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import LandingPageIntroAnimation from "./components/LandingPageIntroAnimation";

//fix header fade-out
//edit text
//add images to Parallax layer 4

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

  // function scrollHandler() {
  //   fadeOutOnScroll(header);
  // }
  //Header fade-out end

  const scrollHandler = () => {
    fadeOutOnScroll(header);
  }


  // window.addEventListener("scroll", scrollHandler);

  return (
    <div className="landingPage">
      <Parallax pages={7}>
        <ParallaxLayer>

          <div id="introLandingPageContainer" onScroll={scrollHandler}>
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
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <h2 className="centerText">
            Carl Sagan, when first discussing the ‘pale blue dot’ which we call
            home, said, “”.
          </h2>
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
            We have studied our own solar system; it's planets, moons, and
            resources. Humanity will eventually spread throughout it.
          </h2>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2}>
          <h2 className="rightText">But where else?</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.6}
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
        <ParallaxLayer offset={4.8} speed={0.5} factor={2.5}>
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
