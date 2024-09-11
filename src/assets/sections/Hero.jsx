import { useRef } from "react";
import LogoCarousel from "../components/LogoCarousel";
import MagneticButton from "../components/MagneticButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { splitTextIntoSpans } from "../utilities/splitTextIntoSpans";

const Hero = ({headerHeight}) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Split text into spans
    splitTextIntoSpans(textRef, " ");

    // Ensure `#hero-text` starts visible
    tl.to("#hero-text", {
      opacity: 1,
    });

    // Animate header title
    tl.fromTo(
      ".header_title",
      {
        opacity: 0,
        y: "100%",
      },
      {
        opacity: 1,
        duration: 0.4,
        delay: 1,
        y: 0,
        stagger: 0.15,
      }
    );

    // Animate the spans in hero text
    tl.fromTo(
      `#${textRef.current.id} span`,
      {
        opacity: 0,
        transformOrigin: "left top",
        rotate: "20deg",
        y: "100%",
      },
      {
        opacity: 1,
        rotate: 0,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
      }
    );
    tl.fromTo(
      ".container",
      {
        opacity: 0,
        transformOrigin: "left top",
        rotate: "20deg",
        y: "100%",
      },
      {
        opacity: 1,
        rotate: 0,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
      }
    );
    tl.fromTo(
      ".bounce",
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration : 0.4,
      }
    );
  }, []);

  return (
    <section className={`p-normal`} id="hero" style={{ marginTop : headerHeight }}>
      <h1 className="text-6xl title text-text_primary overflow-hidden dark:bg-black_primary mb-thinner">
        <span className="inline-block translate-y-[100%] header_title">
          Hello, I'm MedAgui.
        </span>
      </h1>
      <h2 className="title text-4xl overflow-hidden dark:bg-black_primary">
        <span className="inline-block translate-y-[100%] header_title">
          Front-End Web Developer
        </span>
      </h2>
      <p
        className="text mt-wide overflow-hidden opacity-0"
        ref={textRef}
        id="hero-text"
      >
        Experienced Front-End Developer focused on creating{" "}
        <span className="title ">beautiful</span>,
        <span className="title"> user-friendly</span> web experiences.
      </p>
      <div className="container mt-widest flex justify-center items-center overflow-hidden opacity-0">
        <LogoCarousel />
      </div>
      <div className="w-full flex justify-end items-center mt-widest">
        <a href="#projects" className="bounce opacity-0">
          <MagneticButton />
        </a>
      </div>
    </section>
  );
};

export default Hero;
