import React from "react";
import HoverPopUpGeneral from "./HoverPopUpGeneral";

const SolarSystemViewInfo = (props) => {
  const solarSystem = props.solarSystem;
 
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

  if (solarSystem && solarSystem.length && solarSystem[0].name === "WASP-12") {
    return (
      <div>
        <div className="planetText_Name">WASP-12</div>
        <div className="planetText_Type">Yellow-Dwarf Star</div>
        <div className="starText_Age">1.7 billion years old</div>
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

  if (solarSystem && solarSystem.length && solarSystem[0].name === "tau Cet") {
    return (
      <div>
        <div className="planetText_Name">Tau Ceti</div>
        <div className="planetText_Type">Yellow-Dwarf Star</div>
        <div className="starText_Age">10 billion years old</div>
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

// const SolarSystemViewInfo = (props) => {
//   const solarSystem = props.solarSystem;
//   const name = solarSystem[0].name;
//   const numberOfPlanets = solarSystem[0].numberOfPlanets;
//   const starSpectralType = solarSystem[0].starSpectralType;
//   const starAge = solarSystem[0].starAge;

//   console.log("SSProps", props);

//   //Featured star systems w/ additional information
//   if (
//     solarSystem &&
//     solarSystem.length &&
//     solarSystem[0].name === "TRAPPIST-1"
//   ) {
//     return (
//       <div>
//         <div className="planetText_Name">
//           {solarSystem && solarSystem.length ? solarSystem[0].name : ""}
//         </div>
//         <div className="planetText_Type">Ultra Cool Red-Dwarf Star</div>
//         <div className="starText_Age">7.6 billion years old</div>
//         <div className="starText_Habitable">
//           <HoverPopUpGeneral solarSystem={solarSystem} />
//         </div>
//         <div className="starText_NumberOfPlanets">
//           {solarSystem && solarSystem.length && numberOfPlanets
//             ? `This system contains ${numberOfPlanets} confirmed exoplanet(s)`
//             : ""}
//         </div>
//       </div>
//     );
//   }

//   if (
//     solarSystem &&
//     solarSystem.length &&
//     solarSystem[0].name === "Proxima Cen"
//   ) {
//     return (
//       <div>
//         <div className="planetText_Name">Proxima Centauri</div>
//         <div className="planetText_Type">Red-Dwarf Star</div>
//         <div className="starText_Age">4.9 billion years old</div>
//         <div className="starText_Habitable">
//           <HoverPopUpGeneral solarSystem={solarSystem} />
//         </div>
//         <div className="starText_NumberOfPlanets">
//           {solarSystem && solarSystem.length && numberOfPlanets
//             ? `This system contains ${numberOfPlanets} confirmed exoplanet(s)`
//             : ""}
//         </div>
//       </div>
//     );
//   }

//   if (
//     solarSystem &&
//     solarSystem.length &&
//     solarSystem[0].name === "Kepler-62"
//   ) {
//     return (
//       <div>
//         <div className="planetText_Name">Kepler-62</div>
//         <div className="planetText_Type">Orange-Dwarf Star</div>
//         <div className="starText_Age">7 billion years old</div>
//         <div className="starText_Habitable">
//           <HoverPopUpGeneral solarSystem={solarSystem} />
//         </div>
//         <div className="starText_NumberOfPlanets">
//           {solarSystem && solarSystem.length && numberOfPlanets
//             ? `This system contains ${numberOfPlanets} confirmed exoplanet(s)`
//             : ""}
//         </div>
//       </div>
//     );
//   }
//   //**********************************************************************

//   return (
//     <div>
//       <div className="planetText_Name">
//         {solarSystem && solarSystem.length ? name : ""}
//       </div>
//       <div className="planetText_Type">
//         {solarSystem && solarSystem.length && starSpectralType
//           ? `Star Type: ${starSpectralType}`
//           : ""}
//       </div>
//       <div className="planetText_Type">
//         {solarSystem && solarSystem.length && name === "Sun"
//           ? "Yellow Dwarf"
//           : ""}
//       </div>
//       <div className="starText_Age">
//         {solarSystem && solarSystem.length && starAge && starAge !== 0
//           ? ` ${Math.round(starAge * 10) / 10} billion years old`
//           : ""}
//       </div>
//       <div className="starText_NumberOfPlanets">
//         {solarSystem && solarSystem.length && numberOfPlanets
//           ? `This system has ${numberOfPlanets} exoplanet(s)`
//           : ""}
//       </div>
//     </div>
//   );
// };
