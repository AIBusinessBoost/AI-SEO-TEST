import React from 'react';
import { Helmet } from 'react-helmet-async';
import EmailReportForm from '../components/EmailReportForm';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI Boost Business | Boost Your Business with AI</title>
        <meta name="description" content="Transform your business with AI-powered solutions. AI Boost Business helps you leverage artificial intelligence to increase efficiency and drive growth." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="hero">
        <h1>Transform Your Business with AI</h1>
        <p>Leverage artificial intelligence to drive growth and efficiency</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features">
        <div className="feature">
          <h2>AI Solutions</h2>
          <p>Custom AI solutions tailored to your business needs</p>
        </div>
        <div className="feature">
          <h2>Business Growth</h2>
          <p>Drive revenue and efficiency with AI automation</p>
        </div>
        <div className="feature">
          <h2>Expert Support</h2>
          <p>24/7 support from our AI specialists</p>
        </div>
      </div>
      
      <div className="website-analysis">
        <h2>Your Website Analysis</h2>
        <div className="metrics">
          <div className="metric">
            <div className="metric-icon">📈</div>
            <div className="metric-value">96</div>
            <div className="metric-label">Website Score</div>
          </div>
          <div className="metric">
            <div className="metric-icon">👥</div>
            <div className="metric-value">2,107</div>
            <div className="metric-label">Potential Monthly Visitors</div>
          </div>
          <div className="metric">
            <div className="metric-icon">🏆</div>
            <div className="metric-value">26%</div>
            <div className="metric-label">Competitor Gap</div>
          </div>
        </div>
      </div>
      
      <EmailReportForm />
    </>
  );
}
