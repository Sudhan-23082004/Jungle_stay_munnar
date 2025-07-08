import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const AccommodationCard = ({ accommodation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === accommodation.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? accommodation.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-surface rounded-xl shadow-organic-medium overflow-hidden hover:shadow-organic-pronounced transition-organic">
      {/* Image Carousel */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-organic h-full"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {accommodation.images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <Image
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {accommodation.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-background transition-organic-fast shadow-organic-subtle"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-text-primary hover:bg-background transition-organic-fast shadow-organic-subtle"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {accommodation.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {accommodation.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2 h-2 rounded-full transition-organic-fast ${
                  index === currentImageIndex 
                    ? 'bg-primary' :'bg-background/60 hover:bg-background/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-organic-subtle">
            {accommodation.type}
          </span>
        </div>

        {/* Capacity Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-text-primary text-sm font-medium rounded-full shadow-organic-subtle flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>{accommodation.capacity}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
              {accommodation.name}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={14} />
                <span>{accommodation.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} className="text-warning-500" />
                <span>{accommodation.rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-heading font-bold text-primary">
              ₹{accommodation.pricePerNight.toLocaleString('en-IN')}
            </div>
            <div className="text-sm text-text-secondary">per day</div>
          </div>
        </div>

        <p className="text-text-secondary mb-4 leading-relaxed">
          {accommodation.description}
        </p>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {accommodation.amenities.map((amenity, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-50 text-primary text-xs rounded-md flex items-center space-x-1"
              >
                <Icon name={amenity.icon} size={12} />
                <span>{amenity.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-2">Activities</h4>
          <div className="flex flex-wrap gap-2">
            {accommodation.activities.map((activity, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-accent-50 text-accent text-xs rounded-md"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <div className={`flex items-center space-x-2 text-sm ${
            accommodation.availability.status === 'available' ?'text-success' 
              : accommodation.availability.status === 'limited' ?'text-warning' :'text-error'
          }`}>
            <Icon 
              name={
                accommodation.availability.status === 'available' ?'CheckCircle' 
                  : accommodation.availability.status === 'limited' ?'AlertCircle' :'XCircle'
              } 
              size={16} 
            />
            <span className="font-medium">{accommodation.availability.message}</span>
          </div>
        </div>

        {/* Book Now Button */}
        <Link to="/booking" className="block">
          <Button
            variant="primary"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="w-full shadow-organic-subtle hover:shadow-organic-medium"
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AccommodationCard;