import React from 'react';
import { FaBolt } from 'react-icons/fa';

const Hero = () => {
  return (
    <header>
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <div className="highlight-badge"><FaBolt /> AI-Powered SEO</div>
            <h1>Get Your Website Ranked Higher in Google, Bing & ChatGPT</h1>
            <p>Our AI-powered SEO audit reveals exactly how to optimize your website for both traditional and AI search engines.</p>
          </div>
          <div className="audit-form">
            <h2>Get Your Free AI SEO Audit</h2>
            <form id="seoAuditForm">
              <div className="form-group">
                <label htmlFor="website">Your Website</label>
                <input type="url" id="website" name="website" placeholder="https://yourwebsite.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="businessType">Business Type</label>
                <input type="text" id="businessType" name="businessType" placeholder="e.g., Law Firm, Restaurant, E-commerce" required />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" placeholder="e.g., Los Angeles, CA" required />
              </div>
              <button type="submit" className="cta-button">Analyze My Website</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
