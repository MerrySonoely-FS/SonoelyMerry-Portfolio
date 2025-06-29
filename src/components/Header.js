import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/Header.css';
import SM from './images/SM.png';

const Header = ({ siteTitle }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={SM} alt="Logo" className="header-logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="social-media">
        <a href="https://github.com/MerrySonoely-FS" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="http://linkedin.com/in/sonoely-merry-13341136b" target="_blank" rel="noopener noreferrer" aria-label="Visit my Linked-In profile">
          <i className="fab fa-github"></i> LinkedIn
        </a>
        <a
            href="/resume/SonoelyMerryResume-3.pdf"
            download="Sonoely_Merry_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: 'My Portfolio',
};

export default Header;
