import React from "react";

const InfoPage = () => {
  return (
    <div id="infoPageContainer">
      <h1 id="infoPageTitle">
        How Do We Discover <span>Exoplanets</span>?
      </h1>
      <div id="infoPageIntro">
        {/* <p id="infoPageSubtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exe
        </p> */}
        <img
          id="surveySatellite"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Transiting_Exoplanet_Survey_Satellite_artist_concept_%28black_background%29.png"
          alt="survey satellite"
        />
        <div id="infoPageContent">
          <ul id="toc">
            <span>Table of Contents</span>
            <a href="#toc1">
              <li>What is an exoplanet?</li>
            </a>
            <a href="#toc2">
              <li>How many exoplanets have been found?</li>
            </a>
            <a href="#toc3">
              <li>Habitable Zones</li>
            </a>
            <a href="#toc4">
              <li>Exoplanet Types</li>
            </a>
            <a href="#toc5">
              <li>Methods used for detecting exoplanets</li>
            </a>
            <a href="#toc6">
              <li>Future Exoplanet Missions</li>
            </a>
          </ul>

          <div className="infoPageContentCard">
            <h2 id="toc1">What is an exoplanet?</h2>
            <p>
              An exoplanet is any planetary body that is outside the solar
              system and orbits a star other than our Sun. Our closest neighbor
              is loocated in the star system Proxima Centauri, 4.25 light years
              away.
              <br></br>
              <br></br>
              <p>
                Exoplanets are difficult to detect as they are fainter than the
                stars they revolve around. The first documented evidence of an
                exoplanet occured in 1917 but was not recognized at the time.
                Our first confirmed detection came in 1992.
              </p>
              <br></br>
              <br></br>
              Most known exoplanets orbit stars similar to our Sun —the
              main-sequence stars of spectral categories F, G, or K.
              <br></br>
              <br></br>
              <i>
                Scientists say, “Some of these exoplanets are as (relatively)
                small as the moon, while others are as massive as Jupiter.
                Unlike Earth, most of the exoplanets are not tightly bound to
                stars, so they’re actually wandering through space or loosely
                orbiting between stars. We can estimate that the number of
                planets in our galaxy is more than a trillion.”
              </i>
            </p>
          </div>

          <div className="infoPageContentCard">
            <h2 id="toc2">How many exoplanets have been found?</h2>
            <p id="toc2Nums">
              As of July 1st, 2022, there are <span>5,108</span> confirmed
              exoplanets in <span>3,779 </span>
              planetary systems, with <span>826</span> systems having more than
              one planet.
            </p>
          </div>

          <div className="infoPageContentCard">
            <h2 id="toc3">Habitable Zones</h2>
            <p>
              The habitable zone, also known as the “Goldilocks Zone”, is a
              region that is neither extremely cold nor extremely hot. For a
              planet, the habitable zone is the distance from the nearby star
              that will allow liquid water to exist on its surface — as long as
              that planet has a suitable atmosphere. For larger, hotter stars,
              the zone is farther away; for smaller, cooler stars, it can be
              much closer.
              <br></br>
              <br></br>
              This region is ideal for supporting life. Of the over 5000
              discovered exoplanets, over 400 have been confirmed to exist in
              this region. One notable system is TRAPPIST-1, a red-dwarf star
              that is located approximately 40 light-years away from us and
              contains four planets in the “Goldilocks Zone.""
            </p>
          </div>

          <div className="infoPageContentCard">
            <h2 id="toc4">Exoplanet Types</h2>
            <p>
              <span>Gas giants</span> - large planets mostly composed of helium
              and/or hydrogen. These planets, like Jupiter and Saturn in our
              solar system, don’t have hard surfaces and instead have swirling
              gases above a solid core. Gas giant exoplanets can be much larger
              than Jupiter, and much closer to their stars than anything found
              in our solar system.
            </p>
            <p>
              <span>Super earths</span> - a class of planets unlike any in our
              solar system – are more massive than Earth yet lighter than ice
              giants like Neptune and Uranus, and can be made of gas, rock or a
              combination of both. They are between twice the size of Earth and
              up to 10 times its mass.
            </p>
            <p>
              <span>Neptunian</span> - These exoplanets are similar in size to
              Neptune or Uranus in our solar system. Neptunian planets typically
              have hydrogen and helium-dominated atmospheres with cores or rock
              and heavier metals.
            </p>
            <p>
              <span>Terrestrial</span> - In our solar system, Earth, Mars,
              Mercury and Venus are terrestrial, or rocky, planets. For planets
              outside our solar system, those between half of Earth’s size to
              twice its radius are considered terrestrial and others may be even
              smaller. Exoplanets twice the size of Earth and larger may be
              rocky as well, but those are considered super-Earths.
            </p>
          </div>

          <div className="infoPageContentCard">
            <h2 id="toc5">Methods used for detecting exoplanets</h2>
            <p>
              In the last few decades, researchers have discovered a plethora of
              exoplanetary systems. From the discovery of the first documented
              pulsar planets in 1992 to TOI-561b, one of the oldest rocky
              planets detected in 2021, the explored parameter space of
              exoplanet systems has been growing in leaps and bounds. Extrasolar
              planet detection technology encompasses many techniques like
              radial velocity, direct imaging, astrometry, transit event
              observation, and gravity microlensing. These methods have been
              widely used and are usually applied to different systems.
            </p>
            <br></br>
            <br></br>
            <div className="toc5methods">
              <h4>Radial Velocity or Doppler Spectroscopy</h4>
              <p>
                This is a highly popular and effective method that has been used
                to discover about a fifth of all known exoplanets. It is best
                suited for detecting planets with large masses in close orbits.
                The planet’s gravity causes the star to move slightly in a small
                circle or ellipse, commonly referred to as “wobble”, and the
                method depends on detecting the star’s movement instead of the
                planet itself. This wobble results in a Doppler shift and causes
                a change in the star’s normal light spectrum, which can be
                tracked with the help of extremely sensitive spectrographs. As
                the star moves around its center of mass, light from the star is
                blue-shifted when it approaches us and red-shifted when it moves
                away. Periodic repetition of such red and blue shifts is
                indicative of the presence of an orbiting planet, or a system of
                such planets. Slower rotation results in clearer spectral lines,
                making the method more effective for low-mass stars.
                <br></br>
                <br></br>
                Radial velocity can only provide a minimum estimate of the
                planet’s mass and is more likely to find planets like hot
                Jupiters which are not best suited for life. Distinguishing
                between the planet’s and the star’s spectral lines can result in
                better estimations of the actual mass of the planet, but this is
                only possible for relatively bright systems. The output from
                this method can be optimized by pairing it with the transit
                method to dodge false signals that are often produced in order
                to gain better estimates of the planet’s radius and mass.
                <br></br>
                <br></br>
                ESO’s La Silla Observatory located in Chile and the Keck
                Observatory in Hawaii are some of the many observatories that
                use high-accuracy spectrometers for hunting exoplanets.
              </p>
            </div>
            <div className="toc5methods">
              <h4>Direct Imaging</h4>
              <p>
                Direct imaging is a challenging method still in its infancy, but
                with tremendous potential due to its ability to rarely result in
                false positives. It uses infrared wavelengths to observe large
                orbits and massive exoplanets that do not transit in front of
                the star, making it complementary to the radial velocity method.
                Direct imaging involves taking images of exoplanets directly by
                blocking the radiation from the host star at infrared
                wavelengths, when the star is estimated to be only a million
                times brighter than the planet, compared to a billion times at
                other wavelengths. The brightness ratio between the planet and
                the host star is dependent on the size of the planet, the
                distance between the planet and the star, and the scattering
                characteristics of the planet’s surface.
                <br></br>
                <br></br>
                The glare of the star can be removed using coronagraphs which
                are placed inside telescopes to block light before it reaches
                the detector of the telescope. Starshades can also be used to
                prevent light from even entering the telescope. While direct
                imaging cannot measure the mass of planets, it can aid in
                answering questions about the potential habitability of a planet
                by analyzing factors like composition, surface temperature, and
                diameter using the spectrum obtained.
                <br></br>
                <br></br>
                About 100 planets have been discovered using this method,
                including the Fomalhaut system by the Hubble space telescope and
                the HR 8799 system by the Keck telescope in 2008.
              </p>
            </div>
            <div className="toc5methods">
              <h4>Astrometry</h4>
              <p>
                This is the oldest method used in the discovery of extrasolar
                planets and is highly sensitive. The wobble of stars is detected
                through changes in the star’s apparent position in the sky, as
                opposed to the Doppler effect used in the radial velocity
                method.
                <br></br>
                <br></br>
                Images are taken of the host star and reference stars in close
                proximity to it, and these are analyzed at regular intervals by
                measuring the distance between the target and reference stars.
                It requires extreme precision but can provide an accurate
                estimate of the planet’s mass and is best suited for planets
                with larger orbits. The accuracy of this method is limited by
                the formation of starspots and observation time needs to extend
                for multiple orbital periods.
              </p>
            </div>
            <div className="toc5methods">
              <h4>Transit Event Observation</h4>
              <p>
                This is the most popular and widely used method and like the
                radial velocity method, the transit method involves indirectly
                detecting exoplanets. It is extremely reliable and accounts for
                more than 70% of exoplanet discoveries. A transit event works
                like an eclipse; part of the host star’s light is blocked when
                the planet passes in front of the host star, with the observer,
                the planet, and the host star situated almost in a straight
                line. In an eclipse, however, the planet passes behind the star.
                <br></br>
                <br></br>
                Using photometry, the light curve of the star can be analyzed
                for a periodic dip in luminosity indicative of a transit. The
                dimming is only of a small magnitude, with an apparent
                luminosity decrease of around 1% and 0.001% for Jupiter-sized
                and Earth-sized planets respectively. The dips are periodic and
                last only for a few hours. A larger planet creates a deeper
                light curve compared to a smaller planet due to its ability to
                block more light(which can be used to determine its diameter),
                and a transit event lasts longer if its distance from the host
                star is greater.
                <br></br>
                <br></br>
                The structure and composition of planets can be characterized by
                analyzing the light spectra passing through their atmosphere and
                have proven successful in detecting elements like methane. The
                temperature of the planet can also be determined by measuring
                the intensity of the radiation before and after an eclipse. The
                Transit method is most effective when surveying a large number
                of stars at once and also requires a great deal of follow-up
                observations due to its high rate of false positives. The Kepler
                Mission hosted by NASA in 2009 used this method to hunt for
                exoplanets. Most photometry is performed by observatories on
                Earth that combine telescopes and photometers to detect
                exoplanets, like the SuperWASP international survey.
              </p>
            </div>
            <div className="toc5methods">
              <h4>Gravitational Microlensing</h4>
              <p>
                Gravitational Microlensing was a result of the prediction of
                Einstein’s General Theory of Relativity, which causes distortion
                of light and a warp in the fabric of spacetime due to the
                gravity of a massive body. It incorporates both the
                gravitational lensing and transit methods and can detect small
                exoplanets and those found thousands of light-years away. When
                two stars are almost perfectly aligned, the light of the
                background star becomes bent due to the gravity of the one in
                front, which acts as a magnifying glass and results in
                brightness amplification of the background star by the ‘lens’
                star. This causes the body to appear brighter, with the
                exoplanets in a system all acting as individual lenses. The
                entire event appears like a brightening and dimming process that
                lasts for a short time with a blip in between and is used by
                astronomers to obtain information about planet formation and
                evolution. Follow-up confirmations of lensing events are almost
                impossible since they occur in a rare and random fashion, and
                only rough data about the planet’s distance can be obtained.
              </p>
            </div>
          </div>

          <div className="infoPageContentCard">
            <h2 id="toc8">Some exoplanet missions</h2>
            <h4>Past</h4>
            <ul>
              <h5>Kepler</h5>
              <li>
                After nine years in deep space collecting data that revealed our
                night sky to be filled with billions of hidden planets – more
                planets even than stars – NASA’s Kepler space telescope ran out
                of fuel needed for further science operations. In 2018, NASA
                retired the spacecraft within its current, safe orbit, away from
                Earth. Kepler leaves a legacy of more than 2,600 planet
                discoveries from outside our solar system, many of which could
                be promising places for life.
              </li>
              <h5>K2</h5>
              <li>
                The loss of a second of the four reaction wheels on board the
                Kepler spacecraft in May 2013 brought an end to Kepler's four
                plus year science mission to continuously monitor more than
                150,000 stars to search for transiting exoplanets. The K2
                mission represented a new concept for spacecraft operations that
                enabled continued scientific observations with the Kepler space
                telescope. K2 became fully operational in June 2014 and ended
                space operations in 2018. The Project successfully completed
                data processing and closeout in September 2020.
              </li>
            </ul>

            <h4>Current/Future</h4>
            <ul>
              <h5>TESS</h5>

              <li>
                The Transiting Exoplanet Survey Satellite (TESS) is a space
                telescope for NASA's Explorer program, designed to search for
                exoplanets using the transit method in an area 400 times larger
                than that covered by the Kepler mission.
              </li>
              <h5>JWST</h5>

              <li>
                The James Webb Space Telescope (sometimes called JWST or Webb)
                will be a large infrared telescope with a 6.5-meter primary
                mirror. It will be used to map the atmosphere of exoplanets.
              </li>
              <h5>Roman Space Telescope</h5>

              <li>
                The Nancy Grace Roman Space Telescope is a NASA infrared space
                telescope currently in development and scheduled to launch no
                later than May 2027. Roman was recommended in 2010 by the United
                States National Research Council Decadal Survey committee as the
                top priority for the next decade of astronomy.
              </li>
              <h5>ARIEL</h5>

              <li>
                The Atmospheric Remote-sensing Infrared Exoplanet Large-survey
                (ARIEL) is a space telescope and the fourth medium-class mission
                of the European Space Agency's Cosmic Vision programme. It is
                set to be launched in 2028.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
