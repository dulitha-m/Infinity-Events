import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Navbar() { 
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-base/80 backdrop-blur-xl border-b border-border-subtle py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Mock Infinity Logo */}
          <div className="w-10 h-10 rounded-full border-2 border-primary-container flex items-center justify-center">
            <span className="text-primary-container font-display font-bold">∞</span>
          </div>
          <span className="text-xl font-headline-md tracking-widest text-white hidden sm:block">INFINITY</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={`font-label-accent hover:text-primary-container transition-colors ${location.pathname === '/about' ? 'text-primary-container' : 'text-text-primary'}`}>About</Link>
          <Link to="/services" className={`font-label-accent hover:text-primary-container transition-colors ${location.pathname === '/services' ? 'text-primary-container' : 'text-text-primary'}`}>Services</Link>
          <Link to="/events" className={`font-label-accent hover:text-primary-container transition-colors ${location.pathname === '/events' ? 'text-primary-container' : 'text-text-primary'}`}>Events</Link>
          <Link to="/gallery" className={`font-label-accent hover:text-primary-container transition-colors ${location.pathname === '/gallery' ? 'text-primary-container' : 'text-text-primary'}`}>Gallery</Link>
          <Link to="/artists" className={`font-label-accent hover:text-primary-container transition-colors ${location.pathname === '/artists' ? 'text-primary-container' : 'text-text-primary'}`}>Artists</Link>
        </div>

        <Link to="/contact">
          <Button variant="primary" className="text-sm">Get a Quote</Button>
        </Link>
      </div>
    </nav>
  ); 
}
