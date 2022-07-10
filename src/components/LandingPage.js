import React, { useEffect, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import BgStars from './BgStars';
import LandingPageIntroAnimation from './LandingPageIntroAnimation';

//choose font
//fix header fade-out
//add images to Exoplanet intro layer
//make these a fixed position fade-in/out as user scrolls?
//clean up galaxy view
//have text fade-in as that window appears
//clean up buttons/change colors

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Parallax pages={9.25}>
        <ParallaxLayer
          id="heroContainer"
          factor={1.5}
          sticky={{ start: 0, end: 1.75 }}
        >
          {/* <div id="introLandingPageContainer"> */}
          {/* <section id="introLandingPage"></section> */}
          <LandingPageIntroAnimation />
          {/* </div> */}
        </ParallaxLayer>
        <ParallaxLayer
          className="background"
          offset={1.2}
          sticky={{ start: 1.3, end: 1.75 }}
          factor={1.5}
        ></ParallaxLayer>
        <ParallaxLayer offset={0}>
          <div id="introLandingPageContainer">
            <section id="introLandingPage">
              <h1>Proxima</h1>
              <h2>Start scrolling to explore...</h2>
            </section>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer className='voyagerSat'
          offset={0.75}
          speed={0.5}
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Voyager_spacecraft_model.png/1200px-Voyager_spacecraft_model.png")',
          }}
        ></ParallaxLayer> */}
        <ParallaxLayer
          className="earthSmall"
          offset={1}
          speed={0.5}
          // factor={2}
          // sticky={{ start: 2.5, end: 2 }}
          style={{
            backgroundImage:
              'url("https://d494u2iqg624y.cloudfront.net/picture_material_preview/2021/12/10/bff975b85a8d4f65b4904930e2fe30b3.png")',
            backgroundPositionX: '45%',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          className="moon"
          offset={1.1}
          speed={1}
          style={{
            backgroundImage:
              'url("https://d494u2iqg624y.cloudfront.net/picture_material_original/2021/12/15/d1a5227713c74d10bc2ef77c220e1c62.png")',
            backgroundPositionX: '25%',
            // backgroundSize: '75%'
          }}
        >
          <div className="centerText">
            <h2>
              Carl Sagan, while unveiling the image <i>Pale Blue Dot</i>, made
              by Voyager-1, said, “...That's here. That's home. That's us. On it
              everyone you love, everyone you know, everyone you ever heard of,
              every human being who ever was, lived out their lives..."
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.95} speed={0.5}>
          <h2 className="centerOffsetLeftText">
            "...The Earth is the only world known so far to harbor life. There
            is nowhere else, at least in the near future, to which our species
            could migrate. Visit, yes. Settle, not yet. Like it or not, for the
            moment the Earth is where we make our stand..."
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={0.75}
          factor={1.2}
          style={{
            backgroundImage:
              'url("https://c.tenor.com/KRIGLPCuG-4AAAAC/earth-planet.gif")',

            backgroundSize: '35%',
          }}
        >
          <h2 className="rightText">
            Over 30 years have passed since then. We've continued to learn about
            our own solar system: its planets, moons, asteroids, and more.
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          factor={8}
          style={{ zIndex: '-10' }}
          speed={0.5}
        >
          <BgStars />
        </ParallaxLayer>
        <ParallaxLayer
          className="background"
          offset={3}
          factor={8}
          style={{ zIndex: '-9' }}
        ></ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.2}>
          <h2 className="text">
            Eventually, humanity will begin settling in these places.
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.999} speed={0.35}>
          <h2 className="text">
            Our species will spread out futher than our Pale Blue Dot.
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.49}
          speed={0.75}
          style={{
            backgroundImage:
              'url("https://img1.cgtrader.com/items/2867081/b970c04482/large/mars-planet-with-8k-textures-3d-model-obj.jpg")',
            backgroundPositionX: '65%',
            zIndex: '-1',
            backgroundSize: '35%',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3.7}
          speed={2}
          style={{
            backgroundImage:
              'url("https://pluspng.com/img-png/planet-png-hd-mqo-class-planet-png-1024.png")',
            backgroundPositionX: '63%',
            zIndex: '-1',
            backgroundSize: '36%',
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={4.5} speed={2} factor={0.5}>
          <h2 className="rightText">But where else will we go?</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.3}
          speed={1}
          style={{
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2019/05/01/14/25/space-4171004_960_720.png")',
            backgroundPositionX: '50%',
            zIndex: '-1',
            backgroundSize: '45%',
          }}
        ></ParallaxLayer>
        <ParallaxLayer offset={5.1} speed={0.13}>
          <h2>
            <p className="centerText">
              For centuries, fictional depictions of planets orbiting other
              stars have fired our imagination. From the desert world of Arrakis
              in Dune to the lush jungles of Yoda's planet Dagobah in Star Wars,
              we humans have been fascinated with the idea of exotic, far-off
              worlds.
            </p>
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.79}
          speed={0.41}
          factor={.85}
          style={{
            backgroundImage:
              'url("https://www.seekpng.com/png/full/13-137266_singing-sand-dune-erg-sand.png")',
            backgroundPositionX: '50%',
            zIndex: '-1',
            backgroundSize: '100%',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={5.41}
          speed={0.22}
          style={{
            backgroundImage:
              'url("https://www.nicepng.com/png/full/1-15276_sun-png-clip-art-planet-sun-clipart.png")',
            backgroundPositionX: '50%',
            zIndex: '-2',
            backgroundSize: '18%',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={5.2}
          speed={0.1}
          style={{
            backgroundImage:
              'url("https://ewscripps.brightspotcdn.com/dims4/default/587b3dc/2147483647/strip/true/crop/1280x720+0+67/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fab%2Fff%2F89135384404dbb4f49ac6f1f0d72%2Fmicrosoftteams-image.png")',
            backgroundPositionX: '10%',
            zIndex: '-3',
            backgroundSize: '50%',
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={6.41}
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

            {/* <p className="landingTextFinal">
              For centuries, fictional depictions of planets orbiting other
              stars have fired our imagination. From the desert world of Arrakis
              in Dune to the lush jungles of Yoda's planet Dagobah in Star Wars,
              we humans have been fascinated with the idea of exotic, far-off
              worlds.
            </p> */}
            {/* <br></br> */}

            <p className="landingTextFinal">
              We now know that worlds beyond our solar system — known as
              exoplanets — do exist. In fact, there are a whole lot of them:
              Scientists have found over 5,000 exoplanets, and think that most
              stars have their own solar systems.
            </p>
            {/* <br></br> */}
            {/* <p className="landingTextFinal">
              Some exoplanets are surprisingly similar to fictional worlds we've
              imagined, while others have turned out to be more exotic than
              anything we could have dreamed.
            </p> */}
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.7}
          speed={1}
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/commons/6/60/Bringer_of_War_Planet.png")',
            backgroundPositionX: '7%',
            zIndex: '-3',
            backgroundSize: '25%',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={6.64}
          speed={0.75}
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Arcadian_Planet_Beta.png/640px-Arcadian_Planet_Beta.png")',
            backgroundPositionX: '48%',
            zIndex: '-3',
            backgroundSize: '25%',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={6.7}
          speed={1.2}
          style={{
            backgroundImage:
              'url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Gajillion_Islands_Planet.png/640px-Gajillion_Islands_Planet.png")',
            backgroundPositionX: '99%',
            zIndex: '-3',
            backgroundSize: '20%',
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={7} speed={1} factor={0.1}>
          <h2 className="text">
              Some exoplanets are surprisingly similar to fictional worlds we've
              imagined, while others have turned out to be more exotic than
              anything we could have dreamed.
 </h2>
        </ParallaxLayer>


        <ParallaxLayer offset={7.999} speed={2} factor={0.5}>
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
        <ParallaxLayer offset={8} speed={0.75}>
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
        </ParallaxLayer>

        {/* <div className="text"> */}
        {/* <ParallaxLayer offset={1} speed={0.75}>
            <h3 id="sL">"That's here... That's home... That's us..."</h3>
          </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1.01} speed={1}>
            <h3 id="sR">That's here. </h3>
          </ParallaxLayer>
          <ParallaxLayer offset={1.02} speed={1.5}>
            <h3 id='sLL'>That's home...</h3>
          </ParallaxLayer>
          <ParallaxLayer offset={1.04} speed={1.8}>
            <h3>That's us...."</h3>
          </ParallaxLayer>
          <ParallaxLayer offset={1.05} speed={2}>
            <h3>- Carl segan</h3>
          </ParallaxLayer> */}
        {/* </div> */}
      </Parallax>
    </div>
  );
};

export default LandingPage;
