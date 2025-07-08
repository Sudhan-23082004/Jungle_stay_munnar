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

  // Mock accommodations data
  const accommodationsData = [
    {
      id: 1,
      type: 'Luxury Tent',
      name: 'Forest View Luxury Tent',
      location: 'Riverside Valley',
      capacity: '2-3 Guests',
      rating: 4.8,
      pricePerNight: 3500,
      description: `Experience the perfect blend of adventure and comfort in our spacious luxury tents. Each tent features comfortable bedding, private bathroom facilities, and a private deck overlooking the pristine forest landscape.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Luxury tent exterior with forest backdrop'
        },
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Comfortable tent interior with modern amenities'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Private deck with forest views'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Evening tent ambiance with natural lighting'
        }
      ],
      amenities: [
        { name: 'Private Bathroom', icon: 'Bath' },
        { name: 'Comfortable Bedding', icon: 'Bed' },
        { name: 'Private Deck', icon: 'Home' },
        { name: 'Forest Views', icon: 'Trees' },
        { name: 'Electricity', icon: 'Zap' },
        { name: 'Hot Water', icon: 'Droplets' }
      ],
      activities: ['Nature Walks', 'Bird Watching', 'Photography', 'Stargazing', 'Campfire'],
      availability: {
        status: 'available',
        message: 'Available for booking'
      },
      category: 'tents'
    },
    {
      id: 2,
      type: 'Adventure Tent',
      name: 'Riverside Adventure Tent',
      location: 'Mountain Stream',
      capacity: '2-4 Guests',
      rating: 4.6,
      pricePerNight: 2800,
      description: `Perfect for adventure enthusiasts, these tents are located near the mountain stream offering easy access to water activities. Basic yet comfortable amenities ensure a memorable outdoor experience.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Adventure tent by mountain stream'
        },
        {
          url: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Tent interior with adventure gear storage'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Stream view from tent entrance'
        }
      ],
      amenities: [
        { name: 'Shared Bathroom', icon: 'Bath' },
        { name: 'Sleeping Bags', icon: 'Bed' },
        { name: 'Stream Access', icon: 'Waves' },
        { name: 'Adventure Gear', icon: 'Backpack' },
        { name: 'Solar Lighting', icon: 'Sun' }
      ],
      activities: ['River Rafting', 'Fishing', 'Rock Climbing', 'Hiking', 'Adventure Sports'],
      availability: {
        status: 'available',
        message: 'Available for booking'
      },
      category: 'tents'
    },
    {
      id: 3,
      type: 'Family Tent',
      name: 'Family Safari Tent',
      location: 'Meadow Grounds',
      capacity: '4-6 Guests',
      rating: 4.7,
      pricePerNight: 4200,
      description: `Spacious family tents designed for comfort and convenience. Features separate sleeping areas, family bathroom, and a large common area perfect for family bonding time in nature.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Large family tent in meadow setting'
        },
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Spacious family tent interior'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Family dining area inside tent'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Children playing area near tent'
        }
      ],
      amenities: [
        { name: 'Family Bathroom', icon: 'Bath' },
        { name: 'Multiple Beds', icon: 'Bed' },
        { name: 'Common Area', icon: 'Home' },
        { name: 'Play Area', icon: 'Gamepad2' },
        { name: 'Kitchen Access', icon: 'ChefHat' },
        { name: 'Safety Features', icon: 'Shield' }
      ],
      activities: ['Family Games', 'Nature Education', 'Picnics', 'Easy Trails', 'Cultural Programs'],
      availability: {
        status: 'limited',
        message: 'Limited availability - Book soon'
      },
      category: 'tents'
    },
    {
      id: 4,
      type: 'Eco Cottage',
      name: 'Bamboo Eco Cottage',
      location: 'Bamboo Grove',
      capacity: '2-3 Guests',
      rating: 4.9,
      pricePerNight: 5500,
      description: `Sustainable bamboo cottages built with eco-friendly materials. Features modern amenities while maintaining harmony with nature. Perfect for eco-conscious travelers seeking comfort.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Beautiful bamboo cottage exterior'
        },
        {
          url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Cozy cottage interior with natural materials'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Private cottage veranda with garden view'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Cottage surrounded by bamboo grove'
        }
      ],
      amenities: [
        { name: 'Private Bathroom', icon: 'Bath' },
        { name: 'Eco Materials', icon: 'Leaf' },
        { name: 'Garden View', icon: 'Trees' },
        { name: 'Solar Power', icon: 'Sun' },
        { name: 'Kitchenette', icon: 'ChefHat' },
        { name: 'Wi-Fi', icon: 'Wifi' }
      ],
      activities: ['Eco Tours', 'Organic Farming', 'Meditation', 'Yoga', 'Sustainable Living'],
      availability: {
        status: 'available',
        message: 'Available for booking'
      },
      category: 'cottages'
    },
    {
      id: 5,
      type: 'Luxury Cottage',
      name: 'Forest Luxury Cottage',
      location: 'Deep Forest',
      capacity: '2-4 Guests',
      rating: 4.8,
      pricePerNight: 7200,
      description: `Premium cottages offering luxury amenities in a secluded forest setting. Features include private jacuzzi, fireplace, and panoramic forest views through floor-to-ceiling windows.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Luxury cottage with modern architecture'
        },
        {
          url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Elegant cottage interior with fireplace'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Private jacuzzi with forest views'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Cottage deck with panoramic forest views'
        }
      ],
      amenities: [
        { name: 'Private Jacuzzi', icon: 'Bath' },
        { name: 'Fireplace', icon: 'Flame' },
        { name: 'Luxury Bedding', icon: 'Bed' },
        { name: 'Full Kitchen', icon: 'ChefHat' },
        { name: 'Forest Views', icon: 'Trees' },
        { name: 'Premium Wi-Fi', icon: 'Wifi' }
      ],
      activities: ['Spa Services', 'Private Dining', 'Forest Walks', 'Photography', 'Relaxation'],
      availability: {
        status: 'available',
        message: 'Available for booking'
      },
      category: 'cottages'
    },
    {
      id: 6,
      type: 'Family Cottage',
      name: 'Hillside Family Cottage',
      location: 'Scenic Hillside',
      capacity: '4-8 Guests',
      rating: 4.6,
      pricePerNight: 6800,
      description: `Spacious family cottages with multiple bedrooms and common areas. Located on scenic hillside with breathtaking valley views. Perfect for family reunions and group stays.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Large family cottage on hillside'
        },
        {
          url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Spacious family living area'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Multiple bedrooms for family accommodation'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Valley views from cottage terrace'
        }
      ],
      amenities: [
        { name: 'Multiple Bedrooms', icon: 'Bed' },
        { name: 'Large Kitchen', icon: 'ChefHat' },
        { name: 'Valley Views', icon: 'Mountain' },
        { name: 'Family Bathrooms', icon: 'Bath' },
        { name: 'Game Room', icon: 'Gamepad2' },
        { name: 'BBQ Area', icon: 'Flame' }
      ],
      activities: ['Family Bonding', 'Valley Hiking', 'BBQ Nights', 'Board Games', 'Sightseeing'],
      availability: {
        status: 'limited',
        message: 'Limited availability - Book soon'
      },
      category: 'cottages'
    },
    {
      id: 7,
      type: 'Group Package',
      name: 'Adventure Group Package',
      location: 'Adventure Base Camp',
      capacity: '10-15 Guests',
      rating: 4.7,
      pricePerNight: 12500,
      description: `Complete adventure package for groups including accommodation, meals, and guided activities. Perfect for corporate retreats, team building, and adventure groups seeking comprehensive experiences.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Group accommodation setup at base camp'
        },
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Group dining and activity area'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Adventure activities setup'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Group campfire and bonding area'
        }
      ],
      amenities: [
        { name: 'Group Accommodation', icon: 'Users' },
        { name: 'All Meals Included', icon: 'ChefHat' },
        { name: 'Activity Equipment', icon: 'Backpack' },
        { name: 'Professional Guides', icon: 'UserCheck' },
        { name: 'Transport', icon: 'Car' },
        { name: 'First Aid', icon: 'Heart' }
      ],
      activities: ['Team Building', 'Adventure Sports', 'Group Challenges', 'Cultural Programs', 'Bonfire Nights'],
      availability: {
        status: 'available',
        message: 'Available for booking'
      },
      category: 'groups'
    },
    {
      id: 8,
      type: 'Group Package',
      name: 'Corporate Retreat Package',
      location: 'Conference Valley',
      capacity: '15-25 Guests',
      rating: 4.8,
      pricePerNight: 18500,
      description: `Professional corporate retreat package with conference facilities, team building activities, and comfortable accommodation. Includes meeting rooms, AV equipment, and catering services.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Corporate retreat accommodation complex'
        },
        {
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Conference room with natural lighting'
        },
        {
          url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Team building activity areas'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Professional dining and networking space'
        }
      ],
      amenities: [
        { name: 'Conference Rooms', icon: 'Presentation' },
        { name: 'AV Equipment', icon: 'Monitor' },
        { name: 'Catering Service', icon: 'ChefHat' },
        { name: 'Wi-Fi', icon: 'Wifi' },
        { name: 'Team Activities', icon: 'Users' },
        { name: 'Professional Support', icon: 'UserCheck' }
      ],
      activities: ['Corporate Training', 'Team Building', 'Networking', 'Strategic Planning', 'Wellness Programs'],
      availability: {
        status: 'available',
        message: 'Available for booking'
      },
      category: 'groups'
    }
  ];

  // Calculate accommodation counts
  const accommodationCounts = {
    all: accommodationsData.length,
    tents: accommodationsData.filter(acc => acc.category === 'tents').length,
    cottages: accommodationsData.filter(acc => acc.category === 'cottages').length,
    groups: accommodationsData.filter(acc => acc.category === 'groups').length
  };

  // Filter accommodations based on active filter
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      let filtered = accommodationsData;
      
      if (activeFilter !== 'all') {
        filtered = accommodationsData.filter(acc => acc.category === activeFilter);
      }
      
      setFilteredAccommodations(filtered);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    // Smooth scroll to accommodations section
    const accommodationsSection = document.getElementById('accommodations-section');
    if (accommodationsSection) {
      accommodationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Accommodations - Junglestay Tent Cottage | Eco-Tourism Stays</title>
        <meta name="description" content="Discover our range of eco-friendly accommodations including luxury tents, bamboo cottages, and group packages. Book your perfect nature retreat at Junglestay." />
        <meta name="keywords" content="tent accommodation, eco cottage, group packages, nature stay, eco tourism, jungle resort, camping, glamping" />
        <meta property="og:title" content="Accommodations - Junglestay Tent Cottage" />
        <meta property="og:description" content="Choose from luxury tents, eco cottages, and group packages for your perfect nature retreat experience." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/accommodations" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <main className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="Home" size={20} className="text-primary" />
                <span className="text-primary font-medium">Our Accommodations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
                Find Your Perfect Stay
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                From adventurous tents to luxury cottages, we offer diverse accommodation 
                options to suit every traveler's needs and budget. All our stays are designed 
                to provide comfort while keeping you connected to nature.
              </p>
            </div>

            {/* Filter Chips */}
            <FilterChips
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              accommodationCounts={accommodationCounts}
            />

            {/* Accommodations Grid */}
            <div id="accommodations-section">
              <AccommodationGrid
                accommodations={filteredAccommodations}
                isLoading={isLoading}
              />
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                  <Icon name="Calendar" size={48} className="text-primary mx-auto mb-6" />
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
                    Ready to Book Your Stay?
                  </h3>
                  <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                    Don't wait - our accommodations fill up quickly, especially during peak seasons. 
                    Secure your perfect nature retreat today and create memories that will last a lifetime.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/booking">
                      <Button
                        variant="primary"
                        size="lg"
                        iconName="Calendar"
                        iconPosition="left"
                        className="shadow-organic-medium hover:shadow-organic-pronounced"
                      >
                        Book Now
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        size="lg"
                        iconName="Phone"
                        iconPosition="left"
                      >
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