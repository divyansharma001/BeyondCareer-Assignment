
import React from 'react';
import { Star, Quote, TrendingUp, Award } from 'lucide-react';

const SuccessStoriesSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      university: "IIT Delhi",
      image: "PS",
      quote: "Beyond Career's mentorship program connected me with industry experts who guided me through my career transition. The personalized guidance was invaluable.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Product Manager at Microsoft",
      university: "IIT Bombay",
      image: "RK",
      quote: "The career guidance sessions helped me identify my strengths and align them with market opportunities. Now I'm living my dream job!",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "Data Scientist at Amazon",
      university: "IIT Madras",
      image: "AP",
      quote: "Through Beyond Career's internship program, I gained hands-on experience that made me industry-ready. The community support was incredible.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Students Mentored", icon: TrendingUp },
    { number: "95%", label: "Placement Success", icon: Award },
    { number: "50+", label: "Partner Companies", icon: Star },
    { number: "4.9", label: "Student Rating", icon: Quote }
  ];

  return (
    <section id="success" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white py-20 px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-green-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-sora text-5xl font-light mb-6 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            Success Stories
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from students who transformed their careers with Beyond Career's guidance and support.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 mb-4">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-sora text-3xl font-light text-white mb-1">{stat.number}</div>
                <div className="font-inter text-sm text-slate-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm hover:border-white/20 hover:bg-black/40 transition-all duration-500 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-blue-400/50 mb-4" />
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="font-inter text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-sora text-base font-light text-white">{testimonial.name}</h4>
                    <p className="font-inter text-xs text-blue-300">{testimonial.role}</p>
                    <p className="font-inter text-xs text-slate-500">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 backdrop-blur-sm">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <span className="font-inter text-lg text-white">Ready to write your success story?</span>
            <button className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-200 px-6 py-2 rounded-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
