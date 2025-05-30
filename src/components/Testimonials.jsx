import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      stars: 5,
      text: "The AI SEO tool has completely transformed our approach to search optimization. We've seen a 43% increase in organic traffic in just two months!"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "E-commerce Owner",
      company: "StyleHub",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      stars: 5,
      text: "I was skeptical about AI-powered SEO, but the results speak for themselves. My product pages are now ranking on page 1 for competitive keywords."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Content Strategist",
      company: "MediaPulse",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      stars: 5,
      text: "The insights from this tool have helped us create content that actually ranks. Our blog traffic has doubled and our conversion rate is up 18%."
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have achieved with our AI SEO platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-dark-blue rounded-xl p-8 border border-gray-800">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
