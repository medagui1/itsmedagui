import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AboutMe, CallToAction, Footer, Hero, Nav, Works} from './assets/sections/index'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LogoCarousel from './assets/components/LogoCarousel'

function App() {

  

  useEffect(() => {
    AOS.init({duration : 400, delay : 200})
  }, [])
  

  return (
    <main className="font-raleway dark:text-white text-black_primary bg-white_primary dark:bg-black_primary max-w-[1280px] ">
        <Nav />
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
  )
}

export default App
