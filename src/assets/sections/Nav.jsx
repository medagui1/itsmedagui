import Button from "../components/Button";
import { navLinks } from "../constants/links";
import "../../App.css";
import MenuButton from "../components/MenuButton";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
     return () => {
      document.body.style.overflow = 'auto'
     }
  }, [isMenuOpen])

  return (
    <div className="relative">
      <div
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
                className="hover:text-[#b5b5b5] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="max-sm:hidden">
          {/*  */}
          <a href="mailto:ismailregragui37@gmail.com">
            <Button label={"LET'S TALK"} isInversed={true} />
          </a>
        </div>
        <div className="sm:hidden">
          <MenuButton setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </div>
      </div>
      <div
        className={`flex flex-col bg-black_primary z-[100] h-[90vh] absolute right-0 w-full justify-center items-center gap-16 text-2xl transition-[right] duration-500 ease-in-out
        ${isMenuOpen 
        ? "right-[0px]" 
        : "right-[-100vw] "}`}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.link}
            className={`hover:text-[#b5b5b5] translate-x-[-200px] opacity-0 ${isMenuOpen && 'translate-x-[0px] opacity-100'} transition-[transform, opacity] duration-[.6s]  ease-in-out`}
            style={{'transitionDelay' : `${index * 80}ms `}}
            >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
