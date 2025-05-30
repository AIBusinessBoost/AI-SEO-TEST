import React from 'react';
import { FaRocket, FaLightbulb } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';

const Benefits = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <section id="benefits">
      <div className="container">
        <div className="section-heading">
          <h2>Why Choose <span className="text-gradient">Our AI SEO</span>?</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon"><FaRocket /></div>
            <div className="benefit-value">Faster Results</div>
            <div className="benefit-label">AI identifies opportunities quicker than traditional methods.</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><FaLightbulb /></div>
            <div className="benefit-value">Smarter Insights</div>
            <div className="benefit-label">Uncover hidden SEO opportunities with AI-driven analysis.</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><FaChartSimple /></div>
            <div className="benefit-value">Improved Rankings</div>
            <div className="benefit-label">Optimize your site to rank higher in search engine results.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
