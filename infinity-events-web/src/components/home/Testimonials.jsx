import SectionTitle from '../common/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Testimonials() {
  const { ref, revealClass } = useScrollReveal();

  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Global Marketing Director, Microsoft',
      content: "Infinity Events didn't just organize our annual summit; they transformed it into a cinematic experience. The architectural lighting and flawless execution were beyond our wildest expectations.",
      rating: 5
    },
    {
      name: 'Ahmed Al-Fayed',
      role: 'CEO, Dubai Luxury Holdings',
      content: "Working with the Infinity team for our gala was an absolute pleasure. Their attention to the smallest details and their massive production capabilities make them unmatched in the region.",
      rating: 5
    },
    {
      name: 'Elena Rostova',
      role: 'Private Client',
      content: "They turned my luxury wedding into an absolute fairy tale. The deep atmospheric lighting and incredible talent they sourced made it a night my guests will never forget.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background relative border-t border-border-subtle overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0%,transparent_50%)] pointer-events-none"></div>

      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 ${revealClass}`}>
        <SectionTitle title="CLIENT PRAISE" subtitle="WHAT THEY SAY" center={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#111111] border border-border-subtle p-10 rounded-sm relative group hover:border-primary-container/40 transition-colors">
              <div className="text-primary-container text-4xl font-display absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">"</div>
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-primary-container text-sm">★</span>
                ))}
              </div>
              <p className="font-body-md text-text-muted italic mb-8 relative z-10">"{review.content}"</p>
              <div>
                <h4 className="font-label-accent text-white mb-1">{review.name}</h4>
                <p className="font-body-md text-text-muted text-xs uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
