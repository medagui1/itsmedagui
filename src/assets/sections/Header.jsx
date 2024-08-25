import React, { useEffect, useRef, useState } from "react";
import MenuButton from "../components/MenuButton";
import { navLinks } from "../constants/links";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Getting the height of the header so that the sliding nav get below it
  useEffect(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
      console.log(headerHeight);
    }
  }, [isMenuOpen, headerRef]);

  return (
    <header
      className="flex justify-between p-8  w-full relative h-full"
      ref={headerRef}
    >
      <a href="/" className="title text-2xl font-bold">
        MedAgui.
      </a>
      <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <nav
        className={`absolute p-8 top-0 right-0 bg-black_primary h-[600px] w-[100%] z-[2] duration-200 transition-transform ease-in-out ${
          isMenuOpen ? " translate-x-0 " : "translate-x-[100%] "
        }`}
        style={{ marginTop: `${headerHeight}px` }}
      >
        <ul>
          {navLinks.map((item, index) => (
            <li
              key={`${index}_${item.name}`}
              className="border-b-[1px] last:border-b-0"
            >
              <a
                href={item.link}
                onClick={toggleMenu}
                className={` nav-link transition-[transform, opacity] duration-500 ease-in-out title text-4xl py-6 flex items-center gap-4
                    ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[600px] opacity-0"
                    }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
                aria-label={`Navigate to ${item.name}`}
              >
                <p>{item.name}</p>

                {/* Empty div responsible for creating the space between the link name and the arrow on hover */}
                <div className="nav-link-space"></div>

                {/* Nav arrow */}
                <div className="nav-arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
