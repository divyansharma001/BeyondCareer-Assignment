
import React from 'react';
import { GraduationCap, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const FooterSection = () => {
  const footerLinks = {
    services: [
      { name: "Career Guidance", href: "#services" },
      { name: "Mentorship Programs", href: "#services" },
      { name: "Internship Opportunities", href: "#services" },
      { name: "Community Engagement", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Success Stories", href: "#success" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Career Resources", href: "#" },
      { name: "Industry Insights", href: "#" },
      { name: "Student Handbook", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Student Agreement", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-slate-900 border-t border-white/10 text-white py-16 px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <span className="font-sora text-xl font-light">Beyond Career</span>
            </div>
            <p className="font-inter text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Empowering students from IIT Kharagpur and beyond to achieve their career aspirations through 
              personalized guidance, mentorship, and opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
            <h4 className="font-sora text-sm font-light mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="font-inter text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h4 className="font-sora text-sm font-light mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="font-inter text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in" style={{ animationDelay: '450ms' }}>
            <h4 className="font-sora text-sm font-light mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="font-inter text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="mb-4 md:mb-0">
              <h4 className="font-sora text-lg font-light mb-2 text-white">Stay Updated</h4>
              <p className="font-inter text-sm text-slate-400">Get the latest career insights and opportunities delivered to your inbox.</p>
            </div>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="your.email@university.edu"
                className="bg-black/40 border border-white/20 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-white/40 focus:outline-none transition-colors duration-300 min-w-[250px]"
              />
              <button className="px-6 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg text-blue-200 text-sm hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in" style={{ animationDelay: '750ms' }}>
          <div className="font-inter text-xs text-slate-500 mb-4 md:mb-0">
            © 2024 Beyond Career. All rights reserved. Founded at IIT Kharagpur.
          </div>
          <div className="flex items-center space-x-6">
            {footerLinks.legal.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="font-inter text-xs text-slate-500 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
