import React from 'react';
import AccommodationCard from './AccommodationCard';

const AccommodationGrid = ({ accommodations, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-surface rounded-xl shadow-organic-medium overflow-hidden animate-pulse">
            <div className="h-64 md:h-80 bg-border-muted" />
            <div className="p-6 space-y-4">
              <div className="h-6 bg-border-muted rounded w-3/4" />
              <div className="h-4 bg-border-muted rounded w-1/2" />
              <div className="space-y-2">
                <div className="h-3 bg-border-muted rounded" />
                <div className="h-3 bg-border-muted rounded w-5/6" />
              </div>
              <div className="h-10 bg-border-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (accommodations.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
          No accommodations found
        </h3>
        <p className="text-text-secondary max-w-md mx-auto">
          We couldn't find any accommodations matching your current filter. 
          Try selecting a different category or view all accommodations.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {accommodations.map((accommodation) => (
        <AccommodationCard
          key={accommodation.id}
          accommodation={accommodation}
        />
      ))}
                      {/* ---- Native Ad Here ---- */}
                      <NativeAd adId="cae31ddbe7936182a806a180970b79ea" />
    </div>
    
  );
};

export default AccommodationGrid;