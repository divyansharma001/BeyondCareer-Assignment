
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    service: 'Career Guidance',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@beyondcareer.in",
      description: "Get in touch for personalized career guidance"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Speak directly with our career counselors"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "IIT Kharagpur, West Bengal",
      description: "Founded and rooted in excellence"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white py-20 px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-sora text-5xl font-light mb-6 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            Start Your Journey
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your career? Connect with us and take the first step towards your professional success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="font-sora text-2xl font-light mb-8 text-white">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/10 group-hover:border-white/30 transition-all duration-300">
                      <info.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-sora text-lg font-light mb-1 text-white">{info.title}</h4>
                      <p className="font-inter text-base text-blue-200 mb-1">{info.content}</p>
                      <p className="font-inter text-sm text-slate-400">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 backdrop-blur-sm">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-sora text-lg font-light mb-3 text-white">Why Students Choose Beyond Career</h4>
                  <ul className="space-y-2 font-inter text-sm text-slate-300">
                    <li>• Personalized career guidance from industry experts</li>
                    <li>• Proven track record with 95% placement success</li>
                    <li>• Strong alumni network from top institutions</li>
                    <li>• Comprehensive support from guidance to placement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <form onSubmit={handleSubmit} className="bg-black/30 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
              <h3 className="font-sora text-xl font-light mb-6 text-white">Send us a Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="font-inter text-sm text-slate-300 block mb-3 group-focus-within:text-white transition-colors duration-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="group">
                    <label className="font-inter text-sm text-slate-300 block mb-3 group-focus-within:text-white transition-colors duration-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300"
                      placeholder="your.email@university.edu"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="font-inter text-sm text-slate-300 block mb-3 group-focus-within:text-white transition-colors duration-300">
                    University/Institution
                  </label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) => setFormData(prev => ({ ...prev, university: e.target.value }))}
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300"
                    placeholder="Your university or institution"
                  />
                </div>

                <div className="group">
                  <label className="font-inter text-sm text-slate-300 block mb-3 group-focus-within:text-white transition-colors duration-300">
                    Service Interest
                  </label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300"
                  >
                    <option value="Career Guidance">Career Guidance</option>
                    <option value="Mentorship Programs">Mentorship Programs</option>
                    <option value="Internship Opportunities">Internship Opportunities</option>
                    <option value="Community Engagement">Community Engagement</option>
                  </select>
                </div>

                <div className="group">
                  <label className="font-inter text-sm text-slate-300 block mb-3 group-focus-within:text-white transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell us about your career goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white py-4 rounded-lg font-inter text-sm hover:from-blue-500/30 hover:to-purple-500/30 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-slate-400 font-inter tracking-wider">CAREER SUPPORT AVAILABLE 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
