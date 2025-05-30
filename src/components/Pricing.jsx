import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: 49,
      period: "per month",
      description: "Perfect for small websites and blogs",
      features: [
        "Basic SEO analysis",
        "10 keyword tracking",
        "Monthly reports",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      price: 99,
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced SEO analysis",
        "50 keyword tracking",
        "Weekly reports",
        "Competitor analysis",
        "Priority email support",
        "Content optimization"
      ],
      buttonText: "Get Started",
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: 199,
      period: "per month",
      description: "For large websites and e-commerce",
      features: [
        "Comprehensive SEO analysis",
        "Unlimited keyword tracking",
        "Daily reports",
        "Advanced competitor analysis",
        "24/7 priority support",
        "Content optimization",
        "Custom integrations",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-darker rounded-xl p-8 border ${plan.popular ? 'border-primary' : 'border-gray-800'} relative h-full flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-darker font-bold py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <FaCheck className="text-primary text-xs" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className={`w-full py-3 rounded-lg text-center font-semibold ${plan.popular ? 'primary-button' : 'outline-button'}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
