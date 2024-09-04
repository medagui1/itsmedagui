import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (cursor) {
        setTimeout(() => {
          cursor.style.top = `${e.clientY}px`;
          cursor.style.left = `${e.clientX}px`;
        }, 100);
      }
      // Enable the cursor when the mouse moves
      setIsDisabled(false);
    };

    const handleMouseOver = () => setIsHovered(true);
    const handleMouseOut = () => setIsHovered(false);

    const handleMouseLeave = () => setIsDisabled(true);
    const handleMouseEnter = () => setIsDisabled(false);

    // Use event listeners directly on relevant elements
    const elements = [
      ...document.querySelectorAll("a"),
      ...document.querySelectorAll("button"),
    ];
    elements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    });

    // Add the global mouse move and leave listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      // Cleanup event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      elements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovered ? "hovered" : ""} ${
        isDisabled ? "disabled" : ""
      }`}
      ref={cursorRef}
      data-cursor
    ></div>
  );
};

export default CustomCursor;
