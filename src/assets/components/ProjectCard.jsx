import Button from "./Button";
import TagCard from "./TagCard";

const ProjectCard = ({ project }) => {
  // return (
  //   <div className="group relative overflow-hidden">
  //     <img src={image} alt="" className="object-cover w-full h-full " />
  //     <div className="absolute inset-0 project-backgroundnp opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] flex flex-col justify-end text-white p-8">
  //       <h1 className="text-4xl font-semibold">{name}</h1>
  //       <div className="flex gap-4 mt-4">
  //         <a href={code} target="blank">
  //           <Button label={"Source Code"} isGradient={false} />
  //         </a>
  //         <a href={live} target="blank">
  //           <Button label={"View Live"} />
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex p-6 shadow-xl bg-white_secondary dark:bg-black_secondary rounded-xl max-lg:flex-col gap-12">
      <img
        src={project.image}
        alt=""
        className="w-[50%] object-cover rounded-[12px] h-[300px] max-lg:w-full "
      />
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="font-bold text-2xl">{project.name}</h3>
        <p>{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <TagCard tag={tag} />
          ))}
        </div>
        <div className="flex gap-8 mt-8 flex-wrap max-sm:gap-4">
          <button className="bg-black_primary dark:bg-white_primary px-8 py-4 text-white_secondary dark:text-black_secondary rounded-xl font-semibold">
            <a href={project.live}>Website</a>
          </button>
          <button className="bg-white_secondary dark:bg-black_secondary px-8 py-4 text-black_secondary dark:text-white_secondary rounded-xl font-semibold border-[1px] border-black_secondary dark:border-white_secondary">
            <a href={project.code}>Github</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
