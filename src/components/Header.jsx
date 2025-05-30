import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <circle cx="16" cy="16" r="15" fill="#0B1120" stroke="#0BFFB7" strokeWidth="2"/>
            <path d="M10 16.5L14 20.5L22 12.5" stroke="#0BFFB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-xl">AI Boost Business</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-white hover:text-primary transition-colors">How It Works</a>
          <a href="#pricing" className="text-white hover:text-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="text-white hover:text-primary transition-colors">Testimonials</a>
          <a href="#faq" className="text-white hover:text-primary transition-colors">FAQ</a>
          <button className="primary-button px-6 py-2 rounded-full">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-dark-blue p-6 shadow-lg z-50">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <button className="primary-button px-6 py-2 rounded-full w-full mt-2" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
