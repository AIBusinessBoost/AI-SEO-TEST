import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import EmailReportForm from './components/EmailReportForm';
import SimpleReportForm from './components/SimpleReportForm';
import ReportRequestsList from './components/ReportRequestsList';
import './styles/App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <header className="app-header">
            <h1>Email Reporting System</h1>
            <nav className="main-nav">
              <Link to="/">Home</Link>
              <Link to="/simple">Simple Form</Link>
              <Link to="/detailed">Detailed Form</Link>
              <Link to="/admin">Admin Dashboard</Link>
            </nav>
          </header>
          
          <main className="app-main">
            <Routes>
              <Route path="/" element={
                <div className="home-page">
                  <h2>Welcome to the Email Reporting System</h2>
                  <p>Choose a form type to request your report:</p>
                  <div className="form-options">
                    <Link to="/simple" className="form-option">
                      <h3>Simple Form</h3>
                      <p>Quick and easy report request</p>
                    </Link>
                    <Link to="/detailed" className="form-option">
                      <h3>Detailed Form</h3>
                      <p>Comprehensive report request</p>
                    </Link>
                  </div>
                </div>
              } />
              <Route path="/simple" element={<SimpleReportForm />} />
              <Route path="/detailed" element={<EmailReportForm />} />
              <Route path="/admin" element={<ReportRequestsList />} />
            </Routes>
          </main>
          
          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Email Reporting System. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
