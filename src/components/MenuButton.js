import '../Menu.css';

import React from 'react';

export const MenuButton = () => {
  return (
    <nav className="menu" id='zInd'
    >
      <input
        type="checkbox"
        href="#"
        className="menu-open"
        name="menu-open"
        id="menu-open"
      />
      <label className="menu-open-button" for="menu-open">
        <span className="lines line-1"></span>
        <span class="lines line-2"></span>
        <span className="lines line-3"></span>
      </label>

      <button className="menu-item blue">
        <i className="fa fa-anchor"></i>
      </button>
      <button className="menu-item green">
        <i className="fa fa-coffee"></i>
      </button>
      <button className="menu-item red">
        <i className="fa fa-heart"></i>
      </button>
      <button className="menu-item purple">
        <i className="fa fa-microphone"></i>
      </button>
      {/* <button className="menu-item orange">

        <i className="fa fa-star"></i>
      </button> */}
      {/* <button className="menu-item lightblue">
        <i className="fa fa-diamond"></i>
      </button> */}
    </nav>
  );
};


// export const MenuButton = () => {
//   return (
// <nav class="menu" id='zInd'>
//    <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
//    <label class="menu-open-button" for="menu-open">
//     <span class="lines line-1"></span>
//     <span class="lines line-2"></span>
//     <span class="lines line-3"></span>
//   </label>

//    <button class="menu-item blue"> <i class="fa fa-anchor"></i> </button>
//    <a href="#" class="menu-item green"> <i class="fa fa-coffee"></i> </a>
//    <a href="#" class="menu-item red"> <i class="fa fa-heart"></i> </a>
//    <a href="#" class="menu-item purple"> <i class="fa fa-microphone"></i> </a>
//    <a href="#" class="menu-item orange"> <i class="fa fa-star"></i> </a>
//    <a href="#" class="menu-item lightblue"> <i class="fa fa-diamond"></i> </a>
// </nav>
//   );
// };
