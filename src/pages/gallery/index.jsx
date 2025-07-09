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
  const [visibleCount, setVisibleCount] = useState(20);

const galleryImages = [
    {
    "id": 0,
    "src": "assets/images/Others/0.jpg",
    "title": "Tent at Hillside Camp",
    "category": "Tents",
    "type": "image",
    "views": 1250,
    "location": "Hilltop Zone",
    "description": "Comfortable tent surrounded by lush greenery and nature"
  },
  {
    "id": 2,
    "src": "assets/images/Others/2.jpg",
    "title": "Multiple Tents with Outdoor Seating",
    "category": "Tents",
    "type": "image",
    "views": 1160,
    "location": "Camp Area",
    "description": "Well-organized tent setup with a dedicated sitting space"
  },
  {
    "id": 5,
    "src": "assets/images/Others/5.jpg",
    "title": "Foggy Tent Camp Morning",
    "category": "Tents",
    "type": "image",
    "views": 980,
    "location": "Mist Valley",
    "description": "Peaceful foggy morning at the tent campsite"
  },
  {
    "id": 6,
    "src": "assets/images/Others/6.jpg",
    "title": "Outdoor Night View with Lights",
    "category": "Night Views",
    "type": "image",
    "views": 1070,
    "location": "Seating Area",
    "description": "Glowing night setup with ambient lighting and chairs"
  },
  {
    "id": 7,
    "src": "assets/images/Others/7.jpg",
    "title": "Inside View of Tent Bed Setup",
    "category": "Tents",
    "type": "image",
    "views": 1320,
    "location": "Interior Zone",
    "description": "Warm and cozy tent interior with bedding and pillows"
  },
  {
    id: 1,
    src: "assets/images/Others/1.jpg",
    title: "",
    category: "Tents",
    type: "image",
    views: 1000,
    location: "",
    description: ""
  },
    {
    id: 3,
    src: "assets/images/Others/3.jpg",
    title: "",
    category: "Tents",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 4,
    src: "assets/images/Others/4.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 8,
    src: "assets/images/Others/8.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 9,
    src: "assets/images/Others/9.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 10,
    src: "assets/images/Others/10.jpg",
    title: "",
    category: "Tents",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 11,
    src: "assets/images/Others/11.jpg",
    title: "",
    category: "Tents",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 12,
    src: "assets/images/Others/12.jpg",
    title: "",
    category: "Night Views",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 13,
    src: "assets/images/Others/13.jpg",
    title: "",
    category: "Night Views",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 14,
    src: "assets/images/Others/14.jpg",
    title: "",
    category: "Night Views",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 15,
    src: "assets/images/Others/15.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 16,
    src: "assets/images/Others/16.jpg",
    title: "",
    category: "Tents",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 17,
    src: "assets/images/Others/17.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 18,
    src: "assets/images/Others/18.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 19,
    src: "assets/images/Others/19.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 20,
    src: "assets/images/Others/20.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 21,
    src: "assets/images/Others/21.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 22,
    src: "assets/images/Others/22.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 23,
    src: "assets/images/Others/23.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 24,
    src: "assets/images/Others/24.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 25,
    src: "assets/images/Others/25.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 26,
    src: "assets/images/Others/26.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 27,
    src: "assets/images/Others/27.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 28,
    src: "assets/images/Others/28.JPG",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 29,
    src: "assets/images/Others/29.JPG",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 30,
    src: "assets/images/Others/30.JPG",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 31,
    src: "assets/images/Others/31.jpg",
    title: "",
    category: "Night Views",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
      {
    id: 32,
    src: "assets/images/Others/32.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
      {
    id: 33,
    src: "assets/images/Others/33.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
        {
    id: 34,
    src: "assets/images/Others/34.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
        {
    id: 35,
    src: "assets/images/Others/35.jpg",
    title: "",
    category: "Tents",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
        {
    id: 36,
    src: "assets/images/Others/33.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },      {
    id: 37,
    src: "assets/images/Others/37.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },      {
    id: 38,
    src: "assets/images/Others/38.jpg",
    title: "",
    category: "Activities",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },      {
    id: 39,
    src: "assets/images/Others/39.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },      {
    id: 40,
    src: "assets/images/Others/40.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 41,
    src: "assets/images/Others/41.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
  {
    id: 42,
    src: "assets/images/Others/42.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 43,
    src: "assets/images/Others/43.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 44,
    src: "assets/images/Others/44.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
    {
    id: 45,
    src: "assets/images/Others/45.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
      {
    id: 46,
    src: "assets/images/Others/46.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
      {
    id: 47,
    src: "assets/images/Others/47.jpg",
    title: "",
    category: "Cottages",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
      {
    id: 48,
    src: "assets/images/Others/48.jpg",
    title: "",
    category: "Food",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
        {
    id: 49,
    src: "assets/images/Others/49.jpg",
    title: "",
    category: "Food",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  },
        {
    id: 50,
    src: "assets/images/Others/50.jpg",
    title: "",
    category: "Food",
    type: "image",
    views: 1250,
    location: "",
    description: ""
  }
  ];

  const categories = useMemo(() => {
    const categoryData = [
      { id: 'all', name: 'All Photos', icon: 'Grid3X3', count: 0 },
      { id: 'Tents', name: 'Tents', icon: 'Home', count: 0 },
      { id: 'Cottages', name: 'Cottages', icon: 'Building', count: 0 },
      { id: 'Activities', name: 'Activities', icon: 'Activity', count: 0 },
      { id: 'Food', name: 'Food', icon: 'ChefHat', count: 0 },
      { id: 'Night Views', name: 'Night Views', icon: 'Moon', count: 0 },
    ];

    categoryData[0].count = galleryImages.length;
    categoryData.forEach(cat => {
      if (cat.id !== 'all') {
        cat.count = galleryImages.filter(img => img.category === cat.id).length;
      }
    });

    return categoryData;
  }, [galleryImages]);

  const filteredImages = useMemo(() => {
    let filtered = galleryImages;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(image => image.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(image =>
        (image.title?.toLowerCase().includes(searchTerm.toLowerCase()) || '') ||
        (image.category?.toLowerCase().includes(searchTerm.toLowerCase()) || '') ||
        (image.description?.toLowerCase().includes(searchTerm.toLowerCase()) || '')
      );
    }

    return activeCategory === 'all' ? filtered.slice(0, visibleCount) : filtered;
  }, [galleryImages, activeCategory, searchTerm, visibleCount]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = index => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNavigate = index => setCurrentImageIndex(index);

  const handleCategoryChange = categoryId => {
    setActiveCategory(categoryId);
    setSearchTerm('');
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Gallery | Jungle Stay Munnar – Nature, Tents & Eco Cottages</title>
        <meta name="title" content="Gallery | Jungle Stay Munnar – Nature, Tents & Eco Cottages" />
        <meta name="description" content="Browse our photo gallery to explore Jungle Stay Munnar's eco-friendly tents, cottages, scenic night views, delicious food, and exciting jungle activities." />
        <meta name="keywords" content="Jungle Stay Munnar gallery, Munnar eco stay photos, jungle tent images, cottage stay Munnar, Kolukkumalai view, nature stay Kerala, Munnar night view, adventure camp images" />
        <meta name="author" content="Jungle Stay Munnar" />
        <link rel="canonical" href="https://jungle-stay-munnar.pages.dev/gallery" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jungle-stay-munnar.pages.dev/gallery" />
        <meta property="og:title" content="Gallery | Jungle Stay Munnar – Nature, Tents & Eco Cottages" />
        <meta property="og:description" content="See stunning visuals of our tents, cottages, campfires, adventure activities, and serene landscapes from Jungle Stay Munnar." />
        <meta property="og:image" content="https://jungle-stay-munnar.pages.dev/gallery" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jungle-stay-munnar.pages.dev/gallery" />
        <meta property="twitter:title" content="Gallery | Jungle Stay Munnar – Nature, Tents & Eco Cottages" />
        <meta property="twitter:description" content="Explore Jungle Stay's beauty through our curated photo and video gallery featuring eco-tents, cottages, and night views." />
        <meta property="twitter:image" content="https://jungle-stay-munnar.pages.dev/gallery" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-20 lg:pt-24 pb-8 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Discover the beauty of Junglestay through our curated collection of stunning photography and videos showcasing our accommodations, activities, and natural surroundings.
            </p>
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

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

            <div className="flex-1">
              {isMobile && (
                <>
                  <FilterChips
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                  <div className="relative mt-6">
                    <input
                      type="search"
                      placeholder="Search images..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <Icon name="Search" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
                  </div>
                </>
              )}

              <div className="flex items-center justify-between mt-6 mb-6">
                <div>
                  <h2 className="text-xl font-heading font-semibold text-text-primary">
                    {categories.find(cat => cat.id === activeCategory)?.name || 'Gallery'}
                  </h2>
                  <p className="text-sm text-text-secondary">
                    {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} found
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
              </div>

              <ImageGrid images={filteredImages} onImageClick={handleImageClick} loading={loading} />

              {activeCategory === 'all' && filteredImages.length < galleryImages.length && !loading && (
                <div className="text-center mt-12">
                  <button
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-700 transition-organic-fast"
                    onClick={() => setVisibleCount(galleryImages.length)}
                  >
                    Load More Images
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

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



