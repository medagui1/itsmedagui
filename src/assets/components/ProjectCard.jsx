import Button from "./Button"

const ProjectCard = ({image, name, code, live}) => {
  return (
    <div className="group relative overflow-hidden">
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 project-background opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] flex flex-col justify-end text-white p-8">
              <h1 className="text-4xl font-semibold">{name}</h1>
              <div className="flex gap-4 mt-4">
                <a href={code} target="blank">
                  <Button label={"Source Code"} isGradient={false} />
                </a>
                <a href={live} target="blank">
                  <Button label={"View Live"} />
                </a>
              </div>
            </div>
          </div>
  )
}

export default ProjectCard