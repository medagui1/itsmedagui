import React from "react";
import '../../App.css'

const MenuButton = ({setIsMenuOpen, isMenuOpen}) => {
  return (
    <button aria-label="menu" className={`button ${isMenuOpen && 'open'} z-30 `} id="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuButton;
