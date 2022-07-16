import React, { useState } from "react";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const HoverPopUpDiscovery = (props) => {
  const [text, setText] = useState("");

  let method = props.discoveryMethod;
  const facility = props.discoveryFacility;

  if (method === "Imaging") method = "Direct_Imaging";
  if (method === "Transit" || "Transit Timing Variations")
    method = "Transit_Event_Observation";
  if (method === "Microlensing") method = "Gravitational_Microlensing";

  //Eclipse Timing Variations
  //Pulsar Timing
  //Orbital Brightness Modulation

  const discoveryMethods = {
    Direct_Imaging: [
      `Discovered by ${facility} using Direct Imaging.`,
      "This method refers to the effort to detect and study exoplanets from the light emitted or scattered by the planets themselves, as opposed to inferring the existence and properties of planets from their effects on the images or spectra of the stars they orbit.",
    ],
    Transit_Event_Observation: [
      `Discovered by ${facility} using the Transit Method.`,
      "This method consists of regularly measuring the luminosity of a star in order to detect the periodic decrease in luminosity associated with the transit of an exoplanet. The transit happen when a planet passes in front of its star. On the other hand, when the planet passes behind the star, it is called an eclipse. The effect measured during a transit is quite small. For a star the size of the Sun, the transit of a Jupiter-size planet will cause a decrease in apparent luminosity of about 1%, while this decrease will be of about 0.001% for a planet the size of the Earth.",
    ],
    Astrometry: 3,
    Gravitational_Microlensing: [
      `Discovered by ${facility} using Microlensing.`,
      "A microlensing exoplanet is a planet orbiting a star other than our own Sun that is detectable due to the effects that the gravitational field of its planetary system has on the passing light of a distant background star.",
    ],
  };

  const renderText = () => {
    return (
      <div className="popupRenderTextDiscovery">
        <div>
          <i>{discoveryMethods[method][0]}</i>
        </div>
        <br></br>
        <div>{discoveryMethods[method][1]}</div>
      </div>
    );
  };

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
        {/* Discovery method: {method.includes('_') ? method.split('_').join(' ') : method} */}
        <ArrowDropDownCircleOutlinedIcon
          fontSize="small"
          style={{ margin: "2px" }}
        />
        Discovery Method
        {text}
      </div>
    </div>
  );
};

export default HoverPopUpDiscovery;
