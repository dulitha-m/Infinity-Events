import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const Reveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
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

const About = () => {
  const segments = [
    { icon: '🎤', title: 'International Artists', desc: 'Booking, promoting & managing international artists, entertainers and performers worldwide.' },
    { icon: '🌐', title: 'International Events', desc: 'Promoting, managing and producing international events of any scale.' },
    { icon: '👗', title: 'Fashion Events & Models', desc: 'Booking, promoting and managing fashion events and professional models.' },
    { icon: '🎓', title: 'Congresses & Conventions', desc: 'Full management of conferences, congresses and large-scale conventions.' },
    { icon: '🏛️', title: 'Cultural, Sports & Political', desc: 'Handling high-profile cultural, sports and political events with expertise.' },
    { icon: '🎉', title: 'Trade Fairs & Exhibitions', desc: 'Social & private events for professionals, corporate clientele and the general public.' },
  ];

  const values = [
    { num: '01', title: 'Long-Term Benefit', desc: 'We work with our clients for their long-term benefit, building lasting partnerships.' },
    { num: '02', title: 'Constant Innovation', desc: 'We constantly research and develop new strategies, technologies and skills.' },
    { num: '03', title: 'Exceptional Service', desc: 'Providing an exceptional standard of service is at the core of everything we do.' },
    { num: '04', title: 'Open Communication', desc: 'We maintain constant, transparent communication at every stage of your event.' },
  ];

  return (
    <main className="about-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
        </div>
        <div className="container">
          <Reveal className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About</span>
            </div>
            <h1>About <span className="gradient-text">Infinity Events</span></h1>
            <p>Sri Lanka's premier full-service event management company — delivering extraordinary experiences across the globe.</p>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-we-are">
        <div className="container">
          <div className="wwa-grid">
            <Reveal className="wwa-left">
              <div className="section-tag">Who We Are</div>
              <h2 className="section-title">Total Event <span>Solutions</span></h2>
              <p className="section-subtitle">
                Infinity Events & Entertainment™ is a provider of integrated solutions and services for events in Sri Lanka and overseas, covering the market's five main segments.
              </p>
              <p className="about-para">
                We are a full-service event planning company that provides complete planning, consulting, and supervision for both corporate and social events. Fuelled by passion and big ideas, we provide customized, strategic event experiences where guests connect with our clients in ways that are personally relevant and memorable.
              </p>
              <p className="about-para">
                Our team offers the creative vision, professionalism, and event expertise to create spectacular events with a constant eye towards detail, quality, originality, and results. Infinity Events & Entertainment™ believes 100% in the team we have put together.
              </p>
              <p className="about-para">
                Everything from the invitations, cocktails, wine list, music, flowers and menu will receive our expert attention so that you can relax and be a welcoming host to your guests.
              </p>
            </Reveal>
            <Reveal delay={200} className="wwa-right">
              <div className="wwa-visual">
                <div className="wwa-main-card">
                  <div className="wwa-icon-big">∞</div>
                  <h3>Infinity Events & Entertainment™</h3>
                  <p>Pvt Ltd — Established in Sri Lanka</p>
                  <div className="wwa-countries">
                    {['🇺🇸 USA', '🇦🇪 Dubai', '🇲🇻 Maldives', '🇮🇩 Indonesia', '🇱🇰 Sri Lanka'].map(c => (
                      <span key={c} className="country-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FIVE SEGMENTS */}
      <section className="segments-section">
        <div className="container">
          <Reveal className="seg-header">
            <div className="section-tag">Our Core Business</div>
            <h2 className="section-title">Five Market <span>Segments</span></h2>
            <p className="section-subtitle">We cover the complete spectrum of the events industry across five core segments.</p>
          </Reveal>
          <div className="segments-grid">
            {segments.map((s, i) => (
              <Reveal key={i} delay={i * 80} className="seg-card-wrap">
                <div className="seg-card">
                  <div className="seg-icon">{s.icon}</div>
                  <div className="seg-num">0{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content-grid">
            <Reveal>
              <div className="section-tag">Our Mission</div>
              <h2 className="section-title">Creativity Meets <span>Execution</span></h2>
              <p className="about-para">
                Successful projects require a balance of creativity and competent execution. These elements need to work together to achieve outstanding results. Too often a great idea is let down by poor production techniques, or an idea is too production-orientated and lacking in creativity.
              </p>
              <p className="about-para">
                We offer our clients the peace of mind that comes with having a solid, secure and professional organisation dedicated to create exemplary productions and events.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="values-list">
                {values.map((v, i) => (
                  <div key={i} className="value-item">
                    <div className="vi-num">{v.num}</div>
                    <div className="vi-content">
                      <h4>{v.title}</h4>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="global-section">
        <div className="container">
          <Reveal className="global-header">
            <div className="section-tag">Global Reach</div>
            <h2 className="section-title">Worldwide <span>Presence</span></h2>
            <p className="section-subtitle">Operating across multiple countries, we bring global expertise to every event.</p>
          </Reveal>
          <div className="global-grid">
            {[
              { flag: '🇱🇰', country: 'Sri Lanka', desc: 'Headquarters & primary operations center' },
              { flag: '🇦🇪', country: 'Dubai, UAE', desc: 'Middle East regional operations' },
              { flag: '🇺🇸', country: 'USA', desc: 'North American office & artist relations' },
              { flag: '🇲🇻', country: 'Maldives', desc: 'Island resort & luxury event services' },
              { flag: '🇮🇩', country: 'Indonesia', desc: 'South East Asia regional office' },
            ].map((loc, i) => (
              <Reveal key={i} delay={i * 100} className="global-card-wrap">
                <div className="global-card">
                  <div className="gc-flag">{loc.flag}</div>
                  <h3>{loc.country}</h3>
                  <p>{loc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <Reveal className="about-cta-inner">
            <h2>Ready to Work <span className="gradient-text">Together?</span></h2>
            <p>Let's create something extraordinary for your next event.</p>
            <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginTop:'32px'}}>
              <Link to="/contact" className="btn-primary">Get In Touch</Link>
              <Link to="/services" className="btn-outline">Our Services →</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default About;
