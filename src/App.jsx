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
import UpgradeSoonBanner from "./assets/components/UpgradeSoonBanner";
import Header from "./assets/sections/Header";
import Portfolio from "./assets/sections/Works";

function App() {

  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Portfolio />
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
