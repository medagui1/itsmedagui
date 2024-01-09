import React from "react";
import { carousel } from "../constants/carousel";
import '../../App.css'


const LogoCarousel = () => {
  return (
    <div className="logos-slide flex ">
      <div className="flex gap-12">
        {carousel.map((logo) => (
          <img src={logo} alt="" key={logo} className="h-10 " />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
