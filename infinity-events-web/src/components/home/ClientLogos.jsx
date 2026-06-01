import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ClientLogos() {
  const { ref, revealClass } = useScrollReveal();
  const clients = [
    'MICROSOFT',
    'HSBC',
    'UNILEVER',
    'COCA-COLA',
    'TOYOTA',
    'HILTON',
    'TAJ',
    'JOHN KEELLS',
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-border-subtle overflow-hidden">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 text-center ${revealClass}`}>
        <span className="font-label-accent text-text-muted tracking-[0.2em]">TRUSTED BY INDUSTRY LEADERS</span>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* We use two identical blocks that animate continuously to the left */}
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
          {clients.concat(clients).map((client, index) => (
            <span key={index} className="mx-12 font-headline-md text-surface-bright hover:text-white transition-colors duration-300">
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
