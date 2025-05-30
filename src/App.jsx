import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import AuditResults from './components/AuditResults';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [websiteScore, setWebsiteScore] = useState(0);
  const [potentialTraffic, setPotentialTraffic] = useState(0);
  const [competitorGap, setCompetitorGap] = useState(0);
  const [originalEmail, setOriginalEmail] = useState('');

  // Add event listener to the form
  React.useEffect(() => {
    const form = document.getElementById('seoAuditForm');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
    return () => {
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Check if the expanded form fields exist and are filled
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    
    // Only proceed with the full analysis if all expanded form fields are present and filled
    if (firstName && lastName && email && 
        firstName.value.trim() !== '' && 
        lastName.value.trim() !== '' && 
        email.value.trim() !== '') {
      
      // Store the original email for validation later
      setOriginalEmail(email.value.trim());
      
      // Generate random values for the metrics
      setWebsiteScore(Math.floor(Math.random() * 21) + 80); // 80-100
      setPotentialTraffic((Math.floor(Math.random() * 9000) + 1000).toLocaleString());
      setCompetitorGap(Math.floor(Math.random() * 41) + 10); // 10-50%
      
      // Show the results sections
      setShowResults(true);
      
      // Scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById('audit-results');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <AuditResults 
        isVisible={showResults} 
        websiteScore={websiteScore} 
        potentialTraffic={potentialTraffic} 
        competitorGap={competitorGap}
        originalEmail={originalEmail}
      />
      <Benefits isVisible={showResults} />
      <Testimonials isVisible={showResults} />
      <Footer />
    </div>
  );
}

export default App;
