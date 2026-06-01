import HeroSection from '../components/home/HeroSection';
import StatsCounter from '../components/home/StatsCounter';
import ServicesGrid from '../components/home/ServicesGrid';
import EventsShowcase from '../components/home/EventsShowcase';
import ClientLogos from '../components/home/ClientLogos';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <StatsCounter />
      <ServicesGrid />
      <EventsShowcase />
      <ClientLogos />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
