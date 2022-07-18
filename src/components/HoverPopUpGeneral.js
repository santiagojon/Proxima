import React, { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const HoverPopUpGeneral = (props) => {
  const [text, setText] = useState("");

  const solarSystem = props.solarSystem;
  let planetName;

  if (solarSystem && solarSystem.length) planetName = props.solarSystem[0].name;

  // ***************
  // FEATURED STAR SYSTEMS. ADD INFO TO DB POST CAPSTONE
  const renderText = () => {
    if (planetName === "TRAPPIST-1") {
      return (
        <div className="popupRenderTextPlanetInfo">
          <div>
            <div>
              As many as four of the planets (d, e, f, g) in TRAPPIST-1 are
              hypothesised to be orbiting within the habitable zone of the star
              and thus to have temperatures suitable to the presence of liquid
              water and the development of life.
            </div>
            <br></br>
            <div>
              Whether they actually contain liquid water is a function of
              numerous properties of the planets including whether they have an
              atmosphere. There is no clear evidence that any of the planets has
              an atmosphere and it is unclear whether planets could retain an
              atmosphere given TRAPPIST-1's radiation emission.
              <br></br>
              <br></br>
              <div>
                NASA's new James Webb Telescope will spend a quarter of its
                first year observing exoplanets, and 8.2% of this time studying
                TRAPPIST-1. Its infrared cameras will give us a better
                understanding of whether or not atmospheres exist on these
                exoplanets.
              </div>
            </div>
          </div>
          <div></div>
        </div>
      );
    }

    if (planetName === "Proxima Cen") {
      return (
        <div className="popupRenderTextPlanetInfo">
          <div>
            At only four light-years away, Proxima Centauri is our closest known
            exoplanet system neighbor. The only confirmed planet in this system,
            Proxima b is a super Earth exoplanet that orbits a M-type star. Its
            mass is 1.27 Earths, it takes 11.2 days to complete one orbit of its
            star, and is 0.0485 AU from its star. Its discovery was announced in
            2016.
          </div>
          <br></br>
          <div>
            As of 2022, there are two additional unconfirmed exoplanets within
            this system. A candidate super-Earth, Proxima Centauri c, orbits
            roughly 1.5 AU (220 million km) away every 1,900 d (5.2 yr). A
            sub-Earth, Proxima Centauri d, orbits roughly 0.029 AU (4.3 million
            km) away every 5.1 days.
          </div>
        </div>
      );
    }

    if (planetName === "Kepler-62") {
      return (
        <div className="popupRenderTextPlanetInfo">
          <div>
            Kepler-62 is a K-type main sequence star cooler and smaller than the
            Sun, located roughly 990 light years from Earth in the constellation
            Lyra. It resides within the field of vision of the Kepler
            spacecraft, the satellite that NASA's Kepler Mission used to detect
            planets that may be transiting their stars.
          </div>
          <br></br>
          <div>
            On April 18, 2013, it was announced that the star has five planets,
            two of which, Kepler-62e and Kepler-62f are within the star's
            habitable zone.The outermost, Kepler-62f, is likely a rocky planet
          </div>
        </div>
      );
    }

    if (planetName === "WASP-12") {
      return (
        <div className="popupRenderTextPlanetInfo">
          <div>
            WASP-12 is a magnitude 11 yellow dwarf star located approximately
            1410 light-years away in the constellation Auriga. WASP-12 has a
            mass and radius similar to the Sun and is known for being orbited by
            a planet that is extremely hot and has a retrograde orbit around
            WASP-12.
          </div>
          <br></br>
          <div>
            In 2008, the extrasolar planet WASP-12b was discovered orbiting
            WASP-12. The doomed planet is a hot Jupiter that orbits so close to
            its parent star, it's being torn apart. It takes this alien world
            only 1.1 days to completely circle its sun.
          </div>
        </div>
      );
    }

    if (planetName === "tau Cet") {
      return (
        <div className="popupRenderTextPlanetInfo">
          <div>
            Since December 2012, there has been evidence of at least four
            planets—all confirmed being super-Earths—orbiting Tau Ceti, with two
            of these being potentially in the habitable zone. There are an
            additional four unconfirmed planets, one of which is a Jovian planet
            between 3 and 20 AU from the star. Because of its debris disk, any
            planet orbiting Tau Ceti would face far more impact events than
            Earth. Despite this hurdle to habitability, its solar analog
            (Sun-like) characteristics have led to widespread interest in the
            star.
          </div>
          <br></br>
          <div>
            Given its stability, similarity and relative proximity to the Sun,
            Tau Ceti is consistently listed as a target for the Search for
            Extra-Terrestrial Intelligence (SETI) and appears in some science
            fiction literature.
          </div>
        </div>
      );
    }
  };
  // ***************

  const handleLeave = () => {
    setText("");
  };

  const handleHover = () => {
    setText(renderText());
  };

  return (
    <div className="popupTextWrapper">
      <div
        className="popupTextRelevance"
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        <ArrowDropDownCircleOutlinedIcon
          fontSize="small"
          style={{ margin: "2px" }}
        />
        System information
        {text}
      </div>
    </div>
  );
};

export default HoverPopUpGeneral;
