import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { team } from '../data/team';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref: storyRef, revealClass: storyReveal } = useScrollReveal();
  const { ref: mapRef, revealClass: mapReveal } = useScrollReveal();
  const { ref: teamRef, revealClass: teamReveal } = useScrollReveal();

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden border-b border-border-subtle">
        <div className="absolute inset-0 bg-[url('/assets/images/event3.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile mt-16">
          <SectionTitle title="THE LEGACY OF INFINITY" subtitle="OUR STORY" center={true} />
        </div>
      </section>

      {/* Our Story Content */}
      <section className="py-24 max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div ref={storyRef} className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${storyReveal}`}>
          <div>
            <span className="font-label-accent text-primary-container tracking-widest block mb-4 text-[10px]">ESTABLISHED IN SRI LANKA</span>
            <h2 className="font-headline-lg text-white mb-6 uppercase text-3xl">Pioneering Global Luxury Entertainment</h2>
            <div className="w-12 h-1 bg-primary-container mb-8"></div>
            <p className="font-body-md text-text-muted mb-6">
              Infinity Events & Entertainment was founded with a singular mission: balancing high-end creativity with competent technical production. What began as a passionate collective has evolved into a powerhouse of international event execution, alongside our partner brand Conceptus — "Events Beyond the Boundaries."
            </p>
            <p className="font-body-md text-text-muted mb-6">
              From curating massive live concerts for A-list artists like AKON and Priyanka Chopra, to deploying South Asia's Largest Indoor LED Wall for the CHOGM 2013 State Dinner for 2,000 global dignitaries, our commitment to absolute precision remains unwavering.
            </p>
            <p className="font-body-md text-text-muted">
              We also operate "Carren Brown™", our exclusive luxury sub-brand dedicated to concierge-style wedding design and sustainable execution.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border border-primary-container translate-x-4 translate-y-4"></div>
            <img src="/assets/images/event2.jpg" alt="Infinity Events Founders" className="relative z-10 w-full h-[400px] object-cover grayscale sepia-[0.2]" />
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-[#111111] border-y border-border-subtle overflow-hidden relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        
        <div ref={mapRef} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 ${mapReveal}`}>
          <div className="text-center mb-16">
            <SectionTitle title="OUR GLOBAL FOOTPRINT" subtitle="WHERE WE OPERATE" center={true} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {['USA', 'DUBAI', 'MALDIVES', 'INDONESIA', 'SRI LANKA'].map((country, idx) => (
              <div key={idx} className="bg-background border border-border-subtle py-8 rounded-sm hover:border-primary-container/50 transition-colors group">
                <div className="text-3xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">🌍</div>
                <h4 className="font-label-accent text-white group-hover:text-primary-container transition-colors">{country}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div ref={teamRef} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${teamReveal}`}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionTitle title="THE MASTERMINDS" subtitle="LEADERSHIP" center={false} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border-subtle bg-surface-base mb-6">
                  <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 z-10"></div>
                  {/* Using event1.jpg as placeholder for team member images */}
                  <img src="/assets/images/event1.jpg" alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80" />
                </div>
                <h3 className="font-headline-md text-white text-xl uppercase mb-1 group-hover:text-primary-container transition-colors">{member.name}</h3>
                <p className="font-label-accent text-text-muted text-[10px] tracking-widest">{member.role.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
