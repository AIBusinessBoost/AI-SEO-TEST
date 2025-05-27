import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Boost Business | AI Solutions for Business Growth',
  description: 'AI Boost Business provides cutting-edge artificial intelligence solutions to help businesses automate processes, gain insights from data, and drive growth.',
  keywords: ['AI Solutions', 'Business Automation', 'Data Analytics', 'Machine Learning', 'Process Optimization', 'Digital Transformation'],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'AI Boost Business | AI Solutions for Business Growth',
    description: 'Transform your business with our cutting-edge AI solutions. Automate processes, gain insights from data, and drive sustainable growth.',
    url: 'https://projectai-seo-testgit-300570-j4y.vercel.app',
    siteName: 'AI Boost Business',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'AI Boost Business - AI Solutions for Business Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Boost Business | AI Solutions for Business Growth',
    description: 'Transform your business with our cutting-edge AI solutions. Automate processes, gain insights from data, and drive sustainable growth.',
    images: ['https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="bg-gray-900 text-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold text-white">AI Boost Business</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                  <Link href="#how-it-works" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                    How It Works
                  </Link>
                  <Link href="#benefits" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                    Benefits
                  </Link>
                  <Link href="#testimonials" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                    Testimonials
                  </Link>
                  <Link href="/login" className="text-white hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium">
                    Sign Up/Log In
                  </Link>
                </div>
                <div className="md:hidden flex items-center">
                  {/* Mobile menu button - would need JavaScript to toggle */}
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        
        {children}
        
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="mb-8 md:mb-0">
                <h3 className="text-lg font-semibold mb-4">AI Boost Business</h3>
                <p className="text-gray-300">
                  Transforming businesses through innovative AI solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">AI Solutions</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Data Analytics</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Process Automation</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Machine Learning</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-300">
                  © {new Date().getFullYear()} AI Boost Business. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0 flex space-x-6">
                  <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                  <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
                  <a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
