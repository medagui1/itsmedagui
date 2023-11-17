import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AboutMe, CallToAction, Footer, Hero, Nav, Works} from './assets/sections/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="font-raleway text-white bg-black_primary">
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
