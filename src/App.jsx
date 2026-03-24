import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default App