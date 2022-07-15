import React, { useState } from 'react';

const HoverPopUpType = (props) => {
    const [text, setText] = useState('');

    let planetType = props.type;
    const planetSize = props.size;

    if ((planetType === 'rocky' || planetType === 'earthLike') && planetSize <= 2) planetType = 'Terrestrial';
    if ((planetType === 'rocky' || planetType === 'earthLike') && planetSize > 2) planetType = 'Super_Earth';
    if (planetType === 'gas') planetType = 'Gas_Giant';
    if (planetType === 'icy') planetType = 'Neptunian';


    const planetTypeInfo = {
        Terrestrial: "In our solar system, Earth, Mars, Mercury and Venus are terrestrial, or rocky, planets. For planets outside our solar system, those between half of Earth's size to twice its radius are considered terrestrial and others may even be smaller. Exoplanets twice the size of Earth and larger may be rocky as well, but those are considered Super-Earths.",
        Neptunian: 'These exoplanets are similar in size to Neptune or Uranus in our solar system. Neptunian planets typically have hydrogen and helium-dominated atmospheres with cores or rock and heavier metals',
        Super_Earth: 'A class of planets unlike any in our solar system – are more massive than Earth yet lighter than ice giants like Neptune and Uranus, and can be made of gas, rock or a combination of both. They are between twice the size of Earth and up to 10 times its mass.',
        Gas_Giant: 'Large planets mostly composed of helium and/or hydrogen. These planets, like Jupiter and Saturn in our solar system, don’t have hard surfaces and instead have swirling gases above a solid core. Gas giant exoplanets can be much larger than Jupiter, and much closer to their stars than anything found in our solar system.'
      }

    const renderText = () => {
        return (<div className='popupRenderTextType'>
            <i>{planetTypeInfo[planetType]}</i>
        </div>)
    }

    const handleLeave = () => {
        setText('');
    }

    const handleHover = () => {
        setText(renderText());
    }

    return (
        <div className="popupTextWrapper">
            <div className="popupTextRelevance" onMouseOver={handleHover} onMouseLeave={handleLeave}>
                Planet Type: {planetType.includes('_') ? planetType.split('_').join(' ') : planetType}
                {text}
            </div>
        </div>

    )
}

export default HoverPopUpType;