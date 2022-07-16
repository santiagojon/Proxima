import React from 'react';
import HoverPopUpGeneral from './HoverPopUpGeneral';

const SolarSystemViewInfo = (props) => {

    const solarSystem = props.solarSystem;
    console.log('SSProps', props)

    //Featured star systems w/ additional information 
    if(solarSystem && solarSystem.length && solarSystem[0].name === 'TRAPPIST-1') {
        return (
        <div>
            <div className="planetText_Name">
                {solarSystem && solarSystem.length ? solarSystem[0].name : ''}
            </div>
            <div className="planetText_Type">
               Ultra Cool Red-Dwarf Star
            </div>
            <div className="starText_Age">
               7.6 billion years old
            </div>
            <div className="starText_Habitable">
               <HoverPopUpGeneral solarSystem={solarSystem}/>
            </div>
        </div>)
    }

    if(solarSystem && solarSystem.length && solarSystem[0].name === 'Proxima Cen') {
        return (<div>
              <div className="planetText_Name">
                Proxima Centauri
            </div>
            <div className="planetText_Type">
               Red-Dwarf Star
            </div>
            <div className="starText_Age">
               4.9 billion years old
            </div>
            <div className="starText_Habitable">
               <HoverPopUpGeneral solarSystem={solarSystem}/>
            </div>
        </div>)
    }
    //**********************************************************************


    // <div className="starText_Habitable">
    // {solarSystem && solarSystem.length  ? "Habitable Planets: 1": ''} 
    // </div>

    return(
    <div>
    <div className="planetText_Name">
    {solarSystem && solarSystem.length ? solarSystem[0].name : ''}
    </div>
    <div className="planetText_Type">
    {solarSystem && solarSystem.length && solarSystem[0].starSpectralType ? `Star Type: ${solarSystem[0].starSpectralType}`: ''} 
    </div>
    <div className="starText_Age">
    {solarSystem && solarSystem.length  && solarSystem[0].starAge !== null ? ` ${(Math.round(solarSystem[0].starAge * 10) / 10)} billion years old` : ''} 
    </div>
    
    </div>
    )
}


export default SolarSystemViewInfo;





//Saturday

//Star System View
    //**************************************Add starSpectralType property to data parser
        //**************************************Add this underneath star name
        //**************************************perhaps another piece of data about the star
        //distance too??? (At least for the featured ones)

//Featured Single Planets in Trappist-1, Proxima, etc.
    //Add additional info for those planets. Just one or two lines

//Planet rings color change broken for some reason. Fix with Chris

//Planet mesh shader change on planet selection. Do this with Chris.

//Styling
    //Milky Way
    //Info page + images
    //Anywhere else that needs it