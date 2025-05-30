import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How does the AI SEO tool work?",
      answer: "Our AI SEO tool analyzes your website using advanced algorithms to identify SEO issues and opportunities. It then provides personalized recommendations based on current search engine best practices and your specific industry."
    },
    {
      id: 2,
      question: "How long does it take to see results?",
      answer: "Most customers start seeing improvements in their search rankings within 4-6 weeks of implementing our recommendations. However, SEO is a long-term strategy, and the most significant results typically appear after 3-6 months of consistent optimization."
    },
    {
      id: 3,
      question: "Do I need technical knowledge to use the platform?",
      answer: "No, our platform is designed to be user-friendly for everyone, regardless of technical expertise. We provide clear, actionable recommendations with step-by-step instructions for implementation."
    },
    {
      id: 4,
      question: "Can I use the tool for multiple websites?",
      answer: "Yes, our Professional and Enterprise plans allow you to manage multiple websites from a single dashboard. Each website will receive its own analysis and recommendations."
    },
    {
      id: 5,
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all our plans. No credit card is required to start your trial, and you can cancel at any time."
    }
  ]

  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-300">
            Find answers to common questions about our AI SEO platform.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`bg-dark-blue rounded-xl overflow-hidden border ${openIndex === index ? 'border-primary' : 'border-gray-800'}`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? 
                  <FaChevronUp className="text-primary" /> : 
                  <FaChevronDown className="text-gray-400" />
                }
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
