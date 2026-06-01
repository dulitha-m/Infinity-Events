import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Deep Space Background Overlay */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 bg-[url('/assets/images/event1.jpg')] bg-cover bg-center opacity-50 mix-blend-luminosity" />
      </div>

      <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <h1 className="font-display-xl text-white mb-6 leading-tight drop-shadow-2xl flex flex-col">
            <span>WHERE EVENTS</span>
            <span>BECOME LEGENDS</span>
          </h1>
          <p className="font-label-accent text-text-muted tracking-[0.2em] max-w-2xl mx-auto mb-10 text-[10px] md:text-xs uppercase">
            We create legendary live event experiences — from massive global festivals to exclusive private summits.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events">
              <Button variant="primary" className="w-full sm:w-auto px-8">LEARN MORE</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="w-full sm:w-auto px-8">CONTACT US</Button>
            </Link>
          </div>
        </motion.div>

        {/* 3 dot indicator */}
        <div className="flex space-x-2 mt-16">
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary-container"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
