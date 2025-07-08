import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FilterChips from './components/FilterChips';
import AccommodationGrid from './components/AccommodationGrid';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const AccommodationsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredAccommodations, setFilteredAccommodations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Accommodations data with local images
  const accommodationsData = [
    {
      id: 1,
      type: 'Tent Stay',
      name: 'Tent Stay',
      location: 'Kolukumalai Base Camp',
      capacity: '6+ Guests',
      rating: 4.6,
      pricePerNight: 1700,
      description: `Enjoy the adventure of tent living with complimentary dinner and breakfast. Ideal for groups above 6 members. Includes Kolukumalai Jeep Safari.`,
      images: [{ url: 'assets/images/Tent Stay.JPG', alt: 'Group tent stay in forest' }],
      amenities: [
        { name: 'Group Tents', icon: 'Users' },
        { name: 'Complimentary Dinner & Breakfast', icon: 'ChefHat' },
        { name: 'Jeep Safari Included', icon: 'Car' },
        { name: 'Shared Bathroom', icon: 'Bath' }
      ],
      activities: ['Jeep Safari', 'Campfire', 'Stargazing'],
      availability: {
        status: 'available',
        message: 'Available for group bookings'
      },
      category: 'tents'
    },
    {
      id: 2,
      type: 'Honeymoon Cottage',
      name: 'Bamboo Honeymoon Cottage',
      location: 'Jungle Edge',
      capacity: '2 Guests',
      rating: 4.9,
      pricePerNight: 4000,
      description: `Romantic bamboo cottage stay with eco-friendly design, tailored for couples. Includes complimentary dinner and breakfast.`,
      images: [{ url: 'assets/images/Bamboo Honeymoon Cottage.JPG', alt: 'Cozy bamboo honeymoon cottage' }],
      amenities: [
        { name: 'Private Cottage', icon: 'Home' },
        { name: 'Romantic Setup', icon: 'Heart' },
        { name: 'Eco-friendly Bamboo', icon: 'Leaf' },
        { name: 'Complimentary Meals', icon: 'ChefHat' }
      ],
      activities: ['Private Dining', 'Nature Walks', 'Romantic Campfire'],
      availability: {
        status: 'available',
        message: 'Ideal for honeymooners'
      },
      category: 'cottages'
    },
    {
      id: 11,
      type: 'Family Cottage',
      name: 'Spacious Family Cottage',
      location: 'Hilltop Retreat',
      capacity: '12 Guests',
      rating: 4.7,
      pricePerNight: 8000,
      description: `Perfect for large families or groups, this cottage accommodates up to 12 guests. Dinner and Breakfast available at ₹350 per head.`,
      images: [{ url: 'assets/images/Spacious Family Cottage.jpg', alt: 'Large family cottage' }],
      amenities: [
        { name: 'Large Capacity', icon: 'Users' },
        { name: 'Common Area', icon: 'Home' },
        { name: 'Meals on Request', icon: 'ChefHat' },
        { name: 'Tea Plantation View', icon: 'Mountain' }
      ],
      activities: ['Group Games', 'BBQ Nights', 'Nature Exploration'],
      availability: {
        status: 'available',
        message: 'Best for family reunions'
      },
      category: 'cottages'
    },
    {
      id: 12,
      type: 'Luxury Tent',
      name: 'Premium Forest Luxury Tent',
      location: 'Jungle Camp',
      capacity: '2-3 Guests',
      rating: 4.8,
      pricePerNight: 2500,
      description: `Luxury tent accommodation with scenic forest views. Includes complimentary dinner and breakfast.`,
      images: [{ url: 'assets/images/Premium Forest Luxury Tent.jpg', alt: 'Luxury forest tent setup' }],
      amenities: [
        { name: 'Luxury Tent', icon: 'Bed' },
        { name: 'Forest Views', icon: 'Trees' },
        { name: 'Private Bathroom', icon: 'Bath' },
        { name: 'Complimentary Meals', icon: 'ChefHat' }
      ],
      activities: ['Bird Watching', 'Photography', 'Campfire'],
      availability: {
        status: 'available',
        message: 'Available for booking'
      },
      category: 'tents'
    },
    {
      id: 13,
      type: 'A-Frame Cottage',
      name: 'Scenic A-Frame Cottage',
      location: 'Mountain Slope',
      capacity: '2-4 Guests',
      rating: 4.7,
      pricePerNight: 3000,
      description: `Modern A-frame cottage nestled on a scenic slope. Comes with complimentary dinner and breakfast.`,
      images: [{ url: 'assets/images/A-Frame Cottage.jpg', alt: 'A-Frame cottage in greenery' }],
      amenities: [
        { name: 'A-Frame Architecture', icon: 'Home' },
        { name: 'Scenic Views', icon: 'Mountain' },
        { name: 'Modern Interiors', icon: 'Monitor' },
        { name: 'Complimentary Meals', icon: 'ChefHat' }
      ],
      activities: ['Sunset Views', 'Mountain Walks', 'Campfire'],
      availability: {
        status: 'available',
        message: 'Perfect for couples or small families'
      },
      category: 'cottages'
    },
    {
      id: 14,
      type: 'Activity',
      name: 'Kolukumalai Jeep Safari',
      location: 'Kolukumalai',
      capacity: '6 Guests per Jeep',
      rating: 4.9,
      pricePerNight: 3000,
      description: `Thrilling jeep safari through rugged terrains of Kolukumalai. Max 6 persons per trip.`,
      images: [{ url: 'assets/images/Kolukumalai Jeep Safari.webp', alt: 'Jeep climbing Kolukumalai trail' }],
      amenities: [
        { name: 'Jeep Ride', icon: 'Car' },
        { name: 'Local Guide', icon: 'UserCheck' },
        { name: 'Off-road Adventure', icon: 'Waves' },
        { name: 'Photo Spots', icon: 'Camera' }
      ],
      activities: ['Mountain Drive', 'Sightseeing', 'Photography'],
      availability: {
        status: 'available',
        message: 'Book your slot in advance'
      },
      category: 'activity'
    },
    {
      id: 15,
      type: 'Travel Package',
      name: 'Theni to Jungle Stay Travel Package',
      location: 'Pickup from Theni',
      capacity: '4 Guests',
      rating: 4.5,
      pricePerNight: 2500,
      description: `Travel package for 4 people including car transport from Theni to Jungle Stay (Tent & Cottage).`,
      images: [{ url: 'assets/images/20250416_142552~2.jpg', alt: 'Private car transport' }],
      amenities: [
        { name: 'Private Car', icon: 'Car' },
        { name: 'Group Pickup', icon: 'Users' },
        { name: 'Comfortable Travel', icon: 'Map' }
      ],
      activities: ['Travel Assistance', 'Local Exploration'],
      availability: {
        status: 'available',
        message: 'Available on request'
      },
      category: 'package'
    }
  ];

  // Count accommodations by category
  const accommodationCounts = {
    all: accommodationsData.length,
    tents: accommodationsData.filter(acc => acc.category === 'tents').length,
    cottages: accommodationsData.filter(acc => acc.category === 'cottages').length,
    activity: accommodationsData.filter(acc => acc.category === 'activity').length,
    package: accommodationsData.filter(acc => acc.category === 'package').length
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = activeFilter === 'all'
        ? accommodationsData
        : accommodationsData.filter(acc => acc.category === activeFilter);
      setFilteredAccommodations(filtered);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    const section = document.getElementById('accommodations-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Accommodations - Junglestay Tent Cottage | Eco-Tourism Stays</title>
        <meta name="description" content="Discover eco-friendly accommodations including tents, cottages, and packages." />
        <meta name="keywords" content="tent accommodation, eco cottage, jungle stay, adventure package, jeep safari" />
        <meta property="og:title" content="Accommodations - Junglestay Tent Cottage" />
        <meta property="og:description" content="Choose from tents, cottages, and group packages for your perfect retreat." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/accommodations" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <main className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="Home" size={20} className="text-primary" />
                <span className="text-primary font-medium">Our Accommodations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
                Find Your Perfect Stay
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                From adventurous tents to luxury cottages, we offer diverse accommodation options to suit every traveler's needs and budget.
              </p>
            </div>

            <FilterChips
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              accommodationCounts={accommodationCounts}
            />

            <div id="accommodations-section">
              <AccommodationGrid accommodations={filteredAccommodations} isLoading={isLoading} />
            </div>

            <div className="mt-16 text-center">
              <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                  <Icon name="Calendar" size={48} className="text-primary mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
                    Ready to Book Your Stay?
                  </h3>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Don’t wait – accommodations fill up quickly. Secure your perfect nature retreat now.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/booking">
                      <Button variant="primary" size="lg" iconName="Calendar" iconPosition="left">
                        Book Now
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" size="lg" iconName="Phone" iconPosition="left">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AccommodationsPage;
