import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function StatsCounter() {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section className="bg-[#111111] py-16 relative z-10 border-y border-border-subtle">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${revealClass}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h2 className="font-headline-lg text-primary-container mb-2">500+</h2>
            <p className="font-label-accent text-label-accent text-text-muted uppercase">Events Delivered</p>
          </div>
          <div>
            <h2 className="font-headline-lg text-primary-container mb-2">5</h2>
            <p className="font-label-accent text-label-accent text-text-muted uppercase">Countries</p>
          </div>
          <div>
            <h2 className="font-headline-lg text-primary-container mb-2">100+</h2>
            <p className="font-label-accent text-label-accent text-text-muted uppercase">Corporate Clients</p>
          </div>
          <div>
            <h2 className="font-headline-lg text-primary-container mb-2">10+</h2>
            <p className="font-label-accent text-label-accent text-text-muted uppercase">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
