import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? 'revealed' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const allClients = [
  // Row 1
  { name: 'Ansell', sector: 'Manufacturing' },
  { name: 'Sony Ericsson', sector: 'Technology' },
  { name: 'Suntel', sector: 'Telecom' },
  { name: 'Metropolitan', sector: 'Services' },
  { name: 'Dunhill', sector: 'Fashion' },
  { name: 'Dialog', sector: 'Telecom' },
  { name: 'Access Engineering', sector: 'Construction' },
  { name: 'Cisco', sector: 'Technology' },
  { name: 'Fonterra', sector: 'FMCG' },
  { name: 'hSenid', sector: 'Technology' },
  { name: 'Shell', sector: 'Energy' },
  { name: 'Unilever', sector: 'FMCG' },
  { name: 'Dialog Television', sector: 'Media' },
  { name: 'Commercial Bank', sector: 'Banking' },
  { name: 'AXE', sector: 'FMCG' },
  { name: 'Toyota', sector: 'Automotive' },
  { name: 'BEA', sector: 'Services' },
  { name: 'Finlays', sector: 'Agriculture' },
  { name: 'IBM', sector: 'Technology' },
  { name: 'Carmart', sector: 'Automotive' },
  { name: 'Lions International', sector: 'NGO' },
  { name: 'CBL Munchee', sector: 'FMCG' },
  { name: 'Sunquick', sector: 'FMCG' },
  { name: 'LUX', sector: 'FMCG' },
  { name: 'HSBC', sector: 'Banking' },
  { name: 'Microsoft', sector: 'Technology' },
  { name: 'SLT Mobitel', sector: 'Telecom' },
  { name: 'Nestlé', sector: 'FMCG' },
  { name: 'Sri Lanka Insurance', sector: 'Insurance' },
  { name: 'Janashakthi Life', sector: 'Insurance' },
  { name: 'Sri Lanka Cricket', sector: 'Sports' },
  { name: 'SriLankan Airlines', sector: 'Aviation' },
  { name: 'Bank of Ceylon', sector: 'Banking' },
  { name: 'LOLC', sector: 'Finance' },
  { name: 'Sampath Bank', sector: 'Banking' },
  { name: 'UltraTech Cement', sector: 'Construction' },
  { name: 'Holcim', sector: 'Construction' },
  { name: 'Pirelli', sector: 'Automotive' },
  { name: 'Maliban', sector: 'FMCG' },
  { name: 'ACL Cables', sector: 'Manufacturing' },
  { name: 'ISACA', sector: 'Technology' },
  { name: 'Rexona', sector: 'FMCG' },
  { name: 'HUTCH', sector: 'Telecom' },
  { name: 'Coca-Cola', sector: 'Beverages' },
  { name: 'Oriflame', sector: 'Beauty' },
  { name: 'Okaya', sector: 'Energy' },
  { name: 'HNB', sector: 'Banking' },
  { name: 'Peugeot', sector: 'Automotive' },
  { name: 'AMCHAM Sri Lanka', sector: 'Trade' },
  { name: 'HP', sector: 'Technology' },
  { name: 'Brandix', sector: 'Fashion' },
  { name: 'IESL', sector: 'Professional' },
  { name: 'SLT Rainbow Pages', sector: 'Media' },
  { name: 'John Keells Group', sector: 'Conglomerate' },
  { name: 'Phoenix', sector: 'Services' },
  { name: 'Pan Asia Bank', sector: 'Banking' },
  { name: 'ESPN', sector: 'Media' },
  { name: 'Air Supply', sector: 'Entertainment' },
  { name: 'Seylan Bank', sector: 'Banking' },
];

const sectors = ['All', 'Technology', 'Banking', 'FMCG', 'Telecom', 'Automotive', 'Media', 'Construction', 'Aviation', 'Fashion', 'Entertainment'];

const testimonials = [
  {
    quote: "Infinity Events delivered a world-class production for our 30th anniversary. The attention to detail and creativity exceeded all our expectations.",
    author: "CEO",
    company: "MAGA Engineering",
    sector: "Construction"
  },
  {
    quote: "The team handled our Commonwealth Heads of Government events with absolute precision and professionalism. An outstanding experience.",
    author: "Event Director",
    company: "Ministry of External Affairs",
    sector: "Government"
  },
  {
    quote: "For our product launch, Infinity created a buzz that resonated across all media platforms. Their creative vision is unmatched.",
    author: "Marketing Director",
    company: "Leading FMCG Brand",
    sector: "Corporate"
  },
];

const Clients = () => {
  const [activeSector, setActiveSector] = useState('All');

  const filtered = activeSector === 'All'
    ? allClients
    : allClients.filter(c => c.sector === activeSector);

  return (
    <main className="clients-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
        </div>
        <div className="container">
          <Reveal className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>Clients</span>
            </div>
            <h1>Our <span className="gradient-text">Clients</span></h1>
            <p>Trusted by Sri Lanka's and the world's leading brands, corporations, and institutions.</p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="client-stats-section">
        <div className="container">
          <div className="client-stats-grid">
            {[
              { num: '60+', label: 'Corporate Clients', icon: '🏢' },
              { num: '20+', label: 'Years Trusted', icon: '🏆' },
              { num: '10+', label: 'Industry Sectors', icon: '🌐' },
              { num: '500+', label: 'Events Delivered', icon: '🎉' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 80} className="cs-item-wrap">
                <div className="cs-item">
                  <div className="cs-icon">{s.icon}</div>
                  <div className="cs-num">{s.num}</div>
                  <div className="cs-label">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section className="clients-grid-section">
        <div className="container">
          <Reveal className="cg-header">
            <div className="section-tag">Our Clientele</div>
            <h2 className="section-title">Corporate <span>Clients</span></h2>
            <p className="section-subtitle">A diverse portfolio of clients spanning multiple industries and sectors.</p>
          </Reveal>

          {/* Sector Filter */}
          <Reveal className="sector-filters">
            {sectors.map(s => (
              <button
                key={s}
                className={`filter-btn ${activeSector === s ? 'active' : ''}`}
                onClick={() => setActiveSector(s)}
              >
                {s}
              </button>
            ))}
          </Reveal>

          {/* Client Cards */}
          <div className="clients-cards-grid">
            {filtered.map((client, i) => (
              <Reveal key={client.name} delay={Math.floor(i / 4) * 50} className="client-card-wrap">
                <div className="client-card">
                  <div className="cc-avatar">
                    {client.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="cc-info">
                    <h4>{client.name}</h4>
                    <span className="cc-sector">{client.sector}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <Reveal className="test-header">
            <div className="section-tag">What They Say</div>
            <h2 className="section-title">Client <span>Testimonials</span></h2>
          </Reveal>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 120} className="test-card-wrap">
                <div className="test-card">
                  <div className="tc-quote-icon">"</div>
                  <p className="tc-quote">{t.quote}</p>
                  <div className="tc-author">
                    <div className="tc-avatar">
                      {t.author.substring(0, 1)}
                    </div>
                    <div>
                      <div className="tc-name">{t.author}</div>
                      <div className="tc-company">{t.company} · {t.sector}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="sectors-section">
        <div className="container">
          <Reveal className="sec-header">
            <div className="section-tag">Industries We Serve</div>
            <h2 className="section-title">Across Every <span>Industry</span></h2>
          </Reveal>
          <div className="sectors-grid">
            {[
              { icon: '💻', name: 'Technology' },
              { icon: '🏦', name: 'Banking & Finance' },
              { icon: '🛒', name: 'FMCG' },
              { icon: '📱', name: 'Telecom' },
              { icon: '🚗', name: 'Automotive' },
              { icon: '📺', name: 'Media' },
              { icon: '🏗️', name: 'Construction' },
              { icon: '✈️', name: 'Aviation' },
              { icon: '👗', name: 'Fashion' },
              { icon: '⚡', name: 'Energy' },
              { icon: '🏥', name: 'Healthcare' },
              { icon: '🏆', name: 'Sports' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 50} className="sector-item-wrap">
                <div className="sector-item">
                  <span className="si-icon">{s.icon}</span>
                  <span className="si-name">{s.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta-section">
        <div className="container">
          <Reveal className="ccta-inner">
            <h2>Join Our <span className="gradient-text">Client Family</span></h2>
            <p>Be part of a legacy of extraordinary events. Let's discuss your next event.</p>
            <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
              <Link to="/contact" className="btn-primary">Get In Touch →</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Clients;
