import "./App.css";
import {
  Header,
  CustomCursor,
  Hero,
  Works,
} from "./assets/sections/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Stats from "./assets/sections/Stats";

// registering ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function App() {

  const headerHeight = 104
  return (
    <main>
      <Header headerHeight={headerHeight}/>
      <Hero headerHeight={headerHeight}/>
      <Works />
      <CustomCursor />
      <Stats />
    </main>
  );
}

export default App;