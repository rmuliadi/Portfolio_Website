import React, { useState } from 'react';
import '../styles/Projects.css';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const projects = [
        {
            title: 'E-Commerce Web App',
            description: 'Full-stack e-commerce Pharmacy App with React and Node.js',
            technologies: ['React', 'Node.js','Express.js', 'MongoDB'],
            github: 'https://github.com/rmuliadi/TestPharmacy',
            //live: 'https://example-ecommerce.com',
            category: 'Full Stack'
        },
        {
            title: 'Generative AI Web App',
            description: 'Real-time weather tracking application',
            technologies: ['Gradio', 'OpenAI', 'Langchain'],
            github: 'https://github.com/rmuliadi/Gen_AI_with_OpenAI_RAG',
            //live: 'https://example-weather-app.com',
            category: 'Full Stack'
        },
        {
            title: 'Monorepo Turborepo Firebase Web App with FrontEnd and BackEnd',
            description: 'Collaborative task tracking platform',
            technologies: ['React', 'Next.js', 'Express.js', 'Firebase', 'Monorepo', 'Turborepo'],
            github: 'https://github.com/rmuliadi/ebuddy_monorepo',
            //live: 'https://example-tasks.com',
            category: 'Full Stack'
        }
    ];

    const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="project-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={activeFilter === category ? 'active' : ''}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                >
                                    GitHub
                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="live-link"
                                >
                                    Live Demo
                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
