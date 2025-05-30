import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-dark">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-transparent rounded-2xl p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Boost Your Search Rankings?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of businesses that are already using our AI-powered SEO platform to improve their search visibility and drive more organic traffic.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="primary-button px-8 py-3 rounded-full font-semibold">
              Start Your Free Trial
            </button>
            <button className="outline-button px-8 py-3 rounded-full font-semibold">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
