import React from "react";
import HoverPopUpType from "./HoverPopUpType";
import HoverPopUpDiscovery from "./HoverPopUpDiscovery";

const SinglePlanetViewInfo = (props) => {
  const singlePlanetInfo = props.singlePlanetInfo;
  const singlePlanetKey = props.singlePlanetKey;
  const size = singlePlanetInfo[singlePlanetKey].compareEarthSize;

  // ***********************
  // Featured Planets
  if (singlePlanetInfo && singlePlanetInfo[singlePlanetKey].name === "Earth") {
    return (
      <div>
        <div className="planetText_Name">
          {singlePlanetInfo ? singlePlanetInfo[singlePlanetKey].name : ""}
        </div>
        <div className="planetText_Earth">
          <p>
            “Look again at that dot. That's here. That's home. That's us. On it
            everyone you love, everyone you know, everyone you ever heard of,
            every human being who ever was, lived out their lives.
          </p>
          <br></br>
          <p>
            The aggregate of our joy and suffering, thousands of confident
            religions, ideologies, and economic doctrines, every hunter and
            forager, every hero and coward, every creator and destroyer of
            civilization, every king and peasant, every young couple in love,
            every mother and father, hopeful child, inventor and explorer, every
            teacher of morals, every corrupt politician, every "superstar,"
            every "supreme leader," every saint and sinner in the history of our
            species lived there-on a mote of dust suspended in a sunbeam."
            <br></br>
            <br></br>
            <p>- Carl Sagan</p>
          </p>
        </div>
      </div>
    );
  }
  // ***********************

  return (
    <div>
      <div className="planetText_Name">
        {singlePlanetInfo ? singlePlanetInfo[singlePlanetKey].name : ""}
      </div>
      <div className="planetText_Type">
        {singlePlanetInfo[singlePlanetKey].planetType ? (
          <HoverPopUpType
            type={singlePlanetInfo[singlePlanetKey].planetType}
            size={singlePlanetInfo[singlePlanetKey].compareEarthSize}
          />
        ) : (
          ""
        )}
      </div>
      <div className="planetText_Distance">
        {singlePlanetInfo[singlePlanetKey].distancePC
          ? `You are ${
              (Math.round(singlePlanetInfo[singlePlanetKey].distancePC * 3.2) *
                10) /
              10
            } light years from our solar system`
          : ""}
      </div>
      <div className="planetText_Distance">
        {singlePlanetInfo[singlePlanetKey].miles
          ? `You are ${singlePlanetInfo[singlePlanetKey].miles} from Earth`
          : ""}
      </div>
      <div className="planetText_Size">
        {Math.round(size * 10) / 10}x the size of Earth
      </div>
      <div className="planetText_Discovery">
        {singlePlanetInfo[singlePlanetKey].discoveryMethod ? (
          <HoverPopUpDiscovery
            discoveryMethod={singlePlanetInfo[singlePlanetKey].discoveryMethod}
            discoveryFacility={
              singlePlanetInfo[singlePlanetKey].discoveryFacility
            }
          />
        ) : (
          ""
        )}
      </div>
      {/* <div className="planetText_Size">
            {singlePlanetInfo[singlePlanetKey].compareEarthSize}x the size of Earth
          </div> */}
    </div>
  );
};

export default SinglePlanetViewInfo;

// const SinglePlanetViewInfo = (props) => {
//   const singlePlanetInfo = props.singlePlanetInfo;
//   const singlePlanetKey = props.singlePlanetKey;
//   const size = singlePlanetInfo[singlePlanetKey].compareEarthSize;
//   const name = singlePlanetInfo[singlePlanetKey].name;
//   const type = singlePlanetInfo[singlePlanetKey].planetType;
//   const distancePC = singlePlanetInfo[singlePlanetKey].distancePC;
//   const distanceM = singlePlanetInfo[singlePlanetKey].miles;
//   const discoveryMethod = singlePlanetInfo[singlePlanetKey].discoveryMethod;
//   const discoveryFacility = singlePlanetInfo[singlePlanetKey].discoveryFacility;

//   // ***********************
//   // Featured Planets
//   if (singlePlanetInfo && name === "Earth") {
//     return (
//       <div>
//         <div className="planetText_Name">{singlePlanetInfo ? name : ""}</div>
//         <div className="planetText_Earth">
//           <p>
//             “Look again at that dot. That's here. That's home. That's us. On it
//             everyone you love, everyone you know, everyone you ever heard of,
//             every human being who ever was, lived out their lives.
//           </p>
//           <br></br>
//           <p>
//             The aggregate of our joy and suffering, thousands of confident
//             religions, ideologies, and economic doctrines, every hunter and
//             forager, every hero and coward, every creator and destroyer of
//             civilization, every king and peasant, every young couple in love,
//             every mother and father, hopeful child, inventor and explorer, every
//             teacher of morals, every corrupt politician, every "superstar,"
//             every "supreme leader," every saint and sinner in the history of our
//             species lived there-on a mote of dust suspended in a sunbeam."
//             <br></br>
//             <br></br>
//             <p>- Carl Sagan</p>
//           </p>
//         </div>
//       </div>
//     );
//   }
//   // ***********************

//   return (
//     <div>
//       <div className="planetText_Name">{singlePlanetInfo ? name : ""}</div>
//       <div className="planetText_Type">
//         {type ? <HoverPopUpType type={type} size={size} /> : ""}
//       </div>
//       <div className="planetText_Distance">
//         {distancePC
//           ? `You are ${
//               (Math.round(distancePC * 3.2) * 10) / 10
//             } light years from our solar system`
//           : ""}
//       </div>
//       <div className="planetText_Distance">
//         {distanceM ? `You are ${distanceM} from Earth` : ""}
//       </div>
//       <div className="planetText_Size">
//         {Math.round(size * 10) / 10}x the size of Earth
//       </div>
//       <div className="planetText_Discovery">
//         {discoveryMethod ? (
//           <HoverPopUpDiscovery
//             discoveryMethod={discoveryMethod}
//             discoveryFacility={discoveryFacility}
//           />
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };
