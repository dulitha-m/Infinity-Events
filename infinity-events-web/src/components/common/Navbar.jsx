import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Navbar() { 
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111111]/95 backdrop-blur-xl border-b border-border-subtle py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <div className="w-10 h-10 rounded-full border-2 border-primary-container flex items-center justify-center">
            <span className="text-primary-container font-display font-bold">∞</span>
          </div>
          <span className="text-xl font-headline-md tracking-widest text-white hidden sm:block mt-1">INFINITY</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className={`font-label-accent tracking-widest text-xs hover:text-primary-container transition-colors ${location.pathname === '/about' ? 'text-primary-container' : 'text-white'}`}>ABOUT</Link>
          <Link to="/services" className={`font-label-accent tracking-widest text-xs hover:text-primary-container transition-colors ${location.pathname === '/services' ? 'text-primary-container' : 'text-white'}`}>SERVICES</Link>
          <Link to="/events" className={`font-label-accent tracking-widest text-xs hover:text-primary-container transition-colors ${location.pathname === '/events' ? 'text-primary-container' : 'text-white'}`}>EVENTS</Link>
          <Link to="/gallery" className={`font-label-accent tracking-widest text-xs hover:text-primary-container transition-colors ${location.pathname === '/gallery' ? 'text-primary-container' : 'text-white'}`}>GALLERY</Link>
          <Link to="/artists" className={`font-label-accent tracking-widest text-xs hover:text-primary-container transition-colors ${location.pathname === '/artists' ? 'text-primary-container' : 'text-white'}`}>ARTISTS</Link>
        </div>

        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="primary" className="text-xs px-6 py-2 tracking-widest">GET A QUOTE</Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden relative z-50 text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-primary-container transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0a0a0a] z-40 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center space-y-8">
          <Link to="/" className={`font-display text-3xl uppercase tracking-widest ${location.pathname === '/' ? 'text-primary-container' : 'text-white'}`}>Home</Link>
          <Link to="/about" className={`font-display text-3xl uppercase tracking-widest ${location.pathname === '/about' ? 'text-primary-container' : 'text-white'}`}>About</Link>
          <Link to="/services" className={`font-display text-3xl uppercase tracking-widest ${location.pathname === '/services' ? 'text-primary-container' : 'text-white'}`}>Services</Link>
          <Link to="/events" className={`font-display text-3xl uppercase tracking-widest ${location.pathname === '/events' ? 'text-primary-container' : 'text-white'}`}>Events</Link>
          <Link to="/gallery" className={`font-display text-3xl uppercase tracking-widest ${location.pathname === '/gallery' ? 'text-primary-container' : 'text-white'}`}>Gallery</Link>
          <Link to="/artists" className={`font-display text-3xl uppercase tracking-widest ${location.pathname === '/artists' ? 'text-primary-container' : 'text-white'}`}>Artists</Link>
          
          <Link to="/contact" className="mt-8">
            <Button variant="primary" className="text-sm px-8 py-3">GET A QUOTE</Button>
          </Link>
        </div>
      </div>
    </nav>
  ); 
}
