import React from 'react'
import { FaSearch, FaRobot, FaChartLine, FaLaptopCode } from 'react-icons/fa'

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI SEO Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform provides everything you need to optimize your website and outrank your competitors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Site Scan Feature */}
          <div className="feature-card rounded-xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <FaSearch className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Site Scan</h3>
            <p className="text-gray-300 mb-4">
              Discover your site's SEO strengths and weaknesses with our comprehensive scan.
            </p>
            <button className="outline-button px-6 py-2 rounded-full mt-auto">
              Learn More
            </button>
          </div>
          
          {/* AI Analysis Feature */}
          <div className="feature-card rounded-xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <FaRobot className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
            <p className="text-gray-300 mb-4">
              Our AI provides actionable insights to help you outrank your competitors.
            </p>
            <button className="outline-button px-6 py-2 rounded-full mt-auto">
              Learn More
            </button>
          </div>
          
          {/* Performance Tracking */}
          <div className="feature-card rounded-xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <FaChartLine className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
            <p className="text-gray-300 mb-4">
              Monitor your SEO progress and track improvements in your search rankings over time.
            </p>
            <button className="outline-button px-6 py-2 rounded-full mt-auto">
              Learn More
            </button>
          </div>
          
          {/* Technical SEO */}
          <div className="feature-card rounded-xl p-8 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <FaLaptopCode className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Technical SEO</h3>
            <p className="text-gray-300 mb-4">
              Identify and fix technical issues that could be hurting your search engine rankings.
            </p>
            <button className="outline-button px-6 py-2 rounded-full mt-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
