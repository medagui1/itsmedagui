import React from "react";
import { carousel } from "../constants/carousel";
import '../../App.css'


const LogoCarousel = () => {
  return (
    <div className="logos-slide flex ">
      <div className="flex gap-12">
        {carousel.map((logo, index) => (
          <img src={logo} alt="" key={index} className="h-10 max-sm:h-8" height={40} width={40}/>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
