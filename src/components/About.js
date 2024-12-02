import React from 'react';
import '../styles/About.css';

function About() {
  const skills = [
    'React', 
    'JavaScript', 
    'TypeScript', 
    'Node.js', 
    'HTML5', 
    'CSS3', 
    'Python',
    'Docker',
    'AWS'
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with 5+ years of experience 
              creating innovative digital solutions. My journey in tech 
              began with a curiosity to solve complex problems through 
              elegant code and user-centric design.
            </p>
            <p>
              I specialize in full-stack development, with a strong focus 
              on creating responsive, performant, and scalable web applications. 
              My approach combines technical expertise with creative problem-solving.
            </p>
          </div>
          <div className="skills-section">
            <h3>Technologies I Work With</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;