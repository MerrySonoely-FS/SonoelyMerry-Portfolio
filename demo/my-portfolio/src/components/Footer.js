import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sonoely Merry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
