import SectionTitle from '../common/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Process() {
  const { ref, revealClass } = useScrollReveal();

  const steps = [
    { num: '01', title: 'DISCOVERY & BRIEF', desc: 'We align with your vision, objectives, and technical requirements.' },
    { num: '02', title: 'DESIGN & ARCHITECTURE', desc: 'Creating 3D renders, spatial layouts, and technical floor plans.' },
    { num: '03', title: 'PRODUCTION & BUILD', desc: 'Our master craftsmen and engineers bring the blueprints to reality.' },
    { num: '04', title: 'LIVE EXECUTION', desc: 'Flawless show-calling and on-the-ground management during the event.' }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-y border-border-subtle">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ${revealClass}`}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionTitle title="OUR PROCESS" subtitle="HOW WE WORK" center={false} />
          <p className="font-body-md text-text-muted max-w-md hidden md:block text-right mb-16">
            A meticulous, four-step architectural approach to producing world-class event experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-border-subtle font-display text-8xl absolute -top-10 -left-4 z-0 group-hover:text-primary-container/10 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10 pt-12 border-t-2 border-border-subtle group-hover:border-primary-container transition-colors">
                <h3 className="font-headline-md text-white text-lg mb-4">{step.title}</h3>
                <p className="text-text-muted font-body-md text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
