import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro">
        <h2>About Me</h2>
        <p>
          Hi, I’m <span className="highlight">Prakash Mishra</span>, a passionate Frontend Developer specializing in creating visually stunning and highly interactive web applications. I have experience working with React.js, JavaScript, CSS, and the MERN stack, bringing modern and responsive designs to life.

I love crafting seamless user experiences with animations, responsiveness, and clean UI/UX. Currently, I'm working on e-commerce platforms, product pages, and interactive web applications to enhance my skills.

I’m always eager to learn new technologies and collaborate on exciting projects. Let's build something amazing together! 🚀
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">HTML5</div>
          <div className="skill-item">CSS3</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React.js</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Express.js</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">Git & GitHub</div>
        </div>
      </section>
    </div>
  );
};

export default About;
