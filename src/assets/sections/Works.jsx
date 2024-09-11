import { projects } from "../constants/links";
import ProjectCard from "../components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Works = () => {
  const [titleHeight, setTitleHeight] = useState(0);
  const titleRef = useRef(null)

  useEffect(() => {
    const height = titleRef.current.offsetHeight;
    setTitleHeight(height)
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".works_title span",
      {
        opacity: 0,
        y: "100%",
      },
      {
        opacity: 1,
        duration: 0.4,
        y: 0,
        scrollTrigger: {
          trigger: ".works_title",
          start: "top 80%",
        },
      }
    );
  }, []);

  // TODO
  // It is my first time using sticky position
  // there will be some layout errors
  // but i will fix them afterwards

  return (
    <section id="projects" className="mt-widest">
      <h2  ref={titleRef} className="title text-4xl text-text_primary overflow-hidden works_title sticky z-20 bg-black_primary p-normal top-0">
        <span className="inline-block translate-y-[100%]">Selected Works.</span>
      </h2>
      <ul className="project_container px-normal relative">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard project={project} key={index} index={index} titleHeight={titleHeight} />
        ))}
      </ul>
    </section>
  );
};

export default Works;
