import React, { useState } from 'react';
import { FaChartLine, FaUsers, FaTrophy, FaTag } from 'react-icons/fa';

const AuditResults = ({ isVisible, websiteScore, potentialTraffic, competitorGap, originalEmail }) => {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError('Please enter your email');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    // Check if the entered email matches the original email
    if (email.toLowerCase() !== originalEmail.toLowerCase()) {
      setEmailError('Email does not match the one you provided earlier');
      return;
    }
    
    setEmailError('');
    setIsEmailSubmitted(true);
  };
  
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
            <div className="special-offer" style={{
              backgroundColor: 'rgba(255, 209, 42, 0.15)',
              border: '1px solid #ffd12a',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '20px'
            }}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                <FaTag style={{color: '#ffd12a', marginRight: '10px'}} />
                <h4 style={{color: '#ffd12a', margin: '0'}}>Limited-Time Exclusive Offer</h4>
              </div>
              <p style={{margin: '0 0 10px 0'}}>
                Unlock our premium in-depth analysis valued at <span style={{textDecoration: 'line-through'}}>$175</span> for 
                just <span style={{color: '#0ce6e6', fontWeight: 'bold'}}>$25</span> when you act today!
              </p>
              <p style={{margin: '0', fontSize: '0.9em', opacity: '0.8'}}>
                Receive actionable insights and step-by-step recommendations to outrank your competitors.
              </p>
            </div>
            
            {!isEmailSubmitted ? (
              <form className="email-form" style={{display: 'flex', flexDirection: 'column', gap: '15px'}} onSubmit={handleEmailSubmit}>
                <div style={{position: 'relative', width: '100%'}}>
                  <input 
                    type="email" 
                    id="userEmail" 
                    placeholder="Confirm your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{width: '100%', borderColor: emailError ? '#ff4d4d' : undefined}}
                    required 
                  />
                  {emailError && <div style={{color: '#ff4d4d', fontSize: '0.8em', marginTop: '5px'}}>{emailError}</div>}
                </div>
                <button 
                  type="submit" 
                  className="cta-button"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(90deg, #0ce6e6 0%, #ffd12a 100%)',
                    color: '#1a1a2e',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Continue to Full Report
                </button>
              </form>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '15px', width: '100%'}}>
                <a 
                  href="https://paypal.me/sellorbuy/25" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button"
                  style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    background: 'linear-gradient(90deg, #0ce6e6 0%, #ffd12a 100%)',
                    color: '#1a1a2e',
                    fontWeight: 'bold',
                    padding: '12px 20px',
                    borderRadius: '4px',
                    width: '100%'
                  }}
                >
                  Get My Full Report ($25)
                </a>
                <p style={{fontSize: '0.85em', opacity: '0.7', textAlign: 'center', margin: '0'}}>
                  This special "first-time client" rate is available for a limited time only!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditResults;
