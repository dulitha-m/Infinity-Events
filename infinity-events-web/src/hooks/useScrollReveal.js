import { useInView } from 'react-intersection-observer';

export function useScrollReveal(threshold = 0.1) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const revealClass = `transition-all duration-1000 ease-out ${
    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`;

  return { ref, inView, revealClass };
}
