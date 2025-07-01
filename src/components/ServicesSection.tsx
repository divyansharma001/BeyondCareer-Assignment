
import React from 'react';
import { ArrowRight, BookOpen, Users, Briefcase, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Career Guidance",
      description: "Comprehensive career counseling with personalized roadmaps, skill assessments, and industry insights to help students make informed career decisions.",
      icon: BookOpen,
      features: ["One-on-one counseling", "Career assessments", "Industry insights", "Skill gap analysis"],
      color: "text-blue-400",
      statusColor: "border-blue-400/30 bg-blue-400/10 text-blue-400"
    },
    {
      title: "Mentorship Programs",
      description: "Connect with industry professionals and alumni who provide personalized guidance, share experiences, and help navigate career challenges.",
      icon: Users,
      features: ["Industry expert mentors", "Alumni network", "Regular check-ins", "Goal tracking"],
      color: "text-green-400",
      statusColor: "border-green-400/30 bg-green-400/10 text-green-400"
    },
    {
      title: "Internship Opportunities",
      description: "Curated internship programs with leading companies, startups, and research organizations to provide real-world experience.",
      icon: Briefcase,
      features: ["Curated positions", "Application support", "Interview prep", "Performance tracking"],
      color: "text-purple-400",
      statusColor: "border-purple-400/30 bg-purple-400/10 text-purple-400"
    },
    {
      title: "Community Engagement",
      description: "Join a vibrant community of ambitious students, share experiences, participate in events, and build lasting professional networks.",
      icon: Globe,
      features: ["Student community", "Networking events", "Workshops & seminars", "Peer learning"],
      color: "text-pink-400",
      statusColor: "border-pink-400/30 bg-pink-400/10 text-pink-400"
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-black text-white py-20 px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="font-sora text-5xl font-light mb-6 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
          <p className="font-inter text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to empower students at every stage of their career journey.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900/50 to-black/50 border border-white/10 backdrop-blur-sm hover:border-white/30 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Animated background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000"></div>
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-6">
                    <div className={`p-3 rounded-lg bg-black/40 border border-white/10 group-hover:border-white/30 transition-all duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div className="max-w-2xl">
                      <h3 className="font-sora text-2xl font-light mb-3 group-hover:text-white/90 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="font-inter text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-20">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')}`}></div>
                      <span className="font-inter text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
