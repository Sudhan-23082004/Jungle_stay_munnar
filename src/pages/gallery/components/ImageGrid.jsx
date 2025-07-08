import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImageGrid = ({ images, onImageClick, loading = false }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const handleShare = (e, image) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: `Check out this amazing view from Junglestay: ${image.title}`,
        url: window.location.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-surface animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Icon name="ImageOff" size={48} className="text-text-muted mb-4" />
        <h3 className="text-lg font-heading font-semibold text-text-primary mb-2">
          No Images Found
        </h3>
        <p className="text-text-secondary max-w-md">
          Try adjusting your search terms or selecting a different category to find more images.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="group relative cursor-pointer overflow-hidden rounded-lg shadow-organic-subtle hover:shadow-organic-medium transition-organic"
          onClick={() => onImageClick(index)}
        >
          {/* Image Container */}
          <div className="aspect-square relative">
            <Image
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-organic group-hover:scale-105"
              loading="lazy"
              onLoad={() => handleImageLoad(image.id)}
            />
            
            {/* Loading Overlay */}
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 bg-surface animate-pulse" />
            )}

            {/* Video Indicator */}
            {image.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-text-primary/20">
                <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-primary-foreground ml-1" />
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-organic">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <h4 className="text-white font-medium text-sm line-clamp-2">
                      {image.title}
                    </h4>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => handleShare(e, image)}
                    className="text-white hover:bg-white/20"
                  >
                    <Icon name="Share2" size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* View Count */}
            <div className="absolute top-3 right-3 bg-text-primary/70 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
              <Icon name="Eye" size={12} />
              <span>{image.views}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;