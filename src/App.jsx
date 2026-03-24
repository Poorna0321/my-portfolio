import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from './components/Hero.jsx'
import About from './components/About'


function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
    </div>

  )
}

export default App