import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Top Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0d0d0d"/>
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <svg viewBox="0 0 60 34" fill="none" xmlns="http://www.w3.org/2000/svg" width="50">
                  <ellipse cx="17" cy="17" rx="14" ry="9" stroke="white" strokeWidth="3.5" fill="none"/>
                  <ellipse cx="43" cy="17" rx="14" ry="9" stroke="white" strokeWidth="3.5" fill="none"/>
                  <line x1="35" y1="2" x2="25" y2="32" stroke="white" strokeWidth="2.5"/>
                  <line x1="38" y1="2" x2="28" y2="32" stroke="white" strokeWidth="2.5"/>
                </svg>
                <div>
                  <div className="footer-logo-main">INFINITY</div>
                  <div className="footer-logo-sub">TOTAL EVENT SOLUTIONS</div>
                </div>
              </div>
              <p className="footer-tagline">
                Sri Lanka's premier full-service event management company. From intimate social gatherings to grand international productions — we make every event extraordinary.
              </p>
              <div className="footer-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/clients">Clients</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services">Corporate Events</Link></li>
                <li><Link to="/services">Social Events</Link></li>
                <li><Link to="/services">Live Concerts</Link></li>
                <li><Link to="/services">State Events</Link></li>
                <li><Link to="/services">Fashion & Models</Link></li>
                <li><Link to="/services">International Artists</Link></li>
                <li><Link to="/services">Weddings</Link></li>
                <li><Link to="/services">Theatre & Arts</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Get In Touch</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.22 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <a href="https://wa.me/13322224827">WhatsApp: +1 (332) 222-4827</a>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <a href="mailto:info@infinityeventsint.com">info@infinityeventsint.com</a>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <a href="https://www.infinityeventsint.com">www.infinityeventsint.com</a>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <span>USA · Dubai · Maldives · Indonesia · Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {currentYear} Infinity Events & Entertainment Pvt Ltd. All rights reserved.</p>
            <p className="footer-tagline-bottom">Total Event Solutions — Sri Lanka & Worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
