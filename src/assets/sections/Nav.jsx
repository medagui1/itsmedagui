import Button from "../components/Button";
import { navLinks } from "../constants/links";
import "../../App.css";
import MenuButton from "../components/MenuButton";
import { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = 'hidden'
    }
    return () => {
      document.body.style.overflow = "auto";

    };
  }, [isMenuOpen]);

  const divRef = useRef(null);
  const [remainingHeight, setRemainingHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (divRef.current) {
        const divHeight = divRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const calculatedRemainingHeight = windowHeight - divHeight;
        setRemainingHeight(calculatedRemainingHeight);
      }
    };

    // Call the updateHeight function on mount
    updateHeight();

    // Attach an event listener to handle window resize
    window.addEventListener("resize", updateHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative ">
      <div
        ref={divRef}
        className={`flex justify-between items-center  py-8 px-16 max-sm:px-8 max-sm:py-8`}
      >
        <div className="flex gap-16 items-center">
          <a href="/">
            <h1 className="font-bold text-2xl  logo duration-300 cursor-pointer">
              MedAgui.
            </h1>
          </a>
          <div className="flex gap-8 max-lg:hidden text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="hover:text-[#b5b5b5] transition-colors duration-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {/*  */}
          <a href="mailto:ismailregragui37@gmail.com" className="max-sm:hidden ">
            <Button label={"LET'S TALK"} isInversed={true} />
          </a>
          <div className="lg:hidden">
          <MenuButton setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </div>
        </div>
        
      </div>

      {/* Toggeable menu  */}
      <div
        className={` bg-black_primary z-[60] absolute w-full transition-[right] duration-[600ms] ease-in-out
        ${isMenuOpen ? "right-[0px]" : "right-[-100vw] "}`}
        style={{ height: remainingHeight }}
      >
        <div className="flex flex-col  justify-center items-center gap-16 text-2xl mt-20">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.link}
              className={`hover:text-[#b5b5b5] translate-x-[-200px] opacity-0 ${
                isMenuOpen && "translate-x-[0px] opacity-100"
              } transition-[transform, opacity] duration-[.6s]  ease-in-out`}
              style={{ transitionDelay: `${index * 80}ms ` }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="absolute bottom-0 flex w-full justify-center items-center mb-8 sm:hidden">
          <a href="mailto:ismailregragui37@gmail.com" className="">
            <Button label={"LET'S TALK"} isInversed={true} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
