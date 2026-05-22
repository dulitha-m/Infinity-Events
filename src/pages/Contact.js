import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', eventType: '', eventDate: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.22 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: '+1 (332) 222-4827',
      href: 'https://wa.me/13322224827',
      color: '#25D366',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email',
      value: 'info@infinityeventsint.com',
      href: 'mailto:info@infinityeventsint.com',
      color: '#F5A623',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email (Alt)',
      value: 'info.infinityeventsint@gmail.com',
      href: 'mailto:info.infinityeventsint@gmail.com',
      color: '#C2185B',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      label: 'Website',
      value: 'www.infinityeventsint.com',
      href: 'https://www.infinityeventsint.com',
      color: '#7B1FA2',
    },
  ];

  const offices = [
    { flag: '🇱🇰', country: 'Sri Lanka', label: 'Headquarters' },
    { flag: '🇦🇪', country: 'Dubai, UAE', label: 'Middle East Office' },
    { flag: '🇺🇸', country: 'USA', label: 'North America Office' },
    { flag: '🇲🇻', country: 'Maldives', label: 'Island Operations' },
    { flag: '🇮🇩', country: 'Indonesia', label: 'SE Asia Office' },
  ];

  const eventTypes = [
    'Corporate Event', 'Social Event', 'Live Concert', 'State/Government Event',
    'Fashion Show', 'Wedding', 'Product Launch', 'Conference', 'International Event', 'Other'
  ];

  const budgets = [
    'Under $5,000', '$5,000 – $20,000', '$20,000 – $50,000',
    '$50,000 – $100,000', '$100,000+', 'To be discussed'
  ];

  return (
    <main className="contact-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
        </div>
        <div className="container">
          <Reveal className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>Contact</span>
            </div>
            <h1>Get In <span className="gradient-text">Touch</span></h1>
            <p>Ready to create something extraordinary? Tell us about your vision and we'll bring it to life.</p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT MAIN */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">

            {/* LEFT: Info */}
            <Reveal className="contact-info-col">
              <div className="section-tag">Contact Us</div>
              <h2 className="section-title">Let's Plan Your <span>Next Event</span></h2>
              <p className="ci-desc">
                Whether you have a clear vision or just a spark of an idea, our team is here to help you create an unforgettable event experience.
              </p>

              <div className="ci-cards">
                {contactInfo.map((c, i) => (
                  <a key={i} href={c.href} className="ci-card" target="_blank" rel="noopener noreferrer">
                    <div className="ci-icon" style={{ background: c.color + '18', color: c.color }}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="ci-label">{c.label}</div>
                      <div className="ci-value">{c.value}</div>
                    </div>
                    <svg className="ci-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                ))}
              </div>

              {/* Offices */}
              <div className="ci-offices">
                <h4>Our Offices</h4>
                <div className="offices-list">
                  {offices.map((o, i) => (
                    <div key={i} className="office-item">
                      <span className="o-flag">{o.flag}</span>
                      <div>
                        <div className="o-country">{o.country}</div>
                        <div className="o-label">{o.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="ci-social">
                <h4>Follow Us</h4>
                <div className="social-row">
                  {[
                    { label: 'Facebook', href: 'https://facebook.com', icon: 'f' },
                    { label: 'Instagram', href: 'https://instagram.com', icon: '◉' },
                    { label: 'YouTube', href: 'https://youtube.com', icon: '▶' },
                    { label: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
                      <span>{s.icon}</span>
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* RIGHT: Form */}
            <Reveal delay={200} className="contact-form-col">
              {submitted ? (
                <div className="form-success">
                  <div className="fs-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)} style={{marginTop:'24px'}}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Request a Quote</h3>
                    <p>Fill in the details below and we'll get back to you promptly.</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (xxx) xxx-xxxx" />
                    </div>
                    <div className="form-group">
                      <label>Company / Organisation</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" />
                    </div>
                    <div className="form-group">
                      <label>Event Type *</label>
                      <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                        <option value="">Select event type</option>
                        {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Event Date</label>
                      <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
                    </div>
                    <div className="form-group form-full">
                      <label>Estimated Budget</label>
                      <select name="budget" value={formData.budget} onChange={handleChange}>
                        <option value="">Select budget range</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div className="form-group form-full">
                      <label>Tell Us About Your Event *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your event vision, expected guest count, venue preference, and any special requirements..."
                      />
                    </div>
                  </div>

                  <button type="submit" className={`form-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="form-note">
                    Or reach us directly via WhatsApp at <a href="https://wa.me/13322224827" target="_blank" rel="noopener noreferrer">+1 (332) 222-4827</a>
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT METHODS */}
      <section className="quick-contact-section">
        <div className="container">
          <Reveal className="qc-header">
            <div className="section-tag">Quick Connect</div>
            <h2 className="section-title">Choose Your <span>Preferred Channel</span></h2>
          </Reveal>
          <div className="qc-grid">
            {[
              { icon: '💬', title: 'WhatsApp', desc: 'Instant messaging for quick responses', href: 'https://wa.me/13322224827', cta: 'Chat Now', color: '#25D366' },
              { icon: '📧', title: 'Email', desc: 'Detailed enquiries and formal proposals', href: 'mailto:info@infinityeventsint.com', cta: 'Send Email', color: '#F5A623' },
              { icon: '🌐', title: 'Website', desc: 'Explore our full portfolio online', href: 'https://www.infinityeventsint.com', cta: 'Visit Site', color: '#7B1FA2' },
              { icon: '🌍', title: 'Models Website', desc: 'Professional model management', href: 'https://www.Infinitymodelsint.com', cta: 'Visit Site', color: '#C2185B' },
            ].map((q, i) => (
              <Reveal key={i} delay={i * 80} className="qc-card-wrap">
                <a href={q.href} className="qc-card" target="_blank" rel="noopener noreferrer">
                  <div className="qcc-icon" style={{ color: q.color }}>
                    {q.icon}
                  </div>
                  <h3>{q.title}</h3>
                  <p>{q.desc}</p>
                  <div className="qcc-cta" style={{ color: q.color }}>
                    {q.cta} →
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
