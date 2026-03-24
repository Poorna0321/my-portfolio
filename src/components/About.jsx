import './About.css'

function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="/about.png" alt="About Me" />
                </div>
                <div className="about-content">
                    <span className="eyebrow">About Me</span>
                    <h2>Who Am I?</h2>
                    <p>
                        I'm Poorna Vidarsha, a final-year Computer Science undergraduate
                        at Wayamba University of Sri Lanka with a GPA of 3.6. I'm passionate
                        about building modern web applications, mobile apps, and IoT systems.
                    </p>
                    <p>
                        I have hands-on experience with the MERN stack, Flutter, PHP/MySQL,
                        and Firebase. I love turning ideas into real, functional products and
                        I'm always eager to learn new technologies.
                    </p>
                    <div className="about-details">
                        <div className="detail">
                            <span className="detail-label">Name</span>
                            <span className="detail-value">Poorna Vidarsha</span>
                        </div>
                        <div className="detail">
                            <span className="detail-label">Email</span>
                            <span className="detail-value">poornavdesilva@gmail.com</span>
                        </div>
                        <div className="detail">
                            <span className="detail-label">University</span>
                            <span className="detail-value">Wayamba University</span>
                        </div>
                        <div className="detail">
                            <span className="detail-label">Degree</span>
                            <span className="detail-value">BSc (Hons) Computer Science</span>
                        </div>
                    </div>
                    <a href="/cv.pdf" className="btn-primary" download>Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default About