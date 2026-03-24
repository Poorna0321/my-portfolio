import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const validate = () => {
        let errors = {}
        if (!formData.name) errors.name = 'Name is required'
        if (!formData.email) errors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid'
        if (!formData.message) errors.message = 'Message is required'
        return errors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate()
        if (Object.keys(errors).length > 0) {
            setErrors(errors)
        } else {
            setErrors({})
            setLoading(true)
            emailjs.send(
                'service_jv319v6',
                'template_tahnbdp',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                '0N0bPdhG4h-fuoQBR'
            ).then(() => {
                setLoading(false)
                setSuccess(true)
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setSuccess(false), 3000)
            }).catch(() => {
                setLoading(false)
                alert('Something went wrong. Please try again!')
            })
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section className="contact" id="contact">
            <div className="contact-header">
                <span className="contact-eyebrow">Get In Touch</span>
                <h2>Contact Me</h2>
            </div>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's work together!</h3>
                    <p>I'm currently looking for internship opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <MdEmail />
                            <span>poornavdesilva@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <MdPhone />
                            <span>+94 76 843 5434</span>
                        </div>
                        <div className="contact-item">
                            <MdLocationOn />
                            <span>Kalutara, Sri Lanka</span>
                        </div>
                    </div>
                    <div className="contact-socials">
                        <a href="https://github.com/Poorna0321" target="_blank"><FaGithub /></a>
                        <a href="https://linkedin.com/in/poorna-vidarsha" target="_blank"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="contact-form-wrapper">
                    {success && <div className="success-msg">✅ Message sent successfully!</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows="5"></textarea>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact