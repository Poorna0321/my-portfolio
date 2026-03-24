import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"


function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App