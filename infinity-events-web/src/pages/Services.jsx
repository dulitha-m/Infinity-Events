import { useState } from 'react';
import { services } from '../data/services';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import Process from '../components/services/Process';

export default function Services() {
  const { ref, revealClass } = useScrollReveal();
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = ['ALL', 'CORPORATE', 'SOCIAL', 'TOURS', 'PRIVATE EVENTS', 'PR EVENTS', 'WEDDINGS', 'EXHIBITIONS', 'FASHION'];

  // For the alternating main layout, take the first 4 for demo purposes
  const mainServices = services.slice(0, 4);
  
  // For the "BEYOND THE STAGE" grid
  const beyondServices = [
    { title: 'SOCIAL EVENTS', desc: 'From exclusive VIP parties to milestone celebrations, flawless design implementation.', icon: '🥂' },
    { title: 'THEATRE EVENTS', desc: 'Immersive stage setups, sound design, and theatrical light plots mapped with high precision.', icon: '🏛️' },
    { title: 'FASHION & MODELS', desc: 'High-fashion runway production and professional talent management.', icon: '👗' },
    { title: 'THEATRE & ARTS', desc: 'Theatrical set execution and exhibition and cultural curation.', icon: '🎭' },
    { title: 'CONGRESSES', desc: 'Large scale international assemblies and professional symposiums.', icon: '🌐' },
    { title: 'TRADE FAIRS', desc: 'Exhibition design and management for commercial trade events.', icon: '🏢' },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 ${revealClass}`}>
        <SectionTitle title="OUR SERVICES" subtitle="" center={true} />
        <p className="text-center font-body-md text-primary-container max-w-3xl mx-auto tracking-widest text-xs uppercase mb-12">
          Total Event Solutions Across Global Markets — Delivered With Architectural Precision
        </p>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-label-accent text-[10px] rounded-full transition-all duration-300 border ${
                activeTab === tab 
                  ? 'border-primary-container bg-primary-container text-black' 
                  : 'border-border-subtle text-text-muted hover:border-white hover:text-white bg-[#111111]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Alternating Layouts */}
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 mb-32">
        {mainServices.map((service, index) => (
          <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} mb-8 bg-[#111111] overflow-hidden rounded-sm border border-border-subtle`}>
            <div className="w-full md:w-1/2 h-96 md:h-[600px] relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="font-label-accent text-primary-container tracking-widest block mb-4 text-[10px]">SERVICE 0{index + 1}</span>
              <h2 className="font-headline-lg text-white mb-6 uppercase text-3xl md:text-4xl">{service.title}</h2>
              <p className="font-body-md text-text-muted mb-8 leading-relaxed max-w-lg">{service.description}</p>
              
              <ul className="space-y-3 mb-10 text-text-muted font-body-md text-sm">
                <li className="flex items-center"><span className="text-primary-container mr-3">✔</span> Complete event management</li>
                <li className="flex items-center"><span className="text-primary-container mr-3">✔</span> High-end audio & lighting</li>
                <li className="flex items-center"><span className="text-primary-container mr-3">✔</span> Technical architecture</li>
                <li className="flex items-center"><span className="text-primary-container mr-3">✔</span> Premium talent sourcing</li>
              </ul>
              
              <Link to="/contact" className="inline-block">
                <Button variant="outline" className="w-fit text-xs px-8">REQUEST PROPOSAL</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Beyond The Stage Grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <SectionTitle title="BEYOND THE STAGE" subtitle="" center={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {beyondServices.map((service, i) => (
            <div key={i} className="bg-[#111111] border border-border-subtle p-8 rounded-sm hover:border-primary-container/50 transition-colors">
              <div className="text-primary-container text-2xl mb-6">{service.icon}</div>
              <h3 className="font-headline-md text-white text-xl mb-4 uppercase">{service.title}</h3>
              <p className="text-text-muted font-body-md text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Process />
    </div>
  );
}
