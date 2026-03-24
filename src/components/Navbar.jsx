import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'

import { useState } from 'react'
import './Navbar.css'

function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span>Poorna<span className="accent">Vidarsha</span></span>
            </div>
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About me</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact me</a></li>
            </ul>
            <div className="navbar-right">
                <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
                </button>
                <button className="btn-hire">Hire me</button>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar