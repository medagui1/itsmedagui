import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AboutMe, CallToAction, Footer, Hero, Nav, Works} from './assets/sections/index'

function App() {

  

  return (
    <main className="font-raleway dark:text-white text:black_primary bg-white dark:bg-black_primary max-w-[1280px] ">
      <nav>
        <Nav />
      </nav>
      <header id='home'>
        <Hero />
      </header>
      <section>
        <Works />
      </section>
      <section>
        <AboutMe />
      </section>
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
