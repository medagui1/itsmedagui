import { useEffect, useRef } from "react";
import "../../App.css";
import Button from "../components/Button";
import LogoCarousel from "../components/LogoCarousel";
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {

    const onCompleteTypewriter = () => {
      // Trigger the cursor animation after typewriter animation completes
      gsap.to(cursorRef.current, {
        repeat: -1,
        opacity: 0,
        yoyo: true,
        duration: 0.5,
      });
    };

    gsap.to(textRef.current, {
      duration: 3,
      text: "Hello, I'm Medagui",
      onComplete : onCompleteTypewriter,
    });
  }, []);

  return (
    <header
      className="gap-8 items-start p-16 max-sm:p-8 relative"
      id="home"
      data-aos="fade-down"
    >
      <div className="max-w-[600px]">
        <h2 className="text-6xl  mb-5 font-bold max-sm:text-[48px] max-sm:leading-[60px] leading-[69px] text-gradient">
          <span className="" ref={textRef}></span> <span ref={cursorRef} className=""> | </span>
          <br />
          <span className="text-white">Full Stack Web Developer</span>
        </h2>
        <p className="text-xl">
          Experienced full-stack developer skilled in delivering end-to-end
          digital solutions for a seamless user experience.
        </p>
      </div>
      <div className="container mt-16  flex justify-center items-center overflow-hidden">
        <LogoCarousel />
      </div>
      <div className="flex gap-4 mt-20 flex-wrap">
        <Button label={"GET IN TOUCH"} isGradient={true} />
        <Button label={"VIEW ALL WORKS"} />
      </div>
    </header>
  );
};

export default Hero;
