import React from 'react';
import './css/AboutMe.css';
import Pic from './images/profilePic.jpeg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="profile-image">
        <img src={Pic} alt="Sonoely Merry, a passionate web developer" />
      </div>

      <div className="bio-container">
        <h2>About Me</h2>
        <p>
          Hi, I'm Sonoely Merry, a passionate web developer specializing in front-end development using React & JavaScript. I love solving problems and building dynamic, user-friendly applications.
        </p>
      </div>

      <div className="skills-container">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (React, Node.js, Axios)</li>
          <li>HTML, CSS, Tailwind & Bootstrap</li>
          <li>Git, GitHub, & Heroku</li>
          <li>APIs & JSON</li>
          <li>Project Management</li>
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>Time Management</li>
          <li>Responsive Web Design & Backend Coding</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
