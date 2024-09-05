import React, { useEffect, useRef, useState } from "react";
import MenuButton from "../components/MenuButton";
import { navLinks } from "../constants/links";
import NavArrow from "../components/NavArrow";
import { splitTextIntoSpans } from "../utilities/splitTextIntoSpans";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 0) {
      // User is scrolling down
      setIsVisible(false);
    } else {
      // User is scrolling up
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {}, []);

  useGSAP(() => {
    splitTextIntoSpans(logoRef, "");
    const tl = gsap.timeline();
    tl.fromTo(
      "#logo span",
      {
        opacity: 0,
        // y: "100%",
        scale : 0.2
      },
      {
        opacity: 1,
        scale : 1,
        // y: 0,
        delay: 0.2,
        duration: 0.4,
        stagger: 0.1,
      }
    );
    tl.fromTo(
      "#menu-button",
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        duration : 0.4,
        x: 0,
      }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Disable scrolling when menu is open
  };

  return (
    <header
      className={`flex h-[104px] bg-black_primary justify-between p-8 w-full fixed top-0 transition-transform duration-300 z-[20] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      ref={headerRef}
    >
      <a
        href="/"
        className="title text-2xl font-bold overflow-hidden"
        ref={logoRef}
        id="logo"
      >
        MedAgui.
      </a>
      <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <nav
        className={` absolute mt-[104px] top-0  p-8 right-0 dark:bg-black_primary bg-white_primary h-[100vh] w-full z-[20] duration-500 transition-transform ease-in-out ${
          isMenuOpen
            ? " translate-x-0 delay-0"
            : "translate-x-[100%] delay-[.6s] "
        }`}
        id="menu"
      >
        <ul>
          {navLinks.map((item, index) => (
            <li
              key={`${index}_${item.name}`}
              className="border-b-[1px] border-black_primary dark:border-white_primary last:border-b-0"
            >
              <a
                href={item.link}
                onClick={toggleMenu}
                className={` nav-link transition-[transform, opacity] duration-500 ease-in-out  text-4xl py-6 flex items-center gap-4
                    ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-[600px] opacity-0"
                    }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                aria-label={`Navigate to ${item.name}`}
              >
                <div className="flex items-end gap-3">
                  <p className="title">{item.name}</p>
                  <p className="text-sm text-end text-[#e5f4e380] mb-[6px] ">
                    (0{index + 1})
                  </p>
                </div>

                {/* Empty div responsible for creating the space between the link name and the arrow on hover */}
                <div className="nav-link-space"></div>

                {/* Nav arrow */}
                <NavArrow />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
