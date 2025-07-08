import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FeatureHighlights from './components/FeatureHighlights';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import LocationMap from './components/LocationMap';
import FloatingBookingButton from './components/FloatingBookingButton';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <IntroSection />
        <FeatureHighlights />
        <TestimonialsCarousel />
        <LocationMap />
      </main>

      <FloatingBookingButton />
    </div>
  );
};

export default Homepage;