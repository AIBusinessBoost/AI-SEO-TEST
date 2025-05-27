import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/">AI Boost Business</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="#how-it-works">How It Works</Link>
        <Link to="#benefits">Benefits</Link>
        <Link to="#testimonials">Testimonials</Link>
        <Link to="/login">Sign Up/Log In</Link>
      </div>
    </nav>
  );
}
