import './Projects.css'

const projects = [
    {
        title: 'Fitness Sports Center',
        description: 'A responsive promotional website for a local gym brand with dark/light mode, animations and contact form.',
        tags: ['React', 'CSS', 'Vite'],
        github: 'https://github.com/Poorna0321/fitness-sports-center',
        live: 'https://fitness-sports-center-nine.vercel.app/',
        image: '/gym.png'
    },
    {
        title: 'Event Seat Booking App',
        description: 'A real-time seat booking system with dynamic seat layout, user authentication and booking management.',
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/Poorna0321',
        live: null,
        image: '/seat.png'
    },
    {
        title: 'MoodWave',
        description: 'A Flutter app that detects mood through facial expression analysis and plays personalized music playlists.',
        tags: ['Flutter', 'Firebase', 'Google ML Kit'],
        github: 'https://github.com/Poorna0321',
        live: null,
        image: '/moodwave.png'
    },
    {
        title: 'Drug Side Effect Mining',
        description: 'A data mining system to analyze drug side effects from online patient reviews using Python and Selenium.',
        tags: ['Python', 'Selenium', 'Pandas'],
        github: 'https://github.com/Poorna0321',
        live: null,
        image: '/drug.png'
    },
    {
        title: 'Smart Fish Tank',
        description: 'An IoT system to monitor pH, temperature and water level with remote control via Flutter app.',
        tags: ['Flutter', 'Firebase', 'ESP32'],
        github: 'https://github.com/Poorna0321',
        live: null,
        image: '/fish.png'
    },
    {
        title: 'Clothing E-Commerce',
        description: 'A full-stack e-commerce platform with product listing, cart, wishlist and role-based admin panel.',
        tags: ['PHP', 'MySQL', 'JavaScript'],
        github: 'https://github.com/Poorna0321',
        live: null,
        image: '/ecommerce.png'
    },
]

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <span className="projects-eyebrow">My Work</span>
                <h2>Recent Projects</h2>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span className="tag" key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank">GitHub</a>
                                {project.live && <a href={project.live} target="_blank">Live</a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects