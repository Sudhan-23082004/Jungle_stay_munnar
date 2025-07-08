import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const locationDetails = {
    name: "Jungle Stay Tent & Cottage",
    address: "Jungle Stay Tent & Cottage, Gundumalai Road, Suryanelli, Munnar, Kerala 685618",
    coordinates: {
      lat: 10.0543493,
      lng: 77.1871467
    },
    landmarks: [
      "7 km from Eravikulam National Park",
      "5 km from Tea Museum (KDHP)",
      "12 km from Mattupetty Dam",
      "14 km from Top Station View Point"
    ]
  };

  const directions = [
    {
      id: 1,
      mode: 'Air',
      icon: 'Plane',
      description: 'Cochin International Airport (COK) – 121 km from Jungle Stay',
      time: '3.5 hours'
    },
    {
      id: 2,
      mode: 'Train',
      icon: 'Train',
      description: 'Bodinayakanur Railway Station – 43 km from Jungle Stay',
      time: '1.5 hours'
    },
    {
      id: 3,
      mode: 'Car',
      icon: 'Car',
      description: 'Accessible via NH-49 (Cochin – Dhanushkodi Road)',
      time: 'Scenic drive'
    }
  ];

  return (
    <div className="bg-background rounded-xl shadow-organic-medium overflow-hidden">
      <div className="p-6 lg:p-8">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
            Our Location
          </h2>
          <p className="text-text-secondary font-body">
            Nestled in the heart of Bandipur National Park, surrounded by pristine wilderness.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-start space-x-3 p-4 bg-primary-50 rounded-lg">
            <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-semibold text-primary mb-1">
                {locationDetails.name}
              </h3>
              <p className="text-sm text-text-secondary">
                {locationDetails.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-heading font-semibold text-text-primary mb-3">
            Nearby Landmarks
          </h4>
          <div className="space-y-2">
            {locationDetails.landmarks.map((landmark, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <p className="text-sm text-text-secondary">{landmark}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-heading font-semibold text-text-primary mb-4">
            How to Reach
          </h4>
          <div className="space-y-4">
            {directions.map((direction) => (
              <div key={direction.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-surface transition-organic-fast">
                <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={direction.icon} size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-medium text-text-primary">{direction.mode}</h5>
                    <span className="text-xs text-text-muted bg-surface px-2 py-1 rounded">
                      {direction.time}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{direction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-64 lg:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d444.39128059075364!2d77.1893576590844!3d10.054205260197765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b079f00579508c1%3A0x358c035bc03f1f4a!2sJungle%20Stay%20Tent%20%26%20Cottage!5e1!3m2!1sen!2sin!4v1751953277288!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          title="Junglestay Tent Cottage Location"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        />
        <div className="absolute top-4 right-4">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Jungle+Stay+Tent+%26+Cottage,+Gundumalai+Road,+Suryanelli,+Munnar,+Kerala+685618"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-organic-medium hover:shadow-organic-pronounced transition-organic-fast flex items-center space-x-2 text-sm font-medium text-primary"
          >
            <Icon name="Navigation" size={16} />
            <span>Get Directions</span>
          </a>

        </div>
      </div>

      <div className="p-4 bg-success-50 border-t border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Shield" size={18} className="text-success" />
          <div>
            <p className="text-sm font-medium text-success">Safe & Secure Location</p>
            <p className="text-xs text-text-secondary">
              Located within protected forest area with 24/7 security and wildlife safety measures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;