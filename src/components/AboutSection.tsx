
import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 text-white py-20 px-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-sora text-5xl font-light mb-6 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Founded by visionary students from IIT Kharagpur, Beyond Career emerged from a simple yet powerful belief: 
            every student deserves access to world-class career guidance and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To redefine how students approach their careers by providing comprehensive guidance, mentorship, and opportunities that bridge the gap between academic excellence and professional success.",
              color: "text-blue-400",
              delay: "0ms"
            },
            {
              icon: Users,
              title: "Our Vision",
              description: "To become the premier platform where students from all backgrounds can unlock their potential, connect with industry leaders, and build fulfilling careers in the modern world.",
              color: "text-green-400",
              delay: "200ms"
            },
            {
              icon: Heart,
              title: "Our Values",
              description: "Excellence, Innovation, Integrity, and Community. We believe in empowering students through authentic connections, personalized guidance, and unwavering commitment to their success.",
              color: "text-pink-400",
              delay: "400ms"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm hover:border-white/30 hover:bg-black/30 transition-all duration-500 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: item.delay }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <item.icon className={`w-12 h-12 ${item.color} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`} />
              <h3 className="font-sora text-xl font-light mb-4 relative z-10">{item.title}</h3>
              <p className="font-inter text-sm text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                {item.description}
              </p>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* IIT Kharagpur Connection */}
        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-8 border border-blue-500/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="text-center">
            <h3 className="font-sora text-2xl font-light mb-4 text-blue-200">The IIT Kharagpur Legacy</h3>
            <p className="font-inter text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Born from the innovation corridors of IIT Kharagpur, Beyond Career carries forward the institution's 
              legacy of excellence and technological advancement. Our founders, inspired by their transformative 
              educational experience, are committed to extending this excellence to students worldwide through 
              cutting-edge career solutions and mentorship programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
