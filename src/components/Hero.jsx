import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <div className="inline-flex items-center bg-dark-blue rounded-full px-4 py-1 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
          <span className="text-sm font-medium">AI-Powered SEO Tool</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Get Your Website Ranked Higher in<br />
          <span className="text-primary">Google, Bing & ChatGPT</span>
        </h1>
        
        <p className="text-gray-300 mb-8 max-w-lg text-lg">
          Our AI-powered SEO audit makes it easy to boost your search rankings. Get actionable insights to outrank your competitors and drive more organic traffic.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <FaCheck className="text-primary text-xs" />
            </div>
            <span className="text-gray-200">Comprehensive SEO analysis in minutes</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <FaCheck className="text-primary text-xs" />
            </div>
            <span className="text-gray-200">AI-powered recommendations that work</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
              <FaCheck className="text-primary text-xs" />
            </div>
            <span className="text-gray-200">Competitor insights to gain an edge</span>
          </div>
        </div>
        
        <button className="primary-button px-8 py-3 rounded-full text-base font-semibold">
          Analyze My Website
        </button>
      </div>
      
      {/* Right Column - Form Card */}
      <div className="w-full lg:w-1/2 lg:pl-12">
        <div className="bg-dark-blue rounded-xl p-8 shadow-lg border border-gray-800">
          <h2 className="text-2xl font-bold mb-6">Get Your Free AI SEO Audit</h2>
          
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-300">Your Website URL</label>
              <input 
                type="url" 
                placeholder="https://yourwebsite.com"
                className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-white"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-300">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-white"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary text-white"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-600 rounded bg-darker focus:ring-primary"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-300">I agree to the <a href="#" className="text-primary">Terms of Service</a> and <a href="#" className="text-primary">Privacy Policy</a></label>
                </div>
              </div>
            </div>
            
            <button type="submit" className="primary-button w-full py-3 rounded-lg text-center font-semibold">
              Analyze My Website
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
