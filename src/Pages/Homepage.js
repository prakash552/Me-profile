import React from 'react';
import '../Styles/Homepage.css';
import { Link } from 'react-router-dom';
import profileImage from '../Assets/me.jpg';


const Home = () => {
  return (
	<div className="home-container">
	{/* Hero Section */}
  <section className="hero">
  <div className="hero-content">
    <div className="hero-image-container">
      <img
        src={profileImage}
        alt="Prakash Mishra"
        className="hero-image"
      />
    </div>
    <div className="hero-text">
      <h1>
        Hi, I'm <span className="highlight">Prakash Mishra</span>
      </h1>
      <p className="hero-subtitle">
        A passionate <span className="highlight">Frontend Developer</span> specializing in the
        <span className="highlight"> MERN Stack</span>.
      </p>
      <a href="../PRAKASH-MISHRA-FlowCV-Resume-20241116.pdf" className="cta-button" download="Prakash_Mishra_Resume.pdf">Download My Resume</a>
 
    </div>
  </div>
</section>


	 {/* Qualifications Section */}
   <section className="qualifications" id="qualifications">
        <h2>Qualifications</h2>
        <div className="qualification-list">
          <div className="qualification-item">
            <h3>School</h3>
            <p>Shambhu Dayal Inter College, 2019 - 2023</p>
          </div>
          <div className="qualification-item">
            <h3>College</h3>
            <p>KCC Institutes, BCA (2023 - 2026)</p>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="internships" id="internships">
        <h2>Internship Experience</h2>
        <div className="internship-list">
          <div className="internship-item">
            <h3>Frontend Developer Intern</h3>
            <p>None</p>
          </div>
          <div className="internship-item">
            <h3>Web Development Intern</h3>
            <p>None</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Get in Touch</h2>
        <p>"Thank you for exploring my work! If you’re looking for a passionate and dedicated developer to bring your ideas to life, I’d love to hear from you. Whether it’s a collaboration, project inquiry, or just a quick hello, feel free to reach out. Let’s create something extraordinary together!" feel free to contact me!</p>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </section>
	
  </div>
);
};

export default Home;
