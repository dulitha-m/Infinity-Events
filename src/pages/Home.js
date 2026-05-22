import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ── Animated Counter ── */
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(ease * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Reveal on scroll ── */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const services = [
    {
      icon: '🎤',
      title: 'International Artists',
      desc: 'Booking, promoting & managing world-class international artists, entertainers and performers.',
      link: '/services'
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      desc: 'Brand launches, product campaigns, media conferences and corporate galas executed flawlessly.',
      link: '/services'
    },
    {
      icon: '🎶',
      title: 'Live Concerts',
      desc: 'High-intensity theatrical live productions that leave audiences breathless with unforgettable memories.',
      link: '/services'
    },
    {
      icon: '💍',
      title: 'Weddings & Social',
      desc: 'From intimate ceremonies to grand celebrations — we transform your vision into reality.',
      link: '/services'
    },
    {
      icon: '👗',
      title: 'Fashion & Models',
      desc: 'Ramp shows, photoshoots, fashion events and professional model management services.',
      link: '/services'
    },
    {
      icon: '🌐',
      title: 'State & International',
      desc: 'High-profile government and international events handled with precision and protocol expertise.',
      link: '/services'
    },
  ];

  const stats = [
    { value: 20, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Events Executed' },
    { value: 50, suffix: '+', label: 'Corporate Clients' },
    { value: 5, suffix: '', label: 'Countries' },
  ];

  const markets = [
    'Corporate', 'Social', 'State Events', 'International Events',
    'Outdoor Events', 'Weddings', 'Live Concerts', 'Fashion Events', 'Theatre & Arts'
  ];

  const clients = [
    'Dialog', 'HSBC', 'Microsoft', 'Cisco', 'Unilever', 'Coca-Cola',
    'Toyota', 'IBM', 'Commercial Bank', 'SriLankan Airlines', 'Nestlé', 'Shell'
  ];

  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
          <div className="hero-grid-overlay"></div>
        </div>

        <div className="hero-content container">
          <div className={`hero-text ${heroVisible ? 'visible' : ''}`}>
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Sri Lanka & Worldwide
            </div>
            <h1 className="hero-title">
              <span className="hero-title-line1">INFINITY</span>
              <span className="hero-title-line2">
                <span className="gradient-text">Total Event</span>
              </span>
              <span className="hero-title-line3">Solutions</span>
            </h1>
            <p className="hero-desc">
              A full-service event management company delivering extraordinary experiences 
              across Sri Lanka, Dubai, Maldives, Indonesia and the USA.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn-primary">
                Explore Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline">
                Get a Quote
              </Link>
            </div>
            <div className="hero-locations">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              USA · Dubai · Maldives · Indonesia · Sri Lanka
            </div>
          </div>

          {/* Floating cards */}
          <div className={`hero-visual ${heroVisible ? 'visible' : ''}`}>
            <div className="hero-logo-card">
              <div className="hlc-logo">
                <svg viewBox="0 0 90 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="25" cy="25" rx="21" ry="13" stroke="white" strokeWidth="4" fill="none"/>
                  <ellipse cx="65" cy="25" rx="21" ry="13" stroke="white" strokeWidth="4" fill="none"/>
                  <line x1="52" y1="3" x2="38" y2="47" stroke="white" strokeWidth="3"/>
                  <line x1="57" y1="3" x2="43" y2="47" stroke="white" strokeWidth="3"/>
                </svg>
              </div>
              <div className="hlc-name">INFINITY</div>
              <div className="hlc-sub">TOTAL EVENT SOLUTIONS</div>
              <div className="hlc-divider"></div>
              <div className="hlc-tagline">Events & Entertainment PVT LTD</div>
            </div>

            <div className="floating-card fc-1">
              <div className="fc-icon">🏆</div>
              <div>
                <div className="fc-num">500+</div>
                <div className="fc-label">Events</div>
              </div>
            </div>
            <div className="floating-card fc-2">
              <div className="fc-icon">🌍</div>
              <div>
                <div className="fc-num">5</div>
                <div className="fc-label">Countries</div>
              </div>
            </div>
            <div className="floating-card fc-3">
              <div className="fc-icon">⭐</div>
              <div>
                <div className="fc-num">20+</div>
                <div className="fc-label">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-content">
            {[...markets, ...markets].map((m, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot">◆</span>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT INTRO ── */}
      <section className="about-intro section-spacing">
        <div className="container">
          <div className="about-intro-grid">
            <Reveal className="about-intro-left">
              <div className="section-tag">Our Story</div>
              <h2 className="section-title">
                Crafting <span>Extraordinary</span><br />Events Since Inception
              </h2>
              <p className="section-subtitle">
                Infinity Events & Entertainment™ is a provider of integrated solutions and services for events in Sri Lanka and overseas, covering five core market segments with passion, precision, and professionalism.
              </p>
              <p className="about-extra">
                We are a full-service event planning company that provides complete planning, consulting, and supervision for both corporate and social events. Fuelled by passion and big ideas, we deliver customized, strategic event experiences where guests connect with clients in personally relevant and memorable ways.
              </p>
              <Link to="/about" className="btn-primary" style={{marginTop: '32px', display: 'inline-flex'}}>
                Learn More About Us
              </Link>
            </Reveal>

            <Reveal delay={200} className="about-intro-right">
              <div className="about-visual-grid">
                <div className="av-card av-large">
                  <div className="av-content">
                    <div className="av-icon">🎭</div>
                    <h3>Creative Vision</h3>
                    <p>Award-winning event design with a constant eye towards originality and results.</p>
                  </div>
                </div>
                <div className="av-card">
                  <div className="av-content">
                    <div className="av-icon">🤝</div>
                    <h3>Client Focus</h3>
                    <p>Long-term partnerships built on trust and exceptional service.</p>
                  </div>
                </div>
                <div className="av-card">
                  <div className="av-content">
                    <div className="av-icon">🔧</div>
                    <h3>Full Service</h3>
                    <p>From concept to completion — every detail expertly managed.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="stats-bg">
          <div className="stats-orb"></div>
        </div>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 100} className="stat-item">
                <div className="stat-number">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-line"></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section section-spacing">
        <div className="container">
          <Reveal className="services-header">
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">
              Complete <span>Event Solutions</span>
            </h2>
            <p className="section-subtitle">
              From intimate gatherings to grand international productions, we cover every segment of the events industry.
            </p>
          </Reveal>

          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={i} delay={i * 80} className="service-card-wrap">
                <Link to={service.link} className="service-card">
                  <div className="sc-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="sc-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                  <div className="sc-glow"></div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── MISSION BAND ── */}
      <section className="mission-band">
        <div className="mission-bg"></div>
        <div className="container">
          <div className="mission-inner">
            <Reveal className="mission-content">
              <div className="section-tag">Our Mission</div>
              <h2 className="section-title">
                Balancing <span>Creativity</span> with<br />Competent Execution
              </h2>
              <p className="section-subtitle">
                Successful projects require creativity and execution working in harmony. We offer our clients peace of mind through a solid, secure, and professional organisation dedicated to creating exemplary productions.
              </p>
              <div className="mission-points">
                {[
                  'Work with clients for their long-term benefit',
                  'Constantly research and develop new strategies',
                  'Provide an exceptional service',
                  'Maintain constant communication',
                ].map((point, i) => (
                  <div key={i} className="mission-point">
                    <div className="mp-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    {point}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200} className="mission-visual">
              <div className="mission-card">
                <div className="mc-quote">"</div>
                <p>Every stage has its platform. We are dedicated to creating theatrical and awe-inspiring live productions that leave people breathless.</p>
                <div className="mc-author">
                  <div className="mc-dot"></div>
                  <span>Infinity Events & Entertainment™</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLIENTS MARQUEE ── */}
      <section className="clients-marquee-section section-spacing">
        <div className="container">
          <Reveal>
            <div className="section-tag" style={{margin: '0 auto 16px', display: 'table'}}>Trusted By</div>
            <h2 className="section-title" style={{textAlign:'center', marginBottom: '12px'}}>
              Our <span>Corporate Clients</span>
            </h2>
            <p className="section-subtitle" style={{textAlign:'center', margin:'0 auto 56px'}}>
              Trusted by Sri Lanka's and the world's leading brands and institutions.
            </p>
          </Reveal>
        </div>
        <div className="clients-track-wrapper">
          <div className="clients-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="client-badge">{c}</div>
            ))}
          </div>
        </div>
        <div style={{textAlign:'center', marginTop:'48px'}}>
          <Link to="/clients" className="btn-outline">See All Clients →</Link>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="cta-bg"></div>
        <div className="container">
          <Reveal className="cta-inner">
            <h2>Ready to Create Something <span>Extraordinary?</span></h2>
            <p>Let's bring your vision to life. Get in touch with our team today.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                Start Planning →
              </Link>
              <a href="https://wa.me/13322224827" className="btn-outline" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
