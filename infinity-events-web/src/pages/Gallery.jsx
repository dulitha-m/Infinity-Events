import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  const { ref, revealClass } = useScrollReveal();
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = ['ALL', 'CORPORATE', 'CONCERTS', 'WEDDINGS', 'FESTIVALS', 'FASHION'];
  
  const images = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    src: `/assets/images/event${(i % 6) + 1}.jpg`,
    alt: `Gallery Event ${i + 1}`,
    category: tabs[(i % 5) + 1]
  }));

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 ${revealClass}`}>
        <SectionTitle title="GALLERY" subtitle="" center={true} />
        <p className="text-center font-body-md text-text-muted max-w-lg mx-auto -mt-10 mb-12">
          A glimpse into the worlds we create.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-label-accent text-[10px] rounded-sm transition-all duration-300 border ${
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

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={img.id} className="relative overflow-hidden group rounded-sm bg-surface-base border border-border-subtle aspect-square">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-80 z-0"></div>
              
              <div className="absolute bottom-6 left-6 z-10">
                <div className="bg-primary-container text-black px-3 py-1 text-[10px] font-label-accent tracking-widest rounded-sm font-bold">
                  {img.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
