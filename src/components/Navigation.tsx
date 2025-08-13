import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQs', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    if (isOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="
          fixed top-2 left-1/2 transform -translate-x-1/2
          w-[95%] max-w-6xl z-50
          bg-background/90 backdrop-blur-lg border border-border
          transition-all duration-150
          rounded-full
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-12 px-2">
            {/* Logo (Left) */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2 group">
                <span className="text-xl font-bold text-primary">
                  ECSC
                </span>
              </Link>
            </div>

            {/* Navigation (Centered absolutely) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-150 ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  } group`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform origin-left transition-transform duration-150 ${
                      isActive(item.path)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile menu button (Right) */}
            <div className="flex-shrink-0 lg:hidden ml-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="p-2 !text-primary !hover:text-primary !focus:text-primary !active:text-primary bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`lg:hidden fixed top-[56px] left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-40
          bg-background/90 backdrop-blur-lg border border-border rounded-2xl
          transition-all duration-150 ease-in-out overflow-hidden
          ${isOpen || isAnimating ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
        style={{ top: 'calc(2rem + 5rem/2)' }}
      >
        <div className="pt-4 pb-6 px-2">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => toggleMenu()}
                className={`block px-4 py-3 text-sm font-medium transition-colors rounded-lg text-center
                  ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;