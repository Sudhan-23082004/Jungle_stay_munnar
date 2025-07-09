import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import FeatureHighlights from './components/FeatureHighlights';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import LocationMap from './components/LocationMap';
import FloatingBookingButton from './components/FloatingBookingButton';
import { Helmet } from 'react-helmet';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Jungle Stay Munnar | Eco-Tourism Tents & Cottages in Munnar, Kerala</title>
        <meta name="title" content="Jungle Stay Munnar | Eco-Tourism Tents & Cottages in Munnar, Kerala" />
        <meta name="description" content="Escape to nature’s paradise at Jungle Stay Munnar. Enjoy eco-tourism with luxury tents and cottages, jungle adventures, and sustainable stays in Kerala's scenic hills." />
        <meta name="keywords" content="munnar, kerala, munnar kerala, best tourist area munnar, best tour munnar, best service munnar, best travel advisor munnar, junglestay, jungle stay munnar, eco-tourism Munnar, tents in Munnar, cottages in Kerala, jungle resort, nature stay, adventure camping Munnar, eco cottages, Munnar resort, tent stay Kerala" />
        <meta name="author" content="Jungle Stay Munnar" />
        <link rel="canonical" href="https://jungle-stay-munnar.pages.dev/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jungle-stay-munnar.pages.dev/" />
        <meta property="og:title" content="Jungle Stay Munnar | Eco-Tourism Tents & Cottages" />
        <meta property="og:description" content="Explore the beauty of Munnar with eco-friendly accommodations, jungle treks, and breathtaking sunrise points at Jungle Stay Munnar." />
        <meta property="og:image" content="https://jungle-stay-munnar.pages.dev/" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jungle-stay-munnar.pages.dev/" />
        <meta property="twitter:title" content="Jungle Stay Munnar | Eco-Tourism Tents & Cottages" />
        <meta property="twitter:description" content="Book your eco-tourism adventure in Munnar – Jungle Stay offers serene cottages and tents surrounded by Kerala’s lush hills." />
        <meta property="twitter:image" content="https://jungle-stay-munnar.pages.dev/" />
      </Helmet>
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