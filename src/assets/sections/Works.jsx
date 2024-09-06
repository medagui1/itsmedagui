import React from "react";
import { projects } from "../constants/links";
import ProjectCard from "../components/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Works = () => {
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
    <section id="projects" className="p-8 relative">
      <h2 className="title text-4xl text-text_primary overflow-hidden works_title sticky pt-8 pb-4 top-0 z-20 bg-black_primary">
        <span className="inline-block translate-y-[100%]">Selected Works.</span>
      </h2>
      <ul className="">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default Works;
