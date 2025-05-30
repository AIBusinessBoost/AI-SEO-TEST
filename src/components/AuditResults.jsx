import React, { useState } from 'react';
import { FaChartLine, FaUsers, FaTrophy } from 'react-icons/fa';

const AuditResults = ({ isVisible, websiteScore, potentialTraffic, competitorGap }) => {
  if (!isVisible) return null;
  
  return (
    <section id="audit-results">
      <div className="container" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <div className="results-container" style={{width: '100%'}}>
          <h2 style={{color: '#fff'}}>Your Website Analysis</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">
                <FaChartLine />
              </div>
              <div className="metric-value" id="websiteScore">{websiteScore}</div>
              <div className="metric-label">Website Score</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">
                <FaUsers />
              </div>
              <div className="metric-value" id="potentialTraffic">{potentialTraffic}</div>
              <div className="metric-label">Potential Monthly Visitors</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">
                <FaTrophy />
              </div>
              <div className="metric-value" id="competitorGap">{competitorGap}%</div>
              <div className="metric-label">Competitor Gap</div>
            </div>
          </div>
          <div className="email-capture">
            <h3>Get Your Full Report</h3>
            <p>Enter your email to receive the complete audit with actionable recommendations:</p>
            <div className="email-form">
              <input type="email" id="userEmail" placeholder="your@email.com" required />
              <button id="sendReportBtn" className="cta-button">Send My Report</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditResults;
