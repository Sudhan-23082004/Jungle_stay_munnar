import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CallToAction = () => {
  const ctaData = {
    title: "Ready to Experience Sustainable Adventure?",
    subtitle: "Join us in creating memories while preserving nature for future generations",
    backgroundImage: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1600",
    actions: [
      {
        label: "Book Your Stay",
        variant: "primary",
        icon: "Calendar",
        link: "/booking"
      },
      {
        label: "View Accommodations",
        variant: "secondary",
        icon: "Home",
        link: "/accommodations"
      }
    ],
    features: [
      { icon: "Shield", text: "100% Safe & Secure" },
      { icon: "Leaf", text: "Eco-Friendly Practices" },
      { icon: "Users", text: "Expert Local Guides" },
      { icon: "Award", text: "Award-Winning Service" }
    ]
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={ctaData.backgroundImage}
          alt="Junglestay nature experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            {ctaData.title}
          </h2>
          <p className="text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            {ctaData.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ctaData.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon} size={24} className="text-primary-foreground" />
              </div>
              <p className="text-primary-100 font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {ctaData.actions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Button
                variant={action.variant}
                size="lg"
                iconName={action.icon}
                iconPosition="left"
                className="w-full sm:w-auto shadow-organic-pronounced hover:shadow-organic-medium transition-organic"
              >
                {action.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-primary-100">
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-warning" />
              <span className="font-medium">4.9/5 Guest Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span className="font-medium">5000+ Happy Guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} />
              <span className="font-medium">Eco-Tourism Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CallToAction;