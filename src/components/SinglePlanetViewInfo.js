import React from 'react';
import HoverPopUpType from './HoverPopUpType';
import HoverPopUpDiscovery from './HoverPopUpDiscovery';

const SinglePlanetViewInfo = (props) => {
    const singlePlanetInfo = props.singlePlanetInfo;
    const singlePlanetKey = props.singlePlanetKey;


    return (
        <div>
          <div className="planetText_Name">
            {singlePlanetInfo ? singlePlanetInfo[singlePlanetKey].name : ''}
          </div>
          <div className="planetText_Type">
            {singlePlanetInfo[singlePlanetKey].planetType ? <HoverPopUpType type={singlePlanetInfo[singlePlanetKey].planetType} size={singlePlanetInfo[singlePlanetKey].compareEarthSize} /> : '' }
          </div>
          <div className="planetText_Distance">
            {singlePlanetInfo[singlePlanetKey].distancePC ? `You are ${(Math.round(singlePlanetInfo[singlePlanetKey].distancePC * 3.2) * 10) / 10} light years from Earth` : ''}
          </div>
          <div className="planetText_Distance">
            {singlePlanetInfo[singlePlanetKey].miles ? `You are ${singlePlanetInfo[singlePlanetKey].miles} from Earth` : ''}
          </div>
          <div className="planetText_Size">
            {Math.round(singlePlanetInfo[singlePlanetKey].compareEarthSize * 10) / 10}x the size of Earth
          </div>
          <div className="planetText_Discovery">
            {singlePlanetInfo[singlePlanetKey].discoveryMethod ? <HoverPopUpDiscovery discoveryMethod={singlePlanetInfo[singlePlanetKey].discoveryMethod} discoveryFacility={singlePlanetInfo[singlePlanetKey].discoveryFacility} /> : '' }
          </div>
          {/* <div className="planetText_Size">
            {singlePlanetInfo[singlePlanetKey].compareEarthSize}x the size of Earth
          </div> */}
        </div>
    )
}


export default SinglePlanetViewInfo;