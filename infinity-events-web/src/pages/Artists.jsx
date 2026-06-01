import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Artists() {
  const { ref, revealClass } = useScrollReveal();

  const manageList = [
    { title: 'INTERNATIONAL MUSIC ARTISTS', desc: 'Grammy-winning performers, world-renowned DJs, and legendary jazz ensembles for your premier event.', icon: '🎵' },
    { title: 'ENTERTAINERS & PERFORMERS', desc: 'Breathtaking aerialists, illusionists, and immersive theatrical troupes that redefine live performance.', icon: '🎭' },
    { title: 'FASHION MODELS', desc: 'High-fashion talent for runways, brand launches, and luxury editorial campaigns worldwide.', icon: '💃' },
    { title: 'CULTURAL ARTISTS', desc: 'Traditional masters of world arts, from calligraphers to unique heritage dance ensembles.', icon: '🎨' }
  ];

  const steps = [
    { title: 'SUBMIT REQUEST', desc: 'Share your event details and artist wishlist via our comprehensive brief portal.', icon: '📄' },
    { title: 'SOURCE & NEGOTIATE', desc: 'Our global team handles contracts, travel logistics, and artistic riders on your behalf.', icon: '🤝' },
    { title: 'CONFIRMED & DELIVERED', desc: 'Artist arrives fully prepared to deliver a world-class show, managed by Infinity experts.', icon: '✓' }
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <div ref={ref} className={`max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32 text-center ${revealClass}`}>
        <h1 className="font-display-xl text-white mb-6 uppercase">
          WORLD-CLASS <br/><span className="text-primary-container">ARTISTS & PERFORMERS</span>
        </h1>
        <p className="font-body-lg text-text-muted max-w-2xl mx-auto mb-10">
          Curating elite talent from across the globe for high-profile corporate galas, private soirées, and international festivals.
        </p>
        <Button variant="primary" className="mx-auto">BOOK AN ARTIST</Button>
      </div>

      {/* What We Manage */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-32">
        <SectionTitle title="WHAT WE MANAGE" subtitle="" center={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {manageList.map((item, i) => (
            <div key={i} className="bg-[#111111] border border-border-subtle p-8 rounded-sm hover:border-primary-container/50 transition-colors flex flex-col items-start h-full">
              <div className="text-primary-container text-xl mb-6">{item.icon}</div>
              <h3 className="font-headline-md text-white text-lg mb-4 uppercase">{item.title}</h3>
              <p className="text-text-muted font-body-md text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#0a0a0a] border-y border-border-subtle py-24 mb-32">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-lg text-white mb-2 uppercase">HOW IT WORKS</h2>
          <span className="font-label-accent text-primary-container tracking-widest text-[10px] mb-16 block">THE SEAMLESS PATH TO PERFORMANCE</span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-border-subtle z-0"></div>
            
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 bg-[#111111] border border-primary-container/30 rounded-md flex items-center justify-center text-primary-container text-3xl mb-6 shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                  {step.icon}
                </div>
                <h3 className="font-headline-md text-white text-xl mb-3 uppercase">{step.title}</h3>
                <p className="text-text-muted font-body-md text-sm max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="max-w-3xl mx-auto px-margin-mobile">
        <div className="bg-[#111111] border border-border-subtle p-12 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="text-center mb-10">
            <h2 className="font-headline-lg text-white mb-4 uppercase text-3xl">LOOKING FOR A SPECIFIC ARTIST?</h2>
            <p className="text-text-muted font-body-md text-sm">Can't find what you're looking for? Our talent scouts can source any performer worldwide.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col relative">
                <label className="font-label-accent text-white text-[10px] mb-2">YOUR NAME</label>
                <input type="text" className="bg-transparent border-b border-border-subtle text-white font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors" placeholder="Enter your full name" />
              </div>
              <div className="flex flex-col relative">
                <label className="font-label-accent text-white text-[10px] mb-2">EVENT DATE</label>
                <input type="date" className="bg-transparent border-b border-border-subtle text-text-muted font-body-md py-2 focus:outline-none focus:border-primary-container transition-colors" />
              </div>
            </div>
            
            <Button variant="primary" type="button" className="w-full mt-8">SEND INQUIRY</Button>
            
            <div className="text-center mt-6">
              <span className="text-text-muted text-sm">Immediate assistance? </span>
              <a href="#" className="text-primary-container font-bold text-sm border-b border-primary-container pb-0.5">WhatsApp Us Now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
