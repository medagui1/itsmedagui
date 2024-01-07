import React, { useEffect } from "react";
import { carousel } from "../constants/carousel";
import { navLinks } from "../constants/links";
import '../../App.css'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const LogoCarousel = () => {

  // useEffect(() => {
  //   const container = document.querySelector(".container");
  //   const logosSlide = document.querySelector(".logos-slide");

  //   if (container && logosSlide) {
  //     const copy = logosSlide.cloneNode(true);
  //     // container.appendChild(copy);
  //   }
  // }, []);

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
