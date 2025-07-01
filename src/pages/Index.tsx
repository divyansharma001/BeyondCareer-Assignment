
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SuccessStoriesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
