import React from 'react';

const Testimonials = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>What Our <span className="text-gradient">Clients</span> Say</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p className="testimonial-text">"AI Boost Business helped us increase our website traffic by 50% in just three months. Highly recommended!"</p>
            <p className="testimonial-author">- John Doe, CEO</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">"The AI-powered SEO audit provided actionable insights that we could implement immediately. A game-changer for our business."</p>
            <p className="testimonial-author">- Jane Smith, Marketing Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
