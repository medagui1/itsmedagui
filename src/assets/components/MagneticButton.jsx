import React, { useRef } from "react";
import { gsap, Power4, Elastic } from "gsap";

const MagneticButton = () => {
  // Refs for magneto elements
  const magnetoRef = useRef(null);
  const magnetoTextRef = useRef(null);

  // Mouse move handler
  const activateMagneto = (event) => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;

    if (magneto && magnetoText) {
      const boundBox = magneto.getBoundingClientRect();
      const magnetoStrenght = 80;
      const magnetoTextStrenght = 60;

      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      // Move the button to its new position
      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrenght,
        y: newY * magnetoStrenght,
        ease: Power4.easeOut,
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrenght,
        y: newY * magnetoTextStrenght,
        ease: Power4.easeOut,
      });
    }
  };

  // Mouse leave handler
  const resetMagneto = () => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;

    if (magneto && magnetoText) {
      // Move the button to its default position
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    }
  };

  return (
    <div>
      {/* Your magneto component structure */}
      <div
        className="border-[2px] magneto dark:text-black dark:bg-white shadow-xl bg-black_primary text-white dark:hover:border-white hover:border-black_primary  group cursor-pointer dark:hover:text-white hover:text-black_primary font-bold w-40 h-40 rounded-full hover:border-[2px] relative overflow-hidden transition-[border, color] duration-500"
        ref={magnetoRef}
        onMouseMove={activateMagneto}
        onMouseLeave={resetMagneto}
      >
        <div className="flex justify-center items-center w-full h-full z-20 absolute">
          <div className="text-center" ref={magnetoTextRef}>
            My Works
          </div>
        </div>
        <div className="w-40 h-40 rounded-full dark:bg-black_primary bg-white_primary opacity-0 group-hover:opacity-100 absolute z-10 translate-y-[160px] group-hover:translate-y-0 transition-[opacity, transform] duration-500 ease-in-out"></div>
      </div>
    </div>
  );
};

export default MagneticButton;
