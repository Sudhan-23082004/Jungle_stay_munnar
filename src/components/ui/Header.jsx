import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Accommodations', path: '/accommodations', icon: 'Building' },
    { label: 'Gallery', path: '/gallery', icon: 'Image' },
    { label: 'About', path: '/about-us', icon: 'Info' },
    { label: 'Contact', path: '/contact', icon: 'Phone' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBookingClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-medium ease-organic ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-organic-medium' 
          : 'bg-background/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group transition-organic-fast hover:opacity-80"
          >
            {/* <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center shadow-organic-subtle">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 lg:w-7 lg:h-7 text-primary-foreground"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div> */}
            <div className="hidden sm:block">
              <img
                src="/assets/images/Logo/logo 1 - Copy.png" // Update path based on your project structure
                alt="Junglestay Munnar Logo"
                className="w-10 h-10 lg:w-16 lg:h-16 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-heading font-bold text-primary leading-tight">
                Jungle Stay
              </h1>
              <p className="text-xs lg:text-sm font-caption text-text-secondary -mt-1">
                Tent & Cottage
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-organic-fast group ${
                  isActiveRoute(item.path)
                    ? 'text-primary bg-primary-50' :'text-text-primary hover:text-primary hover:bg-surface'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} className="opacity-70" />
                  <span>{item.label}</span>
                </span>
                {isActiveRoute(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Book Now Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              iconName="Calendar"
              iconPosition="left"
              onClick={handleBookingClick}
              className="shadow-organic-subtle hover:shadow-organic-medium"
            >
              <Link to="/booking" className="text-primary-foreground">
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="primary"
              size="sm"
              iconName="Calendar"
              onClick={handleBookingClick}
              className="shadow-organic-subtle"
            >
              <Link to="/booking" className="text-primary-foreground">
                Book
              </Link>
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-text-primary hover:text-primary hover:bg-surface transition-organic-fast"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="transition-organic-fast"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-medium ease-organic overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-4' :'max-h-0 opacity-0 pb-0'
          }`}
        >
          <div className="pt-4 space-y-2 border-t border-border-muted">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-organic-fast ${
                  isActiveRoute(item.path)
                    ? 'text-primary bg-primary-50 border-l-4 border-primary' :'text-text-primary hover:text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item.icon} size={20} className="opacity-70" />
                <span>{item.label}</span>
                {isActiveRoute(item.path) && (
                  <Icon name="ChevronRight" size={16} className="ml-auto opacity-50" />
                )}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-border-muted">
              <Button
                variant="primary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={handleBookingClick}
                className="w-full shadow-organic-subtle"
              >
                <Link to="/booking" className="text-primary-foreground w-full">
                  Book Your Stay Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-text-primary/20 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;