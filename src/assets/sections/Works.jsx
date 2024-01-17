import { projects } from "../constants/links";
import ProjectCard from "../components/ProjectCard";

const Works = () => {
  return (
    <section className="p-16 max-sm:p-8" id="projects">
      <div className="max-w-[500px] mb-10">
        <h2 className="text-gradient text-5xl font-semibold leading-tight mb-6" data-aos='fade-down'>
          Selected Projects
        </h2>
        <p className="text-xl" data-aos='fade-down'>
          I possess the expertise to transform your design concepts into
          functional, professional-grade solutions.
        </p>
      </div>
      <div className="flex gap-12 flex-col max-sm:gap-8">
        {projects.slice(0,3).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div>
      </div>
    </section>
  );
};

export default Works;
