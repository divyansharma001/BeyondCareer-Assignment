
import React from 'react';
import { GraduationCap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://cdn.midjourney.com/video/a5041881-d8e2-421d-a2a2-a97b3e8a8172/0.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-10 py-7 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <GraduationCap className="w-6 h-6 text-white/70" />
          <div className="flex space-x-6 font-inter text-sm font-normal text-slate-300">
            <a href="#about" className="hover:text-white transition-colors duration-300 hover:drop-shadow-sm">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors duration-300 hover:drop-shadow-sm">
              Services
            </a>
            <a href="#success" className="hover:text-white transition-colors duration-300 hover:drop-shadow-sm">
              Success Stories
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300 hover:drop-shadow-sm">
              Contact
            </a>
          </div>
        </div>
        <div className="font-inter text-sm text-slate-300">
          IIT KHARAGPUR <span className="text-blue-300/80">INNOVATION</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex h-screen items-center justify-center text-center">
        <div className="max-w-4xl px-8 text-white animate-fade-in">
          <h1 className="font-sora text-6xl font-light tracking-wide mb-6">
            Beyond Career
          </h1>
          <h2 className="font-sora text-2xl font-light text-blue-200 mb-6">
            Redefining Student Success
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-inter text-base font-normal text-slate-300 leading-relaxed">
            A visionary startup founded by dynamic students from IIT Kharagpur, committed to unlocking opportunities, 
            connecting students with industry leaders, and achieving aspirations through career guidance, mentorship, 
            internships, and community engagement.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="border border-white/20 bg-black/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-inter text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:backdrop-blur-md">
              Start Your Journey →
            </button>
            <button className="border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm text-blue-200 px-8 py-3 rounded-lg font-inter text-sm font-medium transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/50">
              Explore Services
            </button>
          </div>
        </div>
      </main>

      {/* Ambient UI Elements */}
      
      {/* Right Side Vertical Label */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="writing-mode-vertical-rl uppercase tracking-[0.4em] text-sm text-white/40 font-inter">
          CAREER :: EXCELLENCE
        </div>
      </div>

      {/* Bottom Right Designation */}
      <div className="absolute bottom-6 right-6 z-40">
        <div className="text-xs font-inter text-white/60">
          © Beyond Career Initiative
        </div>
      </div>

      {/* Bottom Left Status */}
      <div className="absolute bottom-6 left-6 z-40">
        <div className="text-xs font-inter text-white/50">
          ✦ EMPOWERING STUDENT SUCCESS...
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
