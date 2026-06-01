import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function EventCard({ event }) {
  return (
    <div className="bg-[#111111] border border-border-subtle overflow-hidden group flex flex-col h-full rounded-sm">
      <div className="h-64 relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 left-4 bg-primary-container text-black px-3 py-1 text-[10px] font-label-accent tracking-widest rounded-sm font-bold">
          {event.category.toUpperCase()}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-[#111111]">
        <h3 className="font-headline-md text-white mb-4 line-clamp-2 text-2xl group-hover:text-primary-container transition-colors uppercase">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-8 flex-grow">
          <div className="flex items-center text-text-muted">
            <span className="text-primary-container mr-2 text-xs">📅</span>
            <span className="font-label-accent text-[10px] tracking-widest uppercase">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center text-text-muted">
            <span className="text-primary-container mr-2 text-xs">📍</span>
            <span className="font-label-accent text-[10px] tracking-widest uppercase">
              {event.location}
            </span>
          </div>
        </div>

        <p className="text-text-muted font-body-md mb-8 line-clamp-3 text-sm">
          {event.description}
        </p>

        <Link to={`/events/${event.id}`} className="mt-auto">
          <Button variant="outline" className="w-full text-xs py-2 tracking-[0.2em]">LEARN MORE</Button>
        </Link>
      </div>
    </div>
  );
}
