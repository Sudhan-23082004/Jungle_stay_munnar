import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const locationDetails = {
    name: "Junglestay Tent Cottage",
    address: "Jungle Resort Road, Bandipur National Park, Karnataka 571126",
    coordinates: {
      lat: 11.7401,
      lng: 76.6950
    },
    landmarks: [
      "15 km from Bandipur National Park Entry Gate",
      "25 km from Ooty Hill Station",
      "8 km from Bandipur Safari Point",
      "12 km from Himavad Gopalaswamy Betta"
    ]
  };

  const directions = [
    {
      id: 1,
      mode: 'Car',
      icon: 'Car',
      description: 'From Bangalore: 220 km via NH275 (4 hours drive)',
      time: '4 hours'
    },
    {
      id: 2,
      mode: 'Bus',
      icon: 'Bus',
      description: 'Regular buses from Mysore to Bandipur (1.5 hours)',
      time: '1.5 hours'
    },
    {
      id: 3,
      mode: 'Train',
      icon: 'Train',
      description: 'Nearest railway station: Mysore Junction (65 km)',
      time: '1 hour + taxi'
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
          width="100%"
          height="100%"
          loading="lazy"
          title="Junglestay Tent Cottage Location"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${locationDetails.coordinates.lat},${locationDetails.coordinates.lng}&z=14&output=embed`}
          className="border-0"
        />
        <div className="absolute top-4 right-4">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${locationDetails.coordinates.lat},${locationDetails.coordinates.lng}`}
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