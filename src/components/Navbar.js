import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/clients', label: 'Clients' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 60 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="17" cy="17" rx="14" ry="9" stroke="white" strokeWidth="3.5" fill="none"/>
              <ellipse cx="43" cy="17" rx="14" ry="9" stroke="white" strokeWidth="3.5" fill="none"/>
              <line x1="35" y1="2" x2="25" y2="32" stroke="white" strokeWidth="2.5"/>
              <line x1="38" y1="2" x2="28" y2="32" stroke="white" strokeWidth="2.5"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">INFINITY</span>
            <span className="logo-sub">TOTAL EVENT SOLUTIONS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="nav-cta">
          Get Quote
        </Link>

        {/* Mobile Burger */}
        <button
          className={`burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mobile-cta">Get a Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
