import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to AI Boost Business</h1>
      <p className="text-lg mb-4">
        We help businesses leverage artificial intelligence to grow and scale efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">AI Solutions</h2>
          <p>Custom AI solutions tailored to your business needs</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Data Analytics</h2>
          <p>Transform your data into actionable insights</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Process Automation</h2>
          <p>Streamline operations with intelligent automation</p>
        </div>
      </div>
    </main>
  );
}
