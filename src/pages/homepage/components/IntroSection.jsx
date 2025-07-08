import React from 'react';
import Icon from '../../../components/AppIcon';

const IntroSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-organic-medium">
              <Icon name="TreePine" size={32} className="text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Welcome to Junglestay
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-6">
              Nestled in the heart of pristine wilderness, Junglestay Tent Cottage offers an unparalleled eco-tourism experience that connects you with nature's raw beauty. Our commitment to sustainable tourism ensures that every moment of your stay contributes to preserving the natural habitat while providing you with memories that last a lifetime.
            </p>
            
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              From luxury tents that blend comfort with adventure to cozy cottages that offer a home away from home, we provide authentic accommodations that respect the environment and celebrate the wilderness. Join us in our mission to promote responsible tourism while experiencing the thrill of living amidst nature's grandeur.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          <div className="text-center p-6 bg-surface rounded-xl shadow-organic-subtle hover:shadow-organic-medium transition-organic">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-success" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-text-secondary">Happy Guests</div>
          </div>
          
          <div className="text-center p-6 bg-surface rounded-xl shadow-organic-subtle hover:shadow-organic-medium transition-organic">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-accent" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-text-secondary">Years Experience</div>
          </div>
          
          <div className="text-center p-6 bg-surface rounded-xl shadow-organic-subtle hover:shadow-organic-medium transition-organic">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Home" size={24} className="text-primary" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-text-secondary">Accommodations</div>
          </div>
          
          <div className="text-center p-6 bg-surface rounded-xl shadow-organic-subtle hover:shadow-organic-medium transition-organic">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Leaf" size={24} className="text-secondary" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-text-secondary">Eco-Friendly</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;