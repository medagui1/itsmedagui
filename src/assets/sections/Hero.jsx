import { useEffect, useRef } from "react";
import "../../App.css";
import Button from "../components/Button";
import LogoCarousel from "../components/LogoCarousel";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import MagneticButton from "../components/MagneticButton";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const onCompleteTypewriter = () => {
      // Trigger the cursor animation after typewriter animation completes
      gsap.to(cursorRef.current, {
        repeat: 0,
        opacity: 0,
        yoyo: true,
        duration: 0.5,
      });
    };

    gsap.to(textRef.current, {
      duration: 3,
      delay: 0.5,
      text: "Hello, I'm Medagui.",
      onComplete: onCompleteTypewriter,
    });
  }, []);

  return (
    <header
      className="gap-8 items-start p-16 max-sm:p-8 relative"
      id="home"
      data-aos="fade-down"
    >
      <div className="max-w-[600px] lg:mt-8 ">
        <h2 className="text-6xl  mb-5 font-bold max-sm:text-[48px] max-sm:leading-[60px] leading-[69px] text-gradient">
          <span className="" ref={textRef}></span>{" "}
          <span ref={cursorRef} className="">
            {" "}
            |{" "}
          </span>
          <br />
          <span className="text-white">Full Stack Web Developer</span>
        </h2>
        <p className="text-xl">
          Experienced full-stack developer skilled in delivering end-to-end
          digital solutions for a seamless user experience.
        </p>
      </div>
      <div className="container mt-16 max-sm:mt-12 flex justify-center items-center overflow-hidden">
        <LogoCarousel />
      </div>

      <div className="w-full flex justify-between items-end mt-32 mr-12 flex-wrap gap-16 max-sm:flex-col-reverse max-sm:mt-16 max-lg:mt-20 max-sm:items-center">
        <a
          href="#projects"
          className="flex flex-col justify-center items-center"
        >
          <p>Scroll down</p>
          <p className="pointer text-2xl">&darr;</p>
        </a>
        <a href="#projects">
        <MagneticButton />
        </a>
      </div>
    </header>
  );
};

export default Hero;
