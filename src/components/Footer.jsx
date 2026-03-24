import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <span className="footer-logo">Poorna<span className="accent">Vidarsha</span></span>
                <ul className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer-socials">
                    <a href="https://github.com/Poorna0321" target="_blank"><FaGithub /></a>
                    <a href="https://linkedin.com/in/poorna-vidarsha" target="_blank"><FaLinkedin /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Poorna Vidarsha. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer