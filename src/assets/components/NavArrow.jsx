import React from "react";

const NavArrow = ({scale}) => {
  return (
    <div className={`nav-arrow`} style={{ scale : scale }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavArrow;
