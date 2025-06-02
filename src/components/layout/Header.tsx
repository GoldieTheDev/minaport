import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import SocialLinks from '../ui/SocialLinks';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Demos', href: '#demos' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-400/95 backdrop-blur py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-serif font-medium text-primary">
          Karuva<span className="text-white">HD</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`navbar-link ${activeSection === link.href ? 'active-navbar-link' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Links - Desktop */}
        <div className="hidden md:block">
          <SocialLinks />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-400/95 backdrop-blur py-4">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`navbar-link ${activeSection === link.href ? 'active-navbar-link' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-800">
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;