import './Skills.css'
import { FaReact, FaNodeJs, FaPhp, FaGitAlt } from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import { SiMongodb, SiMysql, SiFirebase, SiJavascript, SiPython } from 'react-icons/si'

const skills = [
    { icon: <FaReact />, name: 'React', level: 85 },
    { icon: <FaNodeJs />, name: 'Node.js', level: 80 },
    { icon: <SiJavascript />, name: 'JavaScript', level: 90 },
    { icon: <SiPython />, name: 'Python', level: 75 },
    { icon: <FaPhp />, name: 'PHP', level: 75 },
    { icon: <SiFlutter />, name: 'Flutter', level: 80 },
    { icon: <SiMongodb />, name: 'MongoDB', level: 75 },
    { icon: <SiMysql />, name: 'MySQL', level: 80 },
    { icon: <SiFirebase />, name: 'Firebase', level: 75 },
    { icon: <FaGitAlt />, name: 'Git', level: 86 },
]

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills-header">
                <span className="eyebrow">My Skills</span>
                <h2>What I Work With</h2>
            </div>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                        </div>
                        <span className="skill-percent">{skill.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills