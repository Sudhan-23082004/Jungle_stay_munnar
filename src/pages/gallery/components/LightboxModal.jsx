import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LightboxModal = ({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  onNavigate 
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const currentImage = images[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'z': case'Z':
          setIsZoomed(!isZoomed);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isZoomed, currentIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsZoomed(false);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
      setIsZoomed(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
      setIsZoomed(false);
    }
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrevious();
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentImage.title,
        text: `Check out this amazing view from Junglestay: ${currentImage.title}`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-text-primary/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-text-primary/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <Icon name="X" size={20} />
            </Button>
            <div className="text-white">
              <h3 className="font-heading font-semibold">{currentImage.title}</h3>
              <p className="text-sm opacity-80">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsZoomed(!isZoomed)}
              className="text-white hover:bg-white/20"
            >
              <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="text-white hover:bg-white/20"
            >
              <Icon name="Share2" size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="flex items-center justify-center h-full p-4 pt-20 pb-16"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <Button
            variant="ghost"
            size="lg"
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
        )}
        
        {currentIndex < images.length - 1 && (
          <Button
            variant="ghost"
            size="lg"
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
        )}

        {/* Image */}
        <div className={`relative max-w-full max-h-full transition-organic ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
          {currentImage.type === 'video' ? (
            <div className="relative">
              <video
                controls
                autoPlay
                className={`max-w-full max-h-full object-contain ${isZoomed ? 'scale-150' : 'scale-100'} transition-organic`}
              >
                <source src={currentImage.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <Image
              src={currentImage.src}
              alt={currentImage.title}
              className={`max-w-full max-h-full object-contain ${isZoomed ? 'scale-150' : 'scale-100'} transition-organic`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-text-primary/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-2">
              {currentImage.category}
            </span>
            {currentImage.description && (
              <p className="text-sm opacity-80 max-w-md">
                {currentImage.description}
              </p>
            )}
          </div>
          
          <div className="flex items-center space-x-4 text-white text-sm">
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={16} />
              <span>{currentImage.views}</span>
            </div>
            {currentImage.location && (
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={16} />
                <span>{currentImage.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-20 left-0 right-0 px-4">
        <div className="flex justify-center space-x-2 overflow-x-auto scrollbar-hide">
          {images.slice(Math.max(0, currentIndex - 5), currentIndex + 6).map((image, index) => {
            const actualIndex = Math.max(0, currentIndex - 5) + index;
            return (
              <button
                key={image.id}
                onClick={() => onNavigate(actualIndex)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-organic ${
                  actualIndex === currentIndex 
                    ? 'border-primary' :'border-transparent hover:border-white/50'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;