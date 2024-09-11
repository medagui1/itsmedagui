import "./App.css";
import CardStacking from "./assets/sections/CardStacking";
import {
  Header,
  CustomCursor,
  Hero,
  Works,
} from "./assets/sections/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
    </main>
  );
}

export default App;

// https://codepen.io/snorkltv/pen/GRwqWeo