import { useGSAP } from "@gsap/react";
import { my_informations } from "../constants/links";
import { useRef } from "react";
import gsap from "gsap";

const Stats = () => {
  const projectsRef = useRef(null);
  const projectsCount = 15;
  const experienceRef = useRef(null);
  const experienceCount = 4;
  const satisfactionRef = useRef(null);
  const satisfactionCount = 100;

  useGSAP(() => {
    // Projects timeline
    const projectsTl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 90%",
        end: "top 80%",
      },
    });
    projectsTl.to(projectsRef.current, {
      duration: 1,
      innerHTML: projectsCount,
      snap: "innerHTML",
      ease: "power1.inOut",
    });
    projectsTl.fromTo(
      ".plus",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
      }
    );

    // Experience Timeline
    const experienceTl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 90%",
        end: "top 80%",
      },
    });
    experienceTl.to(experienceRef.current, {
      duration: 1,
      innerHTML: experienceCount,
      snap: "innerHTML",
      ease: "power1.inOut",
    });
    experienceTl.fromTo(
      ".xp_plus",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
      }
    );

    // Satisfaction Timeline
    const satisfactionTl = gsap.timeline({
      scrollTrigger: {
        trigger: satisfactionRef.current,
        start: "top 90%",
        end: "top 80%",
      },
    });
    satisfactionTl.to(satisfactionRef.current, {
      duration: 2,
      innerHTML: satisfactionCount + '%',
      snap: "innerHTML",
      ease: "power1.inOut",
    });
  }, []);
  return (
    <section className="p-normal mt-widest">
      {/* {my_informations.map((information, index) => (
        <div className="" key={index}>
          <h3 className="title text-4xl text-text_primary">
            {information.title}.
          </h3>
          <p className="text-3xl text ">
            {information.content}
          </p>
        </div>
      ))} */}
      <h3 className="title text-4xl text-text_primary">Projects Done.</h3>
      <div className="text-3xl text mt-wide flex gap-1 items-baseline">
        <p className="" ref={projectsRef}>
          0
        </p>
        <p className="plus">+</p>
      </div>
      <h3 className="title text-4xl text-text_primary mt-widest">
        Experience.
      </h3>
      <div className="text-3xl text mt-wide flex gap-1 items-baseline">
        <p className="" ref={experienceRef}>
          0
        </p>
        <p className="xp_plus">+</p>
      </div>
      <h3 className="title text-4xl text-text_primary mt-widest">Clients Satisfaction.</h3>
      <div className="text-3xl text mt-wide flex gap-1 items-baseline">
        <p className="" ref={satisfactionRef}>
          0
        </p>
      </div>
      <div className="h-[100vh] "></div>
    </section>
  );
};

export default Stats;
