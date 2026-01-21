
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, UserCheck, Activity, Database, Scale, Lock, Shield, Linkedin, Instagram, ExternalLink, Youtube } from 'lucide-react';
import Home from './pages/Home';
import Proof from './pages/Proof';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import { Privacy, Terms, Cookies } from './pages/Legal';

// Shared Components
const CTAButton = ({ className = "" }: { className?: string }) => (
  <Link
    to="/contact"
    className={`inline-flex items-center justify-center px-8 py-3 bg-[#c5a059] text-[#041b1f] font-semibold text-sm uppercase tracking-widest gold-glow transition-all duration-300 ${className}`}
  >
    Book a 15-min Pilot Fit Call
    <ArrowRight className="ml-2 w-4 h-4" />
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Proof', path: '/proof' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#041b1f]/80 backdrop-blur-md border-b border-[#a3d9cf]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-[#f8fafc] tracking-tight">
              Shyam Pitla<span className="text-[#c5a059]">.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-[#c5a059]' : 'text-slate-300 hover:text-[#c5a059]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <CTAButton className="scale-90" />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#041b1f] border-b border-[#a3d9cf]/10 py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-serif text-slate-300 hover:text-[#c5a059]"
            >
              {link.name}
            </Link>
          ))}
          <CTAButton className="w-full text-center" />
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#041b1f] border-t border-[#a3d9cf]/10 pt-24 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif font-bold text-[#f8fafc] tracking-tight block">
            Shyam Pitla<span className="text-[#c5a059]">.</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Architecting Clinical Scale. Non-clinical. Not medical advice. 
            Scaling clinician expertise through governed digital twins.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/shyampitla/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#0a2e36] flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059] hover:text-[#041b1f] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/shyam.pitla/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#0a2e36] flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059] hover:text-[#041b1f] transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@ImpactShowOfficial" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full bg-[#0a2e36] flex items-center justify-center text-[#c5a059] hover:bg-[#c5a059] hover:text-[#041b1f] transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-[#c5a059] uppercase tracking-widest text-[10px] font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Proof', path: '/proof' },
              { name: 'How It Works', path: '/how-it-works' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-slate-400 hover:text-[#c5a059] text-sm transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ecosystem Column */}
        <div>
          <h4 className="text-[#c5a059] uppercase tracking-widest text-[10px] font-bold mb-6">Partners & Projects</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="https://neurascalex.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c5a059] transition-colors flex items-center">
                NeuraScaleX <ExternalLink className="ml-2 w-3 h-3 opacity-50" />
              </a>
            </li>
            <li>
              <a href="https://theimpactshow.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c5a059] transition-colors flex items-center">
                The Impact Show <ExternalLink className="ml-2 w-3 h-3 opacity-50" />
              </a>
            </li>
            <li>
              <a href="https://hrdigitalmedia.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#c5a059] transition-colors flex items-center">
                HR Digital Media <ExternalLink className="ml-2 w-3 h-3 opacity-50" />
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-[#c5a059] uppercase tracking-widest text-[10px] font-bold mb-6">Legal & Governance</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/privacy" className="text-slate-400 hover:text-[#c5a059] text-sm transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="text-slate-400 hover:text-[#c5a059] text-sm transition-colors">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookies" className="text-slate-400 hover:text-[#c5a059] text-sm transition-colors">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#a3d9cf]/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-slate-500 font-medium">
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Shyam Pitla. Governed by the laws of England & Wales.
        </div>
        <div className="flex items-center space-x-2 group">
          <span>Developed by</span>
          <a 
            href="https://hrdigitalmedia.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#c5a059] font-bold hover:underline transition-all"
          >
            HR Digital Media
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { pathname } = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen selection:bg-[#c5a059]/30 selection:text-[#c5a059]">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export { CTAButton };
