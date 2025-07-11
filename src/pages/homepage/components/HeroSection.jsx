import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://live-liamtra-blog.s3.ap-south-1.amazonaws.com/2021/08/Munnar-Explore-The-Best-Monsoon-Destinations-In-India-1024x585.png"
          alt="Scenic jungle landscape with tent accommodation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight">
          Escape to Nature's
          <span className="block text-accent">Paradise</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience authentic eco-tourism with our premium tent and cottage accommodations nestled in the lush hills of Munnar, Kerala.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Link to="/booking" className="w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="w-full sm:w-auto h-[52px] shadow-organic-pronounced hover:shadow-organic-medium transform hover:scale-105 transition-all duration-300"
            >
              Book Your Adventure
            </Button>
          </Link>

          <a href="https://www.youtube.com/@junglestay-l1l" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              iconName="Play"
              iconPosition="left"
              className="w-full sm:w-auto h-[52px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Watch Our Story
            </Button>
          </a>

        </div>
      </div>

      {/* Scroll Indicator at bottom of section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
        </div>
    </section>
  );
};

export default HeroSection;
