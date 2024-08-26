import React from "react";
import LogoCarousel from "../components/LogoCarousel";

const Hero = () => {
  return (
    <section className="p-8">
      <h1 className="title text-text_primary text-6xl">Hello, I'm MedAgui.</h1>
      <h2 className="title text-4xl mt-2">Front-End Web Developer</h2>
      <p className="text mt-8 ">
        Experienced Front-End Developer focused on creating beautiful,
        user-friendly web experiences.
      </p>
      <div className="container mt-16 max-sm:mt-12 flex justify-center items-center overflow-hidden">
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
