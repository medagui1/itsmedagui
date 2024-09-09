import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import NavArrow from "./NavArrow";
import ProjectCardArrow from "./ProjectCardArrow";
import TagCard from "./TagCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { splitTextIntoSpans } from "../utilities/splitTextIntoSpans";

const ProjectCard = ({ project, index }) => {
  const [transformOrigin, setTransformOrigin] = useState("50% 50%");
  const imgContainerRef = useRef(null);
  const imgRef = useRef(null);
  const projectNameRef = useRef(null);

  // this function is responsible for calculating the transform origin percents
  // so that there is a smooth on hover effect on images
  const handleMouseMove = (e) => {
    const rect = imgContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Get the x coordinate relative to the image
    const y = e.clientY - rect.top; // Get the y coordinate relative to the image

    // Calculate the transform origin
    const originX = (x / rect.width) * 100;
    const originY = (y / rect.height) * 100;

    // Update the transform origin state
    setTransformOrigin(`${originX}% ${originY}%`);
  };

  useGSAP(() => {
    splitTextIntoSpans(projectNameRef, "");

    const imageSelector = document.querySelector(`.project-img-${index}`);

    gsap.fromTo(
      imageSelector,
      {
        scale: 0.2,
        opacity: 0,
        transformOrigin: "left bottom",
      },
      {
        duration: 0.4,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: imageSelector,
          start: "top bottom",
          end: "top 70%",
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.project-name-${index}`,
        start: "top 95%",
        end: "top 80%",
        scrub: 1,
      },
    });

    tl.fromTo(
      `.project-name-${index} span`,
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        stagger: 0.1,
      }
    );
    tl.fromTo(
      `.arrow-container-${index}`,
      {
        opacity: 0,
        scale: 0.2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
      }
    );

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      className={`sticky bg-black_primary`}
      style={{ top: `${index * 100 + 72}px` }}
    >
      <hr className="bg-white_primary h-[1px] mt-8" />
      <div className="flex py-4 flex-wrap">
        <div className="w-full py-4 pr-4 flex gap-4 items-center">
          <a className="flex gap-4 items-first-baseline my-2" href="#">
            <h3
              className={`title text-right text-3xl project-name-${index}`}
              ref={projectNameRef}
            >
              {" "}
              {project.name}{" "}
            </h3>
            <div className={`arrow-container-${index}`}>
              <ProjectCardArrow />
            </div>
          </a>
        </div>
        <div
          className={`overflow-hidden project-img-${index}`}
          ref={imgContainerRef}
          onMouseMove={handleMouseMove}
        >
          <img
            src={project.image}
            alt=""
            className={`w-full h-full golden `}
            style={{ transformOrigin }}
            ref={imgRef}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
