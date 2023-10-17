import { projects } from "../constants/links";
import "../../App.css";

const Works = () => {
  return (
    <div className="p-16">
      <div className="max-w-[500px] mb-16">
        <h2 className="text-gradient text-5xl font-semibold leading-tight mb-8">
          Selected Projects
        </h2>
        <p>
          I possess the expertise to transform your design concepts into
          functional, professional-grade solutions.
        </p>
      </div>
      <div className="flex gap-12 flex-col">
        {projects.map((project) => (
          <div className="group relative rounded-[20px] overflow-hidden">
            <img
              src={project.image}
              alt=""
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end text-white">
              <h1 className="">Something</h1>
              <h1>Something</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
