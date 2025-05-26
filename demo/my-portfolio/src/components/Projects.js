import React from 'react';
import './css/Projects.css';
import memoryLane from './images/memoryLane.png';
import gitHub from './images/github-logo.webp';
import spotify from './images/spotify.png';
import selenium from './images/selenium.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website showcasing my work and skills.',
      image: gitHub,
      link: 'https://github.com/RiveraSonoely-FS/YYMM-WDV349-RiveraSonoely'
    },
    {
      title: 'Memory Lane',
      description: 'My web blog reflecting on my academic career',
      image: memoryLane,
      link: 'https://github.com/RiveraSonoely-FS/memory-lane'
    },
    {
      title: 'Spotify-API',
      description: 'A music search app that pulls related musicians/groups based on searchs - using Spotify API.',
      image: spotify,
      link: 'https://github.com/RiveraSonoely-FS/PP3_SpotifyAPI'
    },
    {
      title: 'Selenium Testing',
      description: 'This Selenium testing project automates the validation of key functionalities in a web application.',
      image: selenium,
      link: 'https://github.com/RiveraSonoely-FS/2.3-SeleniumTesting'
    }
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.title} Thumbnail`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;