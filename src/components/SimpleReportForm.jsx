import React, { useState } from 'react';
import '../styles/SimpleReportForm.css';

export default function SimpleReportForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      setIsSuccess(true);
      setEmail('');
      setFirstName('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="simple-report-container">
      <h2>Get Your Full Report</h2>
      <p>Enter your details to receive the complete audit with actionable recommendations:</p>
      
      <form onSubmit={handleSubmit} className="simple-report-form">
        {!isSuccess ? (
          <>
            <div className="form-row">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="form-input"
                required
              />
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send My Report'}
            </button>
            {error && <div className="error-message">{error}</div>}
          </>
        ) : (
          <div className="success-message">
            Thank you! Your report has been sent to your email.
          </div>
        )}
      </form>
    </div>
  );
}
