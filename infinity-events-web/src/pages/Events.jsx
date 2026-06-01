import { useState, useEffect } from 'react';
import { getAllEvents } from '../api/eventsApi';
import SectionTitle from '../components/common/SectionTitle';
import EventCard from '../components/events/EventCard';
import Button from '../components/common/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Events() {
  const { ref, revealClass } = useScrollReveal();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllEvents().then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${revealClass}`}>
        <SectionTitle title="EVENTS" subtitle="" center={true} />
        <p className="text-center font-body-md text-text-muted max-w-lg mx-auto -mt-10 mb-16">
          From intimate gatherings to global spectacles.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-end gap-4 mb-16 bg-[#111111] p-6 border border-border-subtle rounded-sm">
          <div className="w-full md:w-1/4 flex flex-col">
            <label className="font-label-accent text-white text-[10px] mb-2 uppercase">CATEGORIES</label>
            <select className="bg-background border border-border-subtle text-text-muted font-body-md py-2 px-3 focus:outline-none focus:border-primary-container rounded-sm">
              <option>All Categories</option>
              <option>Concert</option>
              <option>Corporate</option>
              <option>Wedding</option>
              <option>Fashion</option>
            </select>
          </div>
          <div className="w-full md:w-1/4 flex flex-col">
            <label className="font-label-accent text-white text-[10px] mb-2 uppercase">LOCATION</label>
            <select className="bg-background border border-border-subtle text-text-muted font-body-md py-2 px-3 focus:outline-none focus:border-primary-container rounded-sm">
              <option>All Locations</option>
              <option>Colombo, Sri Lanka</option>
              <option>Dubai, UAE</option>
              <option>Maldives</option>
            </select>
          </div>
          <div className="w-full md:w-2/4 flex flex-col">
            <label className="font-label-accent text-white text-[10px] mb-2 uppercase">SEARCH</label>
            <div className="flex">
              <input type="text" placeholder="Search events..." className="w-full bg-background border border-border-subtle text-text-muted font-body-md py-2 px-3 focus:outline-none focus:border-primary-container rounded-l-sm" />
              <button className="bg-primary-container text-black px-6 py-2 font-label-accent rounded-r-sm hover:bg-[#e9c400] transition-colors">SEARCH</button>
            </div>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="h-64 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="px-12 text-xs">LOAD MORE</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
