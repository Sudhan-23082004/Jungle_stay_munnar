import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FounderStory from './components/FounderStory';
import MissionVision from './components/MissionVision';
import TeamSection from './components/TeamSection';
import EcoCommitment from './components/EcoCommitment';
import CallToAction from './components/CallToAction';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Jungle Stay Tent Cottage | Eco-Tourism Excellence</title>
        <meta name="description" content="Discover Junglestay's story, mission, and commitment to sustainable eco-tourism. Meet our expert team and learn about our award-winning environmental practices." />
        <meta name="keywords" content="eco-tourism, sustainable travel, nature accommodation, jungle stay, environmental conservation, responsible tourism" />
        <meta property="og:title" content="About Junglestay - Sustainable Eco-Tourism Leaders" />
        <meta property="og:description" content="Learn about our founder's journey, mission for sustainable tourism, and award-winning commitment to environmental conservation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 lg:pt-20">
          {/* Hero Section */}
          <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-background to-surface overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23548C1C%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                  About Jungle Stay
                </h1>
                <p className="text-xl lg:text-2xl text-text-secondary leading-relaxed mb-8">
                  Pioneering sustainable eco-tourism experiences that connect travelers with nature while preserving our planet for future generations
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="font-medium">Est. 2015</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-medium">5000+ Happy Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="font-medium">Award-Winning Service</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Founder Story Section */}
          <FounderStory />

          {/* Mission & Vision Section */}
          <MissionVision />

          {/* Eco Commitment Section */}
          <EcoCommitment />

          {/* Call to Action Section */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
                <img
                  src="/assets/images/Logo/ASRA.jpg"
                  alt="ASRA GROUPS"
                  className="w-16 h-16 lg:w-16 lg:h-16 object-contain"
                />
                <p className="text-primary-100 text-center sm:text-left text-sm lg:text-base">
                  Creating sustainable memories in nature's embrace since 2015
                </p>
              </div>
              <div className="flex justify-center space-x-6 text-primary-100">
                <a href="#" className="hover:text-primary-foreground transition-organic-fast">Privacy Policy</a>
                <a href="#" className="hover:text-primary-foreground transition-organic-fast">Terms of Service</a>
                <a href="/contact" className="hover:text-primary-foreground transition-organic-fast">Contact Us</a>
              </div>
              <div className="mt-8 pt-8 border-t border-primary-200 text-primary-100">
                <p>&copy; {new Date().getFullYear()} Junglestay Tent Cottage. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;