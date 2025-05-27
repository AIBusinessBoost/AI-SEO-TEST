import React, { useState } from 'react';
import '../styles/EmailReportForm.css';

export default function EmailReportForm() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!firstName.trim()) {
      setSubmitStatus({ success: false, message: 'Please enter your first name' });
      return;
    }
    
    if (!email || !email.includes('@')) {
      setSubmitStatus({ success: false, message: 'Please enter a valid email address' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // In a real application, you would call your backend API here
      // This is a simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful submission
      setSubmitStatus({ 
        success: true, 
        message: `Success! Your report has been sent to ${firstName} at ${email}` 
      });
      setFirstName('');
      setEmail('');
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send report. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="report-section">
      <h2>Get Your Full Report</h2>
      <p>Enter your details to receive the complete audit with actionable recommendations:</p>
      
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-fields">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="form-input"
            required
          />
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
          className="report-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send My Report'}
        </button>
      </form>
      
      {submitStatus && (
        <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
          {submitStatus.message}
        </div>
      )}
    </div>
  );
}
