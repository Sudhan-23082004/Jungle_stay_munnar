import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury tent accommodation in natural forest setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-text-primary/40 via-text-primary/20 to-text-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="MapPin" size={20} className="text-accent" />
              <span className="text-accent font-medium">Eco-Tourism Destination</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-inverse mb-6 leading-tight">
              Choose Your Perfect
              <span className="block text-accent">Nature Retreat</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-inverse/90 mb-8 leading-relaxed max-w-2xl">
              From cozy tents under the stars to comfortable cottages in the woods, 
              discover accommodations that bring you closer to nature while ensuring 
              your comfort and memorable experiences.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div className="flex items-center space-x-2 text-text-inverse">
                <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name="Mountain" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold">15+</div>
                  <div className="text-sm opacity-90">Tent Options</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-text-inverse">
                <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name="Building" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold">8+</div>
                  <div className="text-sm opacity-90">Cottages</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-text-inverse">
                <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold">5+</div>
                  <div className="text-sm opacity-90">Group Packages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-inverse/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-inverse/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;