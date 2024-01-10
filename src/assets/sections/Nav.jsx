import Button from "../components/Button";
import { navLinks } from "../constants/links";
import '../../App.css'
import MenuButton from "../components/MenuButton";

const Nav = () => {
  return (
    <div
      className="flex justify-between items-center  py-8 px-16 max-sm:px-8 max-sm:py-8"
      data-aos="fade-down"
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
        <Button label={"LET'S TALK"} isInversed={true} />
      </div>
      <div className="sm:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default Nav;
