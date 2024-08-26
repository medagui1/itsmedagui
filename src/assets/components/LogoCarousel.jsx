import React from "react";
import { carousel } from "../constants/carousel";
import "../../App.css";

const LogoCarousel = () => {
  return (
    <div className="logos-slide flex ">
      <div className="flex gap-12">
        {carousel.map((logo, index) => (
          <div className="text-center logo-slider-item p-4">
            <div>{logo.img}</div>
            <p className="font-recoleta "> {logo.alt} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
