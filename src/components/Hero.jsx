import './Hero.css'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import profileImg from '../assets/profile.png'

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-greeting">Hi I am</p>
                <h1 className="hero-name">Poorna Vidarsha</h1>
                <h2 className="hero-title">Full Stack <span className="accent">Developer</span></h2>
                <div className="hero-socials">
                    <a href="https://github.com/Poorna0321" target="_blank"><FaGithub /></a>
                    <a href="https://linkedin.com/in/poorna-vidarsha" target="_blank"><FaLinkedin /></a>
                    <a href="#" target="_blank"><FaFacebook /></a>
                </div>
                <div className="hero-buttons">
                    <a href="#contact" className="btn-primary">Hire Me</a>
                    <a href="/cv.pdf" className="btn-secondary" download>
                        <HiDownload /> Download CV
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <h3>5+</h3>
                        <p>Projects Done</p>
                    </div>
                    <div className="stat">
                        <h3>3+</h3>
                        <p>Years Learning</p>
                    </div>
                    <div className="stat">
                        <h3>10+</h3>
                        <p>Technologies</p>
                    </div>
                </div>
            </div>
            <div className="hero-image">

                <img src={profileImg} alt="Poorna Vidarsha" />
            </div>
        </section >
    )
}

export default Hero