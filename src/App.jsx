import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AboutMe,
  CallToAction,
  Footer,
  Hero,
  Nav,
  Works,
} from "./assets/sections/index";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoCarousel from "./assets/components/LogoCarousel";

function App() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 400, delay: 200 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than a certain amount
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <main className="font-raleway dark:text-white text-black_primary bg-white_primary dark:bg-black_primary max-w-[1280px] ">
      <nav className={`sticky top-0 bg-black_primary z-50  ${isScrolled && "nav-shadow"}`}>
        <Nav />
      </nav>
      <Hero />
      <Works />
      <AboutMe />
      <section>
        <CallToAction />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
