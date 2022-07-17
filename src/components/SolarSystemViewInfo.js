import React from "react";
import HoverPopUpGeneral from "./HoverPopUpGeneral";

const SolarSystemViewInfo = (props) => {
  const solarSystem = props.solarSystem;
  console.log("SSProps", props);

  //Featured star systems w/ additional information
  if (
    solarSystem &&
    solarSystem.length &&
    solarSystem[0].name === "TRAPPIST-1"
  ) {
    return (
      <div>
        <div className="planetText_Name">
          {solarSystem && solarSystem.length ? solarSystem[0].name : ""}
        </div>
        <div className="planetText_Type">Ultra Cool Red-Dwarf Star</div>
        <div className="starText_Age">7.6 billion years old</div>
        <div className="starText_Habitable">
          <HoverPopUpGeneral solarSystem={solarSystem} />
        </div>
        <div className="starText_NumberOfPlanets">
          {solarSystem && solarSystem.length && solarSystem[0].numberOfPlanets
            ? `This system contains ${solarSystem[0].numberOfPlanets} confirmed exoplanet(s)`
            : ""}
        </div>
      </div>
    );
  }

  if (
    solarSystem &&
    solarSystem.length &&
    solarSystem[0].name === "Proxima Cen"
  ) {
    return (
      <div>
        <div className="planetText_Name">Proxima Centauri</div>
        <div className="planetText_Type">Red-Dwarf Star</div>
        <div className="starText_Age">4.9 billion years old</div>
        <div className="starText_Habitable">
          <HoverPopUpGeneral solarSystem={solarSystem} />
        </div>
        <div className="starText_NumberOfPlanets">
          {solarSystem && solarSystem.length && solarSystem[0].numberOfPlanets
            ? `This system contains ${solarSystem[0].numberOfPlanets} confirmed exoplanet(s)`
            : ""}
        </div>
      </div>
    );
  }

  if (
    solarSystem &&
    solarSystem.length &&
    solarSystem[0].name === "Kepler-62"
  ) {
    return (
      <div>
        <div className="planetText_Name">Kepler-62</div>
        <div className="planetText_Type">Orange-Dwarf Star</div>
        <div className="starText_Age">7 billion years old</div>
        <div className="starText_Habitable">
          <HoverPopUpGeneral solarSystem={solarSystem} />
        </div>
        <div className="starText_NumberOfPlanets">
          {solarSystem && solarSystem.length && solarSystem[0].numberOfPlanets
            ? `This system contains ${solarSystem[0].numberOfPlanets} confirmed exoplanet(s)`
            : ""}
        </div>
      </div>
    );
  }
  //**********************************************************************

  return (
    <div>
      <div className="planetText_Name">
        {solarSystem && solarSystem.length ? solarSystem[0].name : ""}
      </div>
      <div className="planetText_Type">
        {solarSystem && solarSystem.length && solarSystem[0].starSpectralType
          ? `Star Type: ${solarSystem[0].starSpectralType}`
          : ""}
      </div>
      <div className="planetText_Type">
        {solarSystem && solarSystem.length && solarSystem[0].name === "Sun"
          ? "Yellow Dwarf"
          : ""}
      </div>
      <div className="starText_Age">
        {solarSystem &&
        solarSystem.length &&
        solarSystem[0].starAge &&
        solarSystem[0].starAge !== 0
          ? ` ${Math.round(solarSystem[0].starAge * 10) / 10} billion years old`
          : ""}
      </div>
      <div className="starText_NumberOfPlanets">
        {solarSystem && solarSystem.length && solarSystem[0].numberOfPlanets
          ? `This system has ${solarSystem[0].numberOfPlanets} exoplanet(s)`
          : ""}
      </div>
    </div>
  );
};

export default SolarSystemViewInfo;
