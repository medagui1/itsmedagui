import { useEffect, useState } from "react";
import "./App.css";
import {
  AboutMe,
  CallToAction,
  Footer,
  Hero,
  Nav,
  Works,
} from "./assets/sections/index";
import Header from "./assets/sections/Header";
import Portfolio from "./assets/sections/Works";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import CustomCursor from "./assets/components/CustomCursor";

gsap.registerPlugin(ScrollTrigger)

function App() {

  const [isScrolled, setIsScrolled] = useState(false)

  // gsap.globalTimeline;

  return (
    <main className="">
      <Header />
      <Hero />
      <Portfolio />
      <CustomCursor />
    </main>
    // <main className="font-raleway dark:text-white text-black_primary bg-white_primary dark:bg-black_primary max-w-[1280px] " style={{overflowX : 'hidden'}}>
    //   <UpgradeSoonBanner />
    //   <nav className={`z-50 mt-16 ${isScrolled && "nav-shadow"}`}>
    //     <Nav />
    //   </nav>
    //   <Hero />
    //   <Works />
    //   <AboutMe />
    //   <section>
    //     <CallToAction />
    //   </section>
    //     <Footer />
    // </main>
  );
}

export default App;
