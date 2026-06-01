import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function CTABanner() {
  const { ref, revealClass } = useScrollReveal();

  return (
    <section className="py-stack-section relative overflow-hidden bg-surface-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(192,132,252,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-margin-mobile text-center ${revealClass}`}>
        <h2 className="font-display-xl text-white mb-6">Ready to Create <br/><span className="text-primary-container">Legendary Moments?</span></h2>
        <p className="font-body-lg text-text-muted mb-10 max-w-2xl mx-auto">
          Contact our team of experts today to start planning your next world-class event experience.
        </p>
        <Link to="/contact">
          <Button variant="primary" className="mx-auto text-lg px-10 py-4">Plan Your Event</Button>
        </Link>
      </div>
    </section>
  );
}
