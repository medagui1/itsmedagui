import React from "react";
import "../../App.css";

const MenuButton = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      aria-label="menu"
      id="menu-button"
      onClick={toggleMenu}
      className={`${isMenuOpen ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuButton;
