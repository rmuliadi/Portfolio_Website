import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm John Doe</h1>
        <p>A Full Stack Web Developer</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Home;