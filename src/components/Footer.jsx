import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="#" className="footer-logo">
          <svg className="footer-logo-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="#232738" stroke="#0ce6e6" strokeWidth="4"/>
            <ellipse cx="24" cy="24" rx="10" ry="16" fill="none" stroke="#0ce6e6" strokeWidth="3"/>
            <circle cx="24" cy="24" r="5" fill="#ffd12a"/>
            <rect x="22" y="4" width="4" height="8" rx="2" fill="#0ce6e6"/>
            <rect x="22" y="36" width="4" height="8" rx="2" fill="#0ce6e6"/>
            <rect x="4" y="22" width="8" height="4" rx="2" fill="#0ce6e6"/>
            <rect x="36" y="22" width="8" height="4" rx="2" fill="#0ce6e6"/>
          </svg>
          <span>AI Boost Business</span>
        </a>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
