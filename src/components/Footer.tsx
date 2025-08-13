import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-glass border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add left margin on mobile and tablet, reset on desktop */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:flex lg:space-x-20 lg:gap-0 ml-6 md:ml-12 lg:ml-0">
          {/* ChainLaunch Section */}
          <div className="lg:flex-shrink-0 lg:w-72 lg:pr-8 lg:mr-10">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">
                ECSC
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-xs">
              Discover and back top crypto projects early. Invest smarter with ECSC.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:flex-1 lg:min-w-[150px] lg:mr-10">
            <h3 className="text-sm font-semibold mb-4 md:ml-10 ">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors md:ml-10 ">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors md:ml-10 ">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors md:ml-10 ">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors md:ml-10 ">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:flex-1 lg:min-w-[150px] lg:mr-10">
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@eucsc.org </li>
              <li>+1 (555) 123-4567</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="lg:flex-1 lg:min-w-[150px]">
            <h3 className="text-sm font-semibold mb-4 md:ml-10 ">Follow Us</h3>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors md:ml-10 ">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors md:ml-10 ">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors md:ml-10 ">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors md:ml-10 ">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ECSC. All rights reserved. | Cryptocurrency investments carry significant risk.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;