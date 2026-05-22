import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

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

// Gallery items with Unsplash images related to events
const galleryItems = [
  { id: 1, category: 'corporate', title: 'MAGA Engineering 30th Anniversary', size: 'large', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', tags: ['Corporate', 'Anniversary'] },
  { id: 2, category: 'concerts', title: 'Live Concert Production', size: 'tall', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80', tags: ['Concerts', 'Stage'] },
  { id: 3, category: 'social', title: 'Gala Dinner Event', size: 'normal', img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=80', tags: ['Social', 'Gala'] },
  { id: 4, category: 'fashion', title: 'International Fashion Show', size: 'normal', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80', tags: ['Fashion', 'Runway'] },
  { id: 5, category: 'concerts', title: 'SAGA Music Concert', size: 'large', img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', tags: ['Concerts', 'Music'] },
  { id: 6, category: 'corporate', title: 'Product Launch Event', size: 'normal', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80', tags: ['Corporate', 'Launch'] },
  { id: 7, category: 'state', title: 'Commonwealth Heads Meeting', size: 'normal', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80', tags: ['State', 'Diplomatic'] },
  { id: 8, category: 'social', title: 'VIP Red Carpet Arrival', size: 'tall', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', tags: ['Social', 'VIP'] },
  { id: 9, category: 'concerts', title: 'Stage Lighting Production', size: 'normal', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', tags: ['Concerts', 'Lighting'] },
  { id: 10, category: 'fashion', title: 'Ramp Walk Show', size: 'large', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', tags: ['Fashion', 'Models'] },
  { id: 11, category: 'corporate', title: 'Corporate Conference', size: 'normal', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80', tags: ['Corporate', 'Conference'] },
  { id: 12, category: 'social', title: 'Themed Private Event', size: 'normal', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', tags: ['Social', 'Private'] },
  { id: 13, category: 'concerts', title: 'Live Entertainment Show', size: 'normal', img: 'https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=600&q=80', tags: ['Entertainment', 'Live'] },
  { id: 14, category: 'corporate', title: 'Brand Launch Campaign', size: 'normal', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80', tags: ['Corporate', 'Brand'] },
  { id: 15, category: 'state', title: 'State Gala Dinner', size: 'large', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', tags: ['State', 'Dinner'] },
  { id: 16, category: 'fashion', title: 'Designer Fashion Week', size: 'tall', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', tags: ['Fashion', 'Designer'] },
];

const categories = [
  { id: 'all', label: 'All Events' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'concerts', label: 'Live Concerts' },
  { id: 'social', label: 'Social' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'state', label: 'State Events' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <main className="gallery-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="ph-orb ph-orb-1"></div>
          <div className="ph-orb ph-orb-2"></div>
        </div>
        <div className="container">
          <Reveal className="page-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link><span>/</span><span>Gallery</span>
            </div>
            <h1>Event <span className="gradient-text">Gallery</span></h1>
            <p>A showcase of our finest events — from intimate celebrations to spectacular large-scale productions.</p>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="container">
          {/* Filter Tabs */}
          <Reveal className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </Reveal>

          {/* Masonry Grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`gallery-item gi-${item.size}`}
                onClick={() => openLightbox(item)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gi-overlay">
                  <div className="gi-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="gi-tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{item.title}</h3>
                  <div className="gi-zoom">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="video-section">
        <div className="container">
          <Reveal className="vs-header">
            <div className="section-tag">Behind The Scenes</div>
            <h2 className="section-title">Our <span>Productions</span></h2>
            <p className="section-subtitle">Experience the scale, creativity and execution that defines every Infinity event.</p>
          </Reveal>
          <div className="video-grid">
            {[
              { title: 'Corporate Events Reel', duration: '3:24', category: 'Corporate' },
              { title: 'Live Concerts Highlights', duration: '5:12', category: 'Concerts' },
              { title: 'Fashion Shows Compilation', duration: '4:08', category: 'Fashion' },
            ].map((v, i) => (
              <Reveal key={i} delay={i * 100} className="video-card-wrap">
                <div className="video-card">
                  <div className="vc-thumb">
                    <img
                      src={`https://images.unsplash.com/photo-${['1492684223066-81342ee5ff30', '1470229722913-7c0e2dbbafd3', '1509631179647-0177331693ae'][i]}?w=600&q=80`}
                      alt={v.title}
                    />
                    <div className="vc-play">
                      <div className="play-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </div>
                    </div>
                    <div className="vc-duration">{v.duration}</div>
                  </div>
                  <div className="vc-info">
                    <span className="vc-cat">{v.category}</span>
                    <h4>{v.title}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="lb-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img.replace('w=600', 'w=1200').replace('w=800', 'w=1200')} alt={lightbox.title} />
            <div className="lb-caption">
              <div className="lb-tags">
                {lightbox.tags.map(t => <span key={t} className="gi-tag">{t}</span>)}
              </div>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="gallery-cta-section">
        <div className="container">
          <Reveal className="gcta-inner">
            <h2>Want Your Event in Our <span className="gradient-text">Gallery?</span></h2>
            <p>Let's create unforgettable moments together.</p>
            <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap',marginTop:'32px'}}>
              <Link to="/contact" className="btn-primary">Plan Your Event →</Link>
              <Link to="/services" className="btn-outline">View Services</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
