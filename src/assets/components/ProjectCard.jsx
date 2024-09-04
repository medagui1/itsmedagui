import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import NavArrow from "./NavArrow";
import ProjectCardArrow from "./ProjectCardArrow";
import TagCard from "./TagCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProjectCard = ({ project, index }) => {
  const [transformOrigin, setTransformOrigin] = useState("50% 50%");
  const imgContainerRef = useRef(null);
  const imgRef = useRef(null)

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

  useEffect(() => {
    const imageSelector = document.querySelector(`.project-img-${index}`);

    gsap.fromTo(
      imageSelector,
      {
        scale: 0.2,
        opacity: 0,
        transformOrigin: "left bottom",
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        // ease: "power2.in",
        scrollTrigger: {
          trigger: imageSelector,
          start: "top 90%",
          end: "top 70%",
        },
      }
    );
    return () => {
      ScrollTrigger.getById(imageSelector)?.kill();
    };
  }, [index]);

  return (
    <div>
      <hr className="bg-white_primary h-[1px] mt-8" />
      <div className="flex py-4 flex-wrap">
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
        <div className="w-full py-4 pr-4 flex gap-4 items-center">
          {/* <div className="w-full h-[1px] bg-white_primary"></div> */}
          <a className="flex gap-4 items-first-baseline my-2" href="#">
            <h3 className="title text-right text-3xl"> {project.name} </h3>
            <ProjectCardArrow />
          </a>
        </div>
        {/* <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <TagCard tag={tag} />
          ))}
        </div> */}
      </div>
    </div>
  );

  // return (
  //   <div className="flex p-6 shadow-xl bg-white_secondary dark:bg-black_secondary rounded-xl max-lg:flex-col gap-12 " data-aos='fade-down'>
  //     <div className="group max-h-[800px] w-[50%]  max-lg:w-full  overflow-hidden  rounded-[12px] ">
  //     <img
  //       loading="lazy"
  //       src={project.image}
  //       alt=""
  //       className="w-full object-cover scale-[1] transition-scale group-hover:scale-[1.2] duration-300 overflow-hidden "
  //       width={550}
  //       height={830}
  //     />
  //     </div>
  //     <div className="flex-1 flex flex-col gap-4">
  //       <h3 className="font-bold text-2xl">{project.name}</h3>
  //       <p>{project.description}</p>
  //       <div className="flex flex-wrap gap-2">
  //         {project.tags?.map((tag) => (
  //           <TagCard tag={tag} />
  //         ))}
  //       </div>
  //       <div className="flex gap-8 mt-8 flex-wrap max-sm:gap-4">
  //         <button aria-label="View Live" className="  bg-black_primary dark:bg-white_primary px-8 py-4 text-white_secondary dark:text-black_secondary rounded-xl font-semibold transition-[transform] hover:scale-[1.1] duration-300">
  //           <a href={project.live}>Website</a>
  //         </button>
  //         <button aria-label="Code in Github" className="bg-white_secondary dark:bg-black_secondary hover:scale-[1.1] px-8 py-4 text-black_secondary dark:text-white_secondary rounded-xl font-semibold border-[1px] border-black_secondary dark:border-white_secondary transition-[transform] scale-100 duration-300">
  //           <a href={project.code}>Github</a>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ProjectCard;
