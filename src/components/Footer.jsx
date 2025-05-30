import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-darker pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <circle cx="16" cy="16" r="15" fill="#0B1120" stroke="#0BFFB7" strokeWidth="2"/>
                <path d="M10 16.5L14 20.5L22 12.5" stroke="#0BFFB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-bold text-xl">AI Boost Business</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-powered SEO platform that helps businesses improve their search engine rankings and drive more organic traffic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">SEO Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@aiboostbusiness.com</li>
              <li className="text-gray-400">Phone: +1 (555) 123-4567</li>
              <li className="text-gray-400">Address: 123 AI Street, San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AI Boost Business. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
