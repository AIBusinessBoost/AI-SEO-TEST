import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Boost Business',
  description: 'A fully SEO optimized website built with Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'AI Solutions', 'Business Automation'],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'AI Boost Business',
    description: 'A fully SEO optimized website built with Next.js',
    url: 'https://projectai-seo-testgit-300570-j4y.vercel.app',
    siteName: 'AI Boost Business',
    locale: 'en_US',
    type: 'website',
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
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                  AI Boost Business
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link href="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                  Home
                </Link>
                <Link href="/about" className="flex items-center px-2 py-2 text-gray-900 hover:text-gray-600">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} AI Boost Business. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
