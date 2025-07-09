import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FilterChips from './components/FilterChips';
import FilterSidebar from './components/FilterSidebar';
import ImageGrid from './components/ImageGrid';
import LightboxModal from './components/LightboxModal';
import Icon from '../../components/AppIcon';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Mock gallery data

const galleryImages = [
  {
    id: 1,
    src: "https://drive.google.com/file/d/1rw-B0LdN5Tj19d1CKrA1VH2BB4F6rPVv/view?usp=sharing.jpg",
    title: "Luxury Safari Tent",
    category: "",
    type: "image",
    views: 1250,
    location: "Riverside Camp",
    description: "Spacious safari tent with modern amenities and stunning river views"
  },
  {
    id: 2,
    src: "assets/images/17.jpg",
    title: "Cozy Forest Cottage",
    category: "Tents",
    type: "image",
    views: 980,
    location: "Forest Edge",
    description: "Traditional cottage nestled in the heart of the forest"
  },
  {
    id: 3,
    src: "assets/images/18.jpg",
    title: "Campfire Stories",
    category: "Activities",
    type: "image",
    views: 750,
    location: "Main Camp",
    description: "Evening campfire sessions with local storytelling"
  },
  {
    id: 4,
    src: "assets/images/19.jpg",
    title: "Farm Fresh Breakfast",
    category: "Food",
    type: "image",
    views: 650,
    location: "Dining Area",
    description: "Organic breakfast prepared with locally sourced ingredients"
  },
  {
    id: 5,
    src: "assets/images/20.jpg",
    title: "Starlit Night Sky",
    category: "Night Views",
    type: "image",
    views: 1100,
    location: "Open Field",
    description: "Breathtaking night sky perfect for stargazing"
  },
  {
    id: 6,
    src: "assets/images/7.JPG",
    title: "Glamping Experience",
    category: "",
    type: "image",
    views: 890,
    location: "Premium Section",
    description: "Luxury glamping tent with all modern conveniences"
  },
  {
    id: 7,
    src: "assets/images/8.JPG",
    title: "Mountain Cottage",
    category: "Cottages",
    type: "image",
    views: 720,
    location: "Hilltop",
    description: "Scenic cottage with panoramic mountain views"
  },
  {
    id: 8,
    src: "assets/images/13.jpg",
    title: "Nature Walk",
    category: "Activities",
    type: "image",
    views: 580,
    location: "Forest Trail",
    description: "Guided nature walks through pristine forest paths"
  },
  {
    id: 9,
    src: "assets/images/14.jpg",
    title: "Traditional Cuisine",
    category: "Food",
    type: "image",
    views: 420,
    location: "Kitchen",
    description: "Authentic local dishes prepared by expert chefs"
  },
  {
    id: 10,
    src: "assets/images/15.jpg",
    title: "Moonlit Landscape",
    category: "Night Views",
    type: "image",
    views: 950,
    location: "Valley View",
    description: "Serene moonlit landscape perfect for night photography"
  },
  {
    id: 11,
    src: "assets/images/16.jpg",
    title: "Family Tent Setup",
    category: "",
    type: "image",
    views: 680,
    location: "Family Zone",
    description: "Spacious family tents designed for comfort and safety"
  },
  {
    id: 12,
    src: "assets/images/21.jpg",
    title: "Riverside Cottage",
    category: "Cottages",
    type: "image",
    views: 830,
    location: "Riverbank",
    description: "Charming cottage with direct access to the river"
  },
  {
    id: 13,
    src: "assets/images/22.jpg",
    title: "Adventure Activities",
    category: "Activities",
    type: "image",
    views: 1200,
    location: "Adventure Zone",
    description: "Exciting outdoor activities for thrill seekers"
  },
  {
    id: 14,
    src: "assets/images/23.jpg",
    title: "Gourmet Dinner",
    category: "Food",
    type: "image",
    views: 540,
    location: "Restaurant",
    description: "Fine dining experience under the stars"
  },
  {
    id: 16,
    src: "assets/images/24.jpg",
    title: "Campfire Night",
    category: "Night Views",
    type: "image",
    views: 780,
    location: "Fire Pit",
    description: "Cozy campfire nights with friends and family"
  },
  ,
  {
    id: 17,
    src: "assets/images/25.jpg",
    title: "Campfire Night",
    category: "Night Views",
    type: "image",
    views: 780,
    location: "Fire Pit",
    description: "Cozy campfire nights with friends and family"
  },
  ,
  {
    id: 18,
    src: "assets/images/26.jpg",
    title: "Campfire Night",
    category: "Night Views",
    type: "image",
    views: 780,
    location: "Fire Pit",
    description: "Cozy campfire nights with friends and family"
  },
  ,
  {
    id: 19,
    src: "assets/images/27.jpg",
    title: "Campfire Night",
    category: "Night Views",
    type: "image",
    views: 780,
    location: "Fire Pit",
    description: "Cozy campfire nights with friends and family"
  }
  ];

  // Categories with icons and counts
  const categories = useMemo(() => {
    const categoryData = [
      { id: 'all', name: 'All Photos', icon: 'Grid3X3', count: 0 }
    ];

    // Calculate counts
    categoryData[0].count = galleryImages.length; // All
    categoryData.forEach(cat => {
      if (cat.id !== 'all') {
        cat.count = galleryImages.filter(img => img.category === cat.id).length;
      }
    });

    return categoryData;
  }, [galleryImages]);

  // Filtered images based on category and search
  const filteredImages = useMemo(() => {
    let filtered = galleryImages;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(image => image.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(image =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchTerm, galleryImages]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNavigate = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchTerm('');
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Junglestay Tent Cottage | Nature Photography & Videos</title>
        <meta name="description" content="Explore our stunning gallery of tent accommodations, forest cottages, adventure activities, local cuisine, and breathtaking night views at Junglestay." />
        <meta name="keywords" content="junglestay gallery, tent photos, cottage images, nature photography, eco-tourism, adventure activities, forest accommodation" />
        <meta property="og:title" content="Gallery - Junglestay Tent Cottage" />
        <meta property="og:description" content="Discover the beauty of Junglestay through our curated gallery of accommodations, activities, and natural landscapes." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/gallery" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 pb-8 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                Gallery
              </h1>
              <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                Discover the beauty of Junglestay through our curated collection of stunning photography and videos showcasing our accommodations, activities, and natural surroundings.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Desktop Sidebar */}
              {!isMobile && (
                <div className="lg:w-80 flex-shrink-0">
                  <FilterSidebar
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    totalImages={galleryImages.length}
                    className="sticky top-28"
                  />
                </div>
              )}

              {/* Main Gallery */}
              <div className="flex-1">
                {/* Mobile Filter Chips */}
                {isMobile && (
                  <div className="mb-6">
                    <FilterChips
                      categories={categories}
                      activeCategory={activeCategory}
                      onCategoryChange={handleCategoryChange}
                    />
                  </div>
                )}

                {/* Mobile Search */}
                {isMobile && (
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="search"
                        placeholder="Search images..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <Icon 
                        name="Search" 
                        size={18} 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted"
                      />
                    </div>
                  </div>
                )}

                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-heading font-semibold text-text-primary">
                      {activeCategory === 'all' ? 'All Photos' : categories.find(cat => cat.id === activeCategory)?.name}
                    </h2>
                    <p className="text-sm text-text-secondary">
                      {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} found
                      {searchTerm && ` for "${searchTerm}"`}
                    </p>
                  </div>
                  
                  {/* View Toggle (Future Enhancement) */}
                  <div className="hidden md:flex items-center space-x-2">
                    <button className="p-2 rounded-lg bg-primary text-primary-foreground">
                      <Icon name="Grid3X3" size={18} />
                    </button>
                    <button className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-organic-fast">
                      <Icon name="List" size={18} />
                    </button>
                  </div>
                </div>

                {/* Image Grid */}
                <ImageGrid
                  images={filteredImages}
                  onImageClick={handleImageClick}
                  loading={loading}
                />

                {/* Load More Button (Future Enhancement) */}
                {filteredImages.length > 0 && !loading && (
                  <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-700 transition-organic-fast">
                      Load More Images
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={filteredImages}
          currentIndex={currentImageIndex}
          onNavigate={handleLightboxNavigate}
        />
      </div>
    </>
  );
};

export default Gallery;