import React, { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import { SystemSecurityUpdate } from "@mui/icons-material";

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
