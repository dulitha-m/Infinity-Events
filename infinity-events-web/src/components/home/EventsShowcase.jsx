import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedEvents } from '../../api/eventsApi';
import SectionTitle from '../common/SectionTitle';
import EventCard from '../events/EventCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function EventsShowcase() {
  const { ref, revealClass } = useScrollReveal();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedEvents().then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-24 bg-background relative border-t border-border-subtle">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.03)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 ${revealClass}`}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionTitle title="UPCOMING EVENTS" subtitle="" center={false} />
          <Link to="/events" className="hidden md:flex items-center text-primary-container font-label-accent tracking-widest hover:text-white transition-colors text-xs mb-16">
            VIEW ALL EVENTS <span className="ml-2">→</span>
          </Link>
        </div>

        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/events" className="text-primary-container font-label-accent tracking-widest">
            VIEW ALL EVENTS →
          </Link>
        </div>
      </div>
    </section>
  );
}
