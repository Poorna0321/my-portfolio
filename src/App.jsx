import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills'


function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark' : 'light'} style={{ minHeight: '100vh' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
    </div>

  )
}

export default App