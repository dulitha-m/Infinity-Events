import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

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

const services = [
  {
    id: 'corporate',
    icon: '🏢',
    category: 'Corporate',
    title: 'Corporate Sector',
    subtitle: 'Brand Campaigns · Product Launches · Media Conferences',
    description: 'We specialize in brand building campaigns and product launches creating a buzz around the media, consumers, buyers and business and entertainment communities. We provide marketing services to our clients re-building brands or starting from scratch. Our team of professionals also execute Media campaigns to Media conferences with a high percentage of success.',
    description2: 'We create custom management tools to convey the clients message to the media in a way that it will portray a positive connection to the target audience. From social media management, to press kit design and press releases, the client has the opportunity to be placed in press and media as well as executing successful events.',
    features: ['Brand Building Campaigns', 'Product Launches & Roadshows', 'Media & Press Conferences', 'Media Campaigns', 'Social Media Management', 'Graphics & Presentations', 'Exhibition Stand Design', 'Corporate Galas & Dinners'],
    color: '#F5A623',
  },
  {
    id: 'social',
    icon: '🎉',
    category: 'Social',
    title: 'Social Events',
    subtitle: 'Galas · Weddings · VIP Events · Private Parties',
    description: 'Whether you want to feel as if you have stepped into a whimsical land, journeyed through Paris or just want a funky fun fiesta with our "anything is possible" attitude we can help you make it happen.',
    description2: 'You dream big. We make it happen. We will work with your vision and your budget and provide you with the best of our creativity, professional expertise, outstanding organizational abilities and deep knowledge of resources and contacts.',
    features: ['Fundraisers & Galas', 'Fashion Shows', 'VIP Events', 'New Release Parties', 'Red Carpet Arrivals', 'Sweet 16s & Quinces', 'Cocktail Parties', 'Engagement Celebrations', 'Private Events', 'Bridal & Baby Showers', 'Anniversary Celebrations', 'Birthday Celebrations'],
    color: '#C2185B',
  },
  {
    id: 'concerts',
    icon: '🎶',
    category: 'Live Entertainment',
    title: 'Live Concerts',
    subtitle: 'International Acts · Live Productions · Stage Design',
    description: 'Infinity Events & Entertainment™ is widely known for providing high intensity entertainment to its patrons. Through years of the team\'s combined and diverse experiences, Infinity Events & Entertainment™ has developed a way of uniquely creating theatrical and awe-inspiring live productions that not only leave people breathless, but also one that allows its participating artists and patrons to leave with a story and unforgettable memories about their experience.',
    description2: 'Infinity Events & Entertainment™ common goal is to provide its customers and artists with an environment that will allow them both to be free to enjoy an experience of a lifetime, because every stage has its platform.',
    features: ['International Artist Booking', 'Live Concert Production', 'Stage & Set Design', 'Audio Visual Production', 'Lighting & Special Effects', 'Drone Shows', 'Choreography', 'Dancers & Performers', 'Professional Sound Systems', 'Staging & Trussing'],
    color: '#7B1FA2',
  },
  {
    id: 'state',
    icon: '🏛️',
    category: 'Government',
    title: 'State Events',
    subtitle: 'High-Profile · Protocol Management · Government',
    description: 'With first hand expertise in handling many high profile State events, over the past several years, reached its pinnacle when assigned to handle The Commonwealth Heads of Business Formal Dinner of 2000 Pax Hosted By the President of Sri Lanka and five other major sideline events for the Commonwealth Heads of Government meetings, held in Colombo, Sri Lanka in November 2013.',
    description2: 'The events had to conform strictly to the guidelines given by the Commonwealth Secretariat in the United Kingdom and the Ministry of External Affairs of Sri Lanka. Infinity Events & Entertainment™ has the experience and the expertise to handle such large scale events with excellent PR skills and knowledge in all aspects of protocol, seating plans, coordinating & meeting the requirements of VIP security & executing grand state/international events to exact precision.',
    features: ['State Ceremony Management', 'VIP Protocol & Security', 'Government Conferences', 'Diplomatic Dinners', 'International Summits', 'Seating Plan Coordination', 'PR Management', 'Security Liaison'],
    color: '#FF6D00',
  },
  {
    id: 'fashion',
    icon: '👗',
    category: 'Fashion',
    title: 'Fashion Events & Models',
    subtitle: 'Ramp Shows · Photoshoots · Model Management',
    description: 'Being innovative and original is what counts in the tough world of fashion. We handle fashion events and sourcing models for ramp, events and photoshoots. From the earliest conceptual stages to a live show we can help you deliver the right impression with impact and on budget.',
    description2: 'Our fashion division manages a diverse roster of professional models and provides complete fashion show production services from concept design to runway execution.',
    features: ['Fashion Show Production', 'Model Booking & Management', 'Ramp Show Choreography', 'Photoshoot Coordination', 'Brand Fashion Events', 'Styling Consultation', 'Backstage Management', 'International Model Sourcing'],
    color: '#E91E63',
  },
  {
    id: 'international',
    icon: '🌐',
    category: 'International',
    title: 'International Events',
    subtitle: 'Global Productions · Cross-Border Events',
    description: 'With offices in the USA, Dubai, Maldives, Indonesia and Sri Lanka, Infinity Events & Entertainment™ delivers seamless international event production across borders. We manage the complete logistics of multi-country events, bringing global talent and resources to any destination.',
    description2: 'Our international network of partners and vendors ensures that every international production meets the highest standards, regardless of location.',
    features: ['Multi-Country Productions', 'International Artist Touring', 'Cross-Border Logistics', 'Global Vendor Management', 'International Conferences', 'Trade Fairs & Exhibitions', 'Cultural Exchange Events', 'Sports Events'],
    color: '#00ACC1',
  },
];

const allServices = [
  'Promoting, Sourcing & Managing International Artists, Performers & Entertainers',
  'Promoting, Managing & Production of International Events',
  'Promoting & Managing Professional Models (ramp, photoshoots, events)',
  'Fashion Events',
  'Drone Shows',
  'Product Launches & Roadshows',
  'Conferences & Media Conferences',
  'Media Campaigns',
  'Graphics & Presentations',
  'Exhibition Stand Design & Management',
  'Lighting & Effects',
  'Audio Visual Productions',
  'Professional Sound Systems',
  'Installation of Architectural Lighting (Indoor & Outdoor)',
  'Installation of Professional Sound Systems (Auditoriums, Restaurants, Cafes, Clubs)',
  'Renting of Specialized Lighting, Effects & Lasers',
  'Renting of Professional Sound Reinforcement Systems',
  'Furniture & Accessories',
  'Live Entertainment',
  'Choreography for Fashion Shows',
  'Renting of Audio & Visual Equipment',
  'Dancers & Performers',
  'Professional Photography & Videography',
  'Animation & Graphic Designing',
  'Web Design & Publishing',
  'Installation of Audio & Visual Equipment',
  'Staging & Technical Direction',
  'Staging, Sets & Trussing',
];

const Services = () => {
  const [activeService, setActiveService] = useState('corporate');

  const active = services.find(s => s.id === activeService);

  return (
    <main className="services-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
        </div>
        <div className="container">
          <Reveal className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>Services</span>
            </div>
            <h1>Our <span className="gradient-text">Services</span></h1>
            <p>Complete event solutions across every market segment — from intimate social gatherings to grand international productions.</p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE TABS */}
      <section className="service-tabs-section">
        <div className="container">
          <div className="service-tabs">
            {services.map(s => (
              <button
                key={s.id}
                className={`service-tab ${activeService === s.id ? 'active' : ''}`}
                onClick={() => setActiveService(s.id)}
                style={activeService === s.id ? { '--tab-color': s.color } : {}}
              >
                <span className="tab-icon">{s.icon}</span>
                <span>{s.category}</span>
              </button>
            ))}
          </div>

          {active && (
            <div className="service-detail" key={active.id}>
              <div className="sd-grid">
                <div className="sd-left">
                  <div className="sd-badge" style={{ color: active.color, borderColor: active.color + '40', background: active.color + '10' }}>
                    {active.icon} {active.category}
                  </div>
                  <h2 className="sd-title">{active.title}</h2>
                  <p className="sd-subtitle">{active.subtitle}</p>
                  <p className="sd-desc">{active.description}</p>
                  {active.description2 && <p className="sd-desc" style={{marginTop:'16px'}}>{active.description2}</p>}
                  <Link to="/contact" className="btn-primary" style={{marginTop:'32px', display:'inline-flex'}}>
                    Enquire Now →
                  </Link>
                </div>
                <div className="sd-right">
                  <div className="sd-features-card" style={{'--card-color': active.color}}>
                    <h4>What's Included</h4>
                    <ul className="sd-features">
                      {active.features.map((f, i) => (
                        <li key={i}>
                          <span className="sf-check" style={{background: active.color}}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ALL SERVICES LIST */}
      <section className="all-services-section">
        <div className="container">
          <Reveal className="as-header">
            <div className="section-tag">Complete Portfolio</div>
            <h2 className="section-title">All <span>Services</span></h2>
            <p className="section-subtitle">The full spectrum of our event production and management capabilities.</p>
          </Reveal>
          <div className="all-services-grid">
            {allServices.map((s, i) => (
              <Reveal key={i} delay={Math.floor(i / 3) * 60} className="as-item-wrap">
                <div className="as-item">
                  <div className="as-dot"></div>
                  <span>{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <Reveal className="why-header">
            <div className="section-tag">Why Infinity</div>
            <h2 className="section-title">Why Choose <span>Us</span></h2>
          </Reveal>
          <div className="why-grid">
            {[
              { icon: '🎯', title: 'Precision Execution', desc: 'Every event is executed with meticulous attention to detail, quality and originality.' },
              { icon: '💡', title: 'Creative Vision', desc: 'Our creative team brings fresh, innovative ideas that set your event apart.' },
              { icon: '🌍', title: 'Global Network', desc: 'Access to an international network of artists, vendors and partners across 5 countries.' },
              { icon: '🤝', title: 'Trusted Partnerships', desc: 'Over 50 major corporate clients trust us with their most important events.' },
              { icon: '🔧', title: 'End-to-End Service', desc: 'From concept and planning through to execution and post-event — we handle it all.' },
              { icon: '📞', title: 'Constant Communication', desc: 'Transparent, consistent communication throughout every phase of your event.' },
            ].map((w, i) => (
              <Reveal key={i} delay={i * 80} className="why-card-wrap">
                <div className="why-card">
                  <div className="wc-icon">{w.icon}</div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-section">
        <div className="container">
          <Reveal className="svc-cta-inner">
            <h2>Have an Event in Mind?</h2>
            <p>Tell us about your vision and we'll bring it to life.</p>
            <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
              <Link to="/contact" className="btn-primary">Start Planning →</Link>
              <a href="https://wa.me/13322224827" className="btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Services;
