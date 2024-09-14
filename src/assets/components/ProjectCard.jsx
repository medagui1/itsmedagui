import { useEffect, useRef, useState } from "react";
import ProjectCardArrow from "./ProjectCardArrow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { splitTextIntoSpans } from "../utilities/splitTextIntoSpans";

const ProjectCard = ({ project, index, titleHeight }) => {
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

    // splitting each project name into different characters so that they are animated separately
    splitTextIntoSpans(projectNameRef, "");

    const imageSelector = document.querySelector(`.project-img-${index}`);

    // animating the project image
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
          end: "top 80%",
        },
      }
    );

    // creating a timeline to animate the project name on scroll
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
    <li 
    className={`sticky z-[30] project_card top-0`}
    style={{ top : index * 80 + titleHeight }}
    >
      <div
      className={`bg-black_primary`}
    >
      <hr className="bg-white_primary h-[1px]" />
      <div className="flex flex-wrap">
        <div className="w-full flex gap-4 items-center py-normal">
          <a className="flex gap-4 items-first-baseline" href="#">
            <h3
              className={`title text-right text-3xl project-name-${index}`}
              ref={projectNameRef}
            >
              {project.name}
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
            className={`golden`}
            style={{ transformOrigin }}
            ref={imgRef}
          />
        </div>
      </div>
    </div>
    </li>
  );
};

export default ProjectCard;
