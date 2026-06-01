import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import SectionTitle from '../common/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ServicesGrid() {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${revealClass}`}>
        <SectionTitle title="WHAT WE DO" subtitle="" center={false} />
        <p className="font-body-md text-text-muted mb-12 max-w-lg">
          Our in-house capabilities span across every category of premium event production.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <Link to={`/services#${service.id}`} key={service.id} className="group block">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-base border border-border-subtle group-hover:border-primary-container/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-20"></div>
                
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute bottom-6 left-6 z-30 flex items-start gap-3">
                  {/* Yellow vertical accent bar */}
                  <div className="w-1 h-10 bg-primary-container mt-1"></div>
                  <div>
                    <span className="font-label-accent text-primary-container tracking-widest block mb-1 text-[10px]">
                      SERVICE 0{index + 1}
                    </span>
                    <h3 className="font-headline-md text-white text-xl md:text-2xl group-hover:text-primary-container transition-colors duration-300">
                      {service.title.toUpperCase()}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
