import React, { useState } from 'react';
import { FaChartLine, FaUsers, FaTrophy, FaTag, FaTimes } from 'react-icons/fa';

const AuditResults = ({ isVisible, websiteScore, potentialTraffic, competitorGap, originalEmail }) => {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showPaypalPopup, setShowPaypalPopup] = useState(false);
  
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

  const openPaypalPopup = () => {
    setShowPaypalPopup(true);
  };

  const closePaypalPopup = () => {
    setShowPaypalPopup(false);
  };

  const handlePaymentSuccess = () => {
    // Store payment success in localStorage to maintain state across pages
    localStorage.setItem('paymentCompleted', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('websiteScore', websiteScore);
    localStorage.setItem('potentialTraffic', potentialTraffic);
    localStorage.setItem('competitorGap', competitorGap);
    
    // Redirect to full report page
    window.location.href = '/full-report.html';
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
                <button 
                  onClick={openPaypalPopup}
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
                    width: '100%',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Get My Full Report ($25)
                </button>
                <p style={{fontSize: '0.85em', opacity: '0.7', textAlign: 'center', margin: '0'}}>
                  This special "first-time client" rate is available for a limited time only!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PayPal Popup */}
      {showPaypalPopup && (
        <div className="paypal-popup-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="paypal-popup" style={{
            backgroundColor: '#1a1a2e',
            borderRadius: '8px',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(12, 230, 230, 0.3)'
          }}>
            <button 
              onClick={closePaypalPopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1
              }}
            >
              <FaTimes />
            </button>
            
            <div style={{padding: '30px'}}>
              <h3 style={{
                textAlign: 'center', 
                marginTop: '0', 
                marginBottom: '20px',
                color: '#fff',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '15px'
              }}>
                Complete Your Payment
              </h3>
              
              <div style={{
                backgroundColor: 'rgba(255, 209, 42, 0.1)',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <h4 style={{color: '#ffd12a', margin: '0 0 10px 0'}}>Order Summary</h4>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                  fontSize: '0.9em'
                }}>
                  <span>Premium SEO Analysis Report</span>
                  <span>$25.00</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 'bold',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '10px',
                  marginTop: '10px'
                }}>
                  <span>Total</span>
                  <span style={{color: '#0ce6e6'}}>$25.00</span>
                </div>
              </div>
              
              <p style={{textAlign: 'center', marginBottom: '20px', fontSize: '0.9em'}}>
                Click the button below to complete your payment securely via PayPal.
              </p>
              
              <div style={{textAlign: 'center'}}>
                <a 
                  href="https://paypal.me/sellorbuy/25" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="paypal-button"
                  onClick={() => {
                    // Open PayPal in a new window
                    const paypalWindow = window.open("https://paypal.me/sellorbuy/25", "paypal", "width=450,height=600");
                    
                    // Check if window was successfully opened
                    if (paypalWindow) {
                      // Set up a timer to check if the PayPal window is closed
                      const checkWindowClosed = setInterval(() => {
                        if (paypalWindow.closed) {
                          clearInterval(checkWindowClosed);
                          
                          // Ask user if payment was completed
                          if (confirm("Did you complete your payment?")) {
                            handlePaymentSuccess();
                          }
                        }
                      }, 1000);
                    }
                    
                    // Close the popup
                    closePaypalPopup();
                    
                    // Prevent default link behavior
                    return false;
                  }}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#0070ba',
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                >
                  Pay with PayPal
                </a>
              </div>
              
              <p style={{
                fontSize: '0.8em', 
                opacity: '0.7', 
                textAlign: 'center',
                marginTop: '20px'
              }}>
                Your payment is secure and processed via PayPal. You'll receive your full report immediately after payment.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AuditResults;
