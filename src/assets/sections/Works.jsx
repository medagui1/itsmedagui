import { projects } from "../constants/links";
import "../../App.css";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";

const Works = () => {
  return (
    <div className="p-16 max-sm:p-8">
      <div className="max-w-[500px] mb-16">
        <h2 className="text-gradient text-5xl font-semibold leading-tight mb-8">
          Selected Projects
        </h2>
        <p>
          I possess the expertise to transform your design concepts into
          functional, professional-grade solutions.
        </p>
      </div>
      <div className="flex gap-12 mb-12 flex-wrap">
        {projects.map((project) => (
          <ProjectCard key={project.name} image={project.image} name={project.name} code={project.code} live={project.live}/>
        ))}
      </div>
      <div>
        <a href="/projects">
        <Button label={'See more projects'}/>
        </a>
      </div>
    </div>
  );
};

export default Works;
