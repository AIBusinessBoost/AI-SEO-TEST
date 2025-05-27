import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
              About AI Boost Business
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-indigo-100">
              Dedicated to helping companies harness the power of artificial intelligence to transform their operations and achieve unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, AI Boost Business began with a simple mission: to make artificial intelligence accessible and practical for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founders, a team of AI researchers and business strategists, recognized that while AI had enormous potential, many companies struggled to implement it effectively. They set out to bridge this gap by creating solutions that were powerful yet user-friendly.
              </p>
              <p className="text-lg text-gray-600">
                Today, we've helped hundreds of businesses across various industries leverage AI to solve complex problems, streamline operations, and drive growth. Our team has grown to include experts in machine learning, data science, software engineering, and business consulting.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="AI Boost Business team collaborating" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 rounded-md flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible with AI, staying at the forefront of technological advancements to deliver cutting-edge solutions to our clients.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 rounded-md flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients, understanding their unique challenges, and co-creating solutions that drive real business value.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-indigo-100 rounded-md flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">
                We measure our success by the tangible results we deliver for our clients. Every solution we develop is designed to create meaningful, measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600">Meet the experts behind our AI solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Alex Morgan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. Alex Morgan</h3>
              <p className="text-indigo-600 mb-2">CEO & Co-Founder</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Ph.D. in Machine Learning with 15+ years of experience in AI research and implementation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Sophia Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Dr. Sophia Chen</h3>
              <p className="text-indigo-600 mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Former lead AI researcher at Google with expertise in natural language processing and computer vision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Marcus Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Marcus Johnson</h3>
              <p className="text-indigo-600 mb-2">Chief Business Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                20+ years of experience in business strategy and digital transformation across multiple industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can help your business overcome challenges and seize new opportunities.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-indigo-700 font-medium px-8 py-3 rounded-md shadow hover:bg-indigo-50 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
