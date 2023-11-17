import "../../App.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex gap-8 justify-between items-center p-16">
      <div className="max-w-[600px] ">
        <h2 className="text-6xl font-semibold leading-tight mb-5">
          <span className="text-gradient">Hello, I'm MedAgui,</span>
          <br />
          Full Stack Web Developer
        </h2>
        <p>
          Experienced full-stack developer skilled in delivering end-to-end
          digital solutions for a seamless user experience.
        </p>
        <div className="flex gap-4 mt-8">
          <Button label={"GET IN TOUCH"} isGradient={true}/>
          <Button label={"VIEW ALL WORKS"}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
