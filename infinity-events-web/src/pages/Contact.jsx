import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { submitContactForm } from '../api/contactApi';

export default function Contact() {
  const { ref, revealClass } = useScrollReveal();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await submitContactForm({});
    setStatus('sent');
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-0">
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24 ${revealClass}`}>
        <SectionTitle title="GET IN TOUCH" subtitle="" center={true} />
        <p className="text-center font-label-accent text-primary-container tracking-[0.2em] max-w-lg mx-auto -mt-10 mb-16 text-[10px] uppercase">
          Masterminds Behind Tomorrow's Global Spectacles
        </p>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-[#111111] border border-border-subtle p-8 rounded-sm text-center flex flex-col items-center">
            <div className="text-2xl mb-4">💬</div>
            <p className="font-body-md text-text-muted text-sm mb-6">Connect with our event consultants via WhatsApp for rapid support.</p>
            <Button className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] px-4 py-2 border-none">
              <a href="https://wa.me/13322224827" target="_blank" rel="noreferrer">+1 (332) 222-4827</a>
            </Button>
          </div>
          <div className="bg-[#111111] border border-border-subtle p-8 rounded-sm text-center flex flex-col items-center">
            <div className="text-2xl mb-4">✉️</div>
            <p className="font-body-md text-text-muted text-sm mb-6">Send us your detailed brief and technical requirements directly.</p>
            <Button variant="primary" className="w-full px-4 py-2 text-xs">
              <a href="mailto:info@infinityeventsint.com">info@infinityeventsint.com</a>
            </Button>
          </div>
          <div className="bg-[#111111] border border-border-subtle p-8 rounded-sm text-center flex flex-col items-center">
            <div className="text-2xl mb-4">📍</div>
            <p className="font-body-md text-text-muted text-sm mb-6">Our creative hubs are located in Colombo, Dubai, and Singapore.</p>
            <Button variant="outline" className="w-full px-4 py-2 text-xs text-white border-white hover:bg-white hover:text-black">VIEW LOCATIONS</Button>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          
          {/* Left Side: Form */}
          <div className="lg:col-span-2">
            <h3 className="font-headline-md text-white mb-10 uppercase text-2xl">START THE CONVERSATION</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col relative group">
                  <label htmlFor="name" className="font-label-accent text-white text-[10px] mb-2">FULL NAME</label>
                  <input type="text" id="name" required className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors" placeholder="e.g. John Doe" />
                </div>
                <div className="flex flex-col relative group">
                  <label htmlFor="email" className="font-label-accent text-white text-[10px] mb-2">EMAIL ADDRESS</label>
                  <input type="email" id="email" required className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col relative group">
                  <label htmlFor="phone" className="font-label-accent text-white text-[10px] mb-2">PHONE NUMBER</label>
                  <input type="tel" id="phone" className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="flex flex-col relative group">
                  <label htmlFor="inquiry" className="font-label-accent text-white text-[10px] mb-2">EVENT TYPE</label>
                  <select id="inquiry" required className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors appearance-none">
                    <option value="" disabled selected>Select Event Type</option>
                    <option value="corporate" className="bg-[#111111]">Corporate Event</option>
                    <option value="wedding" className="bg-[#111111]">Luxury Wedding</option>
                    <option value="concert" className="bg-[#111111]">Live Concert</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col relative group">
                  <label htmlFor="date" className="font-label-accent text-white text-[10px] mb-2">EVENT DATE</label>
                  <input type="date" id="date" className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors" />
                </div>
                <div className="flex flex-col relative group">
                  <label htmlFor="budget" className="font-label-accent text-white text-[10px] mb-2">ESTIMATED BUDGET</label>
                  <select id="budget" className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors appearance-none">
                    <option value="" disabled selected>$10k - $50k</option>
                    <option value="50k-100k" className="bg-[#111111]">$50k - $100k</option>
                    <option value="100k+" className="bg-[#111111]">$100k+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col relative group">
                <label htmlFor="message" className="font-label-accent text-white text-[10px] mb-2">YOUR VISION / MESSAGE</label>
                <textarea id="message" rows="3" required className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors resize-none" placeholder="Describe your exact requirements..."></textarea>
              </div>

              <Button variant="primary" type="submit" disabled={status === 'sending'} className="w-full text-xs">
                {status === 'sending' ? 'SENDING...' : status === 'sent' ? 'MESSAGE SENT' : 'SEND INQUIRY'}
              </Button>
            </form>
          </div>

          {/* Right Side: Info & HQ */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#111111] border border-border-subtle p-8 rounded-sm relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 text-[150px] text-border-subtle opacity-20 pointer-events-none">★</div>
              <h3 className="font-headline-md text-white mb-6 uppercase text-xl relative z-10">INFINITY HQ</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <span className="text-primary-container text-xs mt-1 mr-3">📍</span>
                  <div>
                    <h4 className="font-label-accent text-white text-[10px] mb-1">COLOMBO HQ</h4>
                    <p className="text-text-muted font-body-md text-sm">45, Global Towers, Level 15<br/>Colombo 00400, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-container text-xs mt-1 mr-3">📍</span>
                  <div>
                    <h4 className="font-label-accent text-white text-[10px] mb-1">DUBAI OFFICE</h4>
                    <p className="text-text-muted font-body-md text-sm">Media City Bldg 4, Suite 305<br/>Dubai, UAE</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-subtle flex items-center space-x-4 relative z-10">
                <span className="font-label-accent text-[10px] text-white">FOLLOW US</span>
                <div className="flex space-x-3 text-primary-container text-sm">
                  <a href="#" className="hover:text-white transition-colors">in</a>
                  <a href="#" className="hover:text-white transition-colors">ig</a>
                  <a href="#" className="hover:text-white transition-colors">tw</a>
                </div>
              </div>
            </div>

            <div className="bg-[radial-gradient(ellipse_at_top_right,rgba(255,215,0,0.1)_0%,transparent_70%)] bg-[#0a0a0a] border border-primary-container/30 p-8 rounded-sm">
              <span className="font-label-accent text-primary-container text-[10px] mb-2 block tracking-widest">• ONLINE NOW</span>
              <h3 className="font-headline-md text-white mb-3 text-lg uppercase">NEED AN IMMEDIATE ANSWER?</h3>
              <p className="text-text-muted font-body-md text-sm mb-6">Our event directors are active on WhatsApp for quick consultations.</p>
              <a href="#" className="font-label-accent text-primary-container text-[10px] tracking-widest hover:text-white transition-colors border-b border-primary-container pb-1">
                OPEN WHATSAPP →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#111111] border-t border-border-subtle">
        <div className="py-16 text-center border-b border-border-subtle">
          <SectionTitle title="FIND US" subtitle="" center={true} />
          <p className="font-label-accent text-primary-container tracking-[0.2em] text-[10px] uppercase -mt-10">LOCATED IN THE HEART OF THE ENTERTAINMENT DISTRICT</p>
        </div>
        <div className="w-full h-96 bg-[url('/assets/images/event3.jpg')] bg-cover bg-center opacity-40 grayscale sepia-[0.3]">
          {/* Using a placeholder event image styled to look like a map / location shot */}
        </div>
      </div>
    </div>
  );
}
