import { Link } from 'react-router-dom';

export default function Footer() { 
  return (
    <footer className="bg-surface-base border-t border-border-subtle pt-16 pb-8 mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full border-2 border-primary-container flex items-center justify-center">
              <span className="text-primary-container font-display font-bold text-xs">∞</span>
            </div>
            <span className="text-lg font-headline-md tracking-widest text-white">INFINITY</span>
          </div>
          <p className="text-text-muted font-body-md max-w-sm">
            Total Event Solutions. Elevating global luxury festivals, corporate summits, and premium entertainment experiences.
          </p>
        </div>
        
        <div>
          <h4 className="font-label-accent text-white mb-6">Explore</h4>
          <div className="flex flex-col space-y-3 text-text-muted font-body-md">
            <Link to="/services" className="hover:text-primary-container transition-colors">Services</Link>
            <Link to="/events" className="hover:text-primary-container transition-colors">Events</Link>
            <Link to="/gallery" className="hover:text-primary-container transition-colors">Gallery</Link>
            <Link to="/artists" className="hover:text-primary-container transition-colors">Artists</Link>
          </div>
        </div>

        <div>
          <h4 className="font-label-accent text-white mb-6">Contact</h4>
          <div className="flex flex-col space-y-3 text-text-muted font-body-md">
            <p>+1 (332) 222-4827</p>
            <p>info@infinityeventsint.com</p>
            <p className="mt-4">USA · Dubai · Maldives · Indonesia · Sri Lanka</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-text-muted font-body-md text-sm">
        <p>&copy; {new Date().getFullYear()} Infinity Events & Entertainment Pvt Ltd. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  ); 
}
