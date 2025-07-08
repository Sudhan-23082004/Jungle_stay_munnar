import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FloatingBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px from top
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Floating Button */}
        <Link to="/booking">
          <Button
            variant="primary"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className={`shadow-organic-pronounced hover:shadow-organic-medium transform hover:scale-105 transition-all duration-300 ${
              isExpanded ? 'rounded-l-full rounded-r-lg' : 'rounded-full'
            }`}
          >
            <span className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'} overflow-hidden whitespace-nowrap`}>
              Book Now
            </span>
          </Button>
        </Link>

        {/* Expanded Options */}
        <div
          className={`absolute bottom-0 right-full mr-2 transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {/* Quick Call Button */}
            <a
              href="tel:+919876543210"
              className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white shadow-organic-medium hover:shadow-organic-pronounced hover:scale-110 transition-all duration-200"
              title="Call Now"
            >
              <Icon name="Phone" size={20} />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210?text=Hi! I'm interested in booking a stay at Junglestay Tent Cottage."
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-organic-medium hover:shadow-organic-pronounced hover:scale-110 transition-all duration-200"
              title="WhatsApp"
            >
              <Icon name="MessageCircle" size={20} />
            </a>

            {/* Email Button */}
            <a
              href="mailto:info@junglestay.com?subject=Booking Inquiry&body=Hi! I'm interested in booking a stay at Junglestay Tent Cottage."
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-organic-medium hover:shadow-organic-pronounced hover:scale-110 transition-all duration-200"
              title="Email"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-2 transition-all duration-300 ${
            !isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-text-primary text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
            Book Your Stay
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-text-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBookingButton;