import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section id="how-it-works">
      <div className="container">
        <div className="section-heading">
          <h2>How Our <span className="text-gradient">AI SEO Audit</span> Works</h2>
          <p>Our AI analyzes your website, competitors, and search trends to deliver a custom action plan for higher rankings.</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon"><FaSearch /></div>
            <div className="benefit-value">Site Scan</div>
            <div className="benefit-label">We crawl your site for technical, content, and UX issues.</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><FaBrain /></div>
            <div className="benefit-value">AI Analysis</div>
            <div className="benefit-label">Our AI benchmarks you against top competitors and search trends.</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><FaListAlt /></div>
            <div className="benefit-value">Action Plan</div>
            <div className="benefit-label">You get a prioritized checklist for fast SEO wins.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
