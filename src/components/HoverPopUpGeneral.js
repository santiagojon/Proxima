import React, { useState } from 'react';

const HoverPopUpGeneral = (props) => {
    const [text, setText] = useState('');

    const solarSystem = props.solarSystem;
    let planetName;


    if (solarSystem && solarSystem.length) planetName = props.solarSystem[0].name;

    console.log('HPUG', props.solarSystem[0].name)
    console.log('HPUG2', planetName)


   
    const renderText = () => {
        console.log('NAME', planetName)
        if (planetName === 'TRAPPIST-1') {
            return (<div className='popupRenderTextPlanetInfo'>As many as four of the planets (d, e, f, g) are hypothesised to be orbiting within the habitable zone of the star and thus to have temperatures suitable to the presence of liquid water and the development of life. Whether they actually contain liquid water is a function of numerous properties of the planets including whether they have an atmosphere. There is no clear evidence that any of the planets has an atmosphere and it is unclear whether planets could retain an atmosphere given TRAPPIST-1's radiation emission. The low densities of the planets indicate they may consist of large amounts of volatile material.</div>)
        }

        if (planetName === 'PROXIMA-CENTAURI') {
            return (<div className='popupRenderTextPlanetInfo'>Proxima Centauri has three known exoplanets: Proxima Centauri b, Proxima Centauri c, and Proxima Centauri d. Proxima Centauri b orbits the star at a distance of roughly 0.05 AU (7.5 million km) with an orbital period of approximately 11.2 Earth days. Its estimated mass is at least 1.17 times that of Earth. Proxima b orbits within Proxima Centauri's habitable zone—the range where temperatures are right for liquid water to exist on its surface—but because Proxima Centauri is a red dwarf and a flare star, the planet's habitability is disputed. A candidate super-Earth, Proxima Centauri c, orbits roughly 1.5 AU (220 million km) away every 1,900 d (5.2 yr). A sub-Earth, Proxima Centauri d, orbits roughly 0.029 AU (4.3 million km) away every 5.1 days.</div>)
        }

    }

    const handleLeave = () => {
        setText('');
    }

    const handleHover = () => {
        console.log('hoverNaMe', planetName)
        setText(renderText());
    }

        
    

    return (
        <div className="popupTextWrapper">
            <div className="popupTextRelevance" onMouseOver={handleHover} onMouseLeave={handleLeave}>
                General system information
                {text}
            </div>
        </div>

    )
}

export default HoverPopUpGeneral;




