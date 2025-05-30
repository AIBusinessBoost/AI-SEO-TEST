import React from 'react'
import { FaSearch, FaRobot, FaChartLine } from 'react-icons/fa'

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI-powered platform makes SEO optimization simple and effective in just three easy steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-darker rounded-xl p-8 border border-gray-800 h-full">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-darker font-bold">
                1
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mt-4">
                <FaSearch className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Analyze Your Website</h3>
              <p className="text-gray-300">
                Enter your website URL and our AI will scan your entire site to identify SEO issues and opportunities for improvement.
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <div className="bg-darker rounded-xl p-8 border border-gray-800 h-full">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-darker font-bold">
                2
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mt-4">
                <FaRobot className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Get AI Recommendations</h3>
              <p className="text-gray-300">
                Receive personalized, actionable recommendations from our AI to improve your website's search engine rankings.
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <div className="bg-darker rounded-xl p-8 border border-gray-800 h-full">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-darker font-bold">
                3
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mt-4">
                <FaChartLine className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Implement & Track Results</h3>
              <p className="text-gray-300">
                Follow our recommendations and track your progress as your website climbs the search engine rankings.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="primary-button px-8 py-3 rounded-full">
            Try It Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
