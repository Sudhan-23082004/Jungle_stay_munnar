import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const locationDetails = {
    address: "Jungle Stay Tent & Cottage, Gundumalai Road, Suryanelli, Munnar, Kerala 685618",
    nearbyAttractions: [
      { name: "Dandeli Wildlife Sanctuary", distance: "2 km", icon: "TreePine" },
      { name: "Kali River", distance: "1.5 km", icon: "Waves" },
      { name: "Syntheri Rocks", distance: "8 km", icon: "Mountain" },
      { name: "Kavala Caves", distance: "12 km", icon: "MapPin" }
    ],
    transportation: [
      { mode: "By Air", details: "Cochin International Airport (COK) - 121 km", icon: "Plane" },
      { mode: "By Train", details: "Theni Railway station - 56 km", icon: "Train" },
      { mode: "By Road", details: "Well connected via NH-63", icon: "Car" }
    ]
  };

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  const handleDirectionsClick = () => {
    // Use fixed coordinates for direction
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=10.054205260197765,77.1893576590844`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Find Us in Nature's Heart
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Located in the pristine wilderness of Dandeli, surrounded by lush forests and flowing rivers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-background rounded-2xl shadow-organic-medium overflow-hidden">
              <div className="relative h-80 lg:h-96">
                {!isMapLoaded && (
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="MapPin" size={32} className="text-primary" />
                      </div>
                      <p className="text-text-secondary">Loading interactive map...</p>
                    </div>
                  </div>
                )}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.39128059075364!2d77.1893576590844!3d10.054205260197765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079f00579508c1%3A0x358c035bc03f1f4a!2sJungle%20Stay%20Tent%20%26%20Cottage!5e1!3m2!1sen!2sin!4v1751953277288!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Junglestay Tent Cottage Location"
                  onLoad={handleMapLoad}
                  className="rounded-2xl"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {locationDetails.address}
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  iconName="Navigation"
                  iconPosition="left"
                  onClick={handleDirectionsClick}
                  className="w-full shadow-organic-subtle hover:shadow-organic-medium"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Attractions */}
            <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-organic-subtle">
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary mb-6 flex items-center">
                <Icon name="MapPin" size={24} className="mr-3" />
                Nearby Attractions
              </h3>
              <div className="space-y-4">
                {locationDetails.nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-surface transition-organic">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={attraction.icon} size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-text-primary">{attraction.name}</h4>
                      <p className="text-sm text-text-secondary">{attraction.distance} away</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-background rounded-2xl p-6 lg:p-8 shadow-organic-subtle">
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary mb-6 flex items-center">
                <Icon name="Route" size={24} className="mr-3" />
                How to Reach
              </h3>
              <div className="space-y-4">
                {locationDetails.transportation.map((transport, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-surface transition-organic">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={transport.icon} size={18} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-text-primary">{transport.mode}</h4>
                      <p className="text-sm text-text-secondary">{transport.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/10">
              <h3 className="text-xl lg:text-2xl font-heading font-bold text-primary mb-6">
                Need Help Planning Your Visit?
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span className="text-text-primary">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span className="text-text-primary">info@junglestay.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span className="text-text-primary">24/7 Support Available</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="md"
                iconName="MessageCircle"
                iconPosition="left"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Our Travel Experts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
