import "../../App.css";
import Button from "../components/Button";

const Hero = () => {
  return (
    <header className="flex gap-8 justify-between items-center p-16 max-sm:p-8" id="home" data-aos='fade-down'>
      <div className="max-w-[600px] typewriter">
        <h2 className="text-6xl  mb-5 font-bold max-sm:text-[48px] max-sm:leading-[55px] leading-[65px]">
          <span className="text-gradient">Hello, I'm MedAgui,</span>
          <br />
          Full Stack Web Developer
        </h2>
        <p className="text-xl">
          Experienced full-stack developer skilled in delivering end-to-end
          digital solutions for a seamless user experience.
        </p>
        <div className="flex gap-4 mt-8 flex-wrap">
          <Button label={"GET IN TOUCH"} isGradient={true}/>
          <Button label={"VIEW ALL WORKS"}/>
        </div>
      </div>
      



    </header>
  );
};

export default Hero;
