import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      review: `Our stay at Junglestay was absolutely magical! The eco-friendly tents were comfortable and the jungle sounds at night created the perfect ambiance. The staff's knowledge about local wildlife made our experience educational and thrilling. We spotted three different species of birds right from our tent!`,
      experience: "Family Adventure",
      stayDuration: "3 nights"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, India",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      review: `The adventure activities were incredible! River rafting, jungle trekking, and the campfire storytelling sessions made this trip unforgettable. The sustainable practices here are commendable - solar power, rainwater harvesting, everything is thoughtfully planned. Highly recommend for nature lovers!`,
      experience: "Solo Adventure",
      stayDuration: "2 nights"
    },
    {
      id: 3,
      name: "Anita & Vikram Patel",
      location: "Ahmedabad, Gujarat",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      review: `Perfect honeymoon destination! The cottage was beautifully decorated and offered complete privacy while being surrounded by nature. The sunrise view from our balcony was breathtaking. The organic meals prepared with local ingredients were delicious. We'll definitely return for our anniversary!`,
      experience: "Romantic Getaway",
      stayDuration: "4 nights"
    },
    {
      id: 4,
      name: "Dr. Meera Reddy",
      location: "Bangalore, Karnataka",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      review: `As a wildlife photographer, I was impressed by the biodiversity around Junglestay. The guides were knowledgeable about animal behavior and helped me capture some amazing shots. The accommodation didn't disturb the natural habitat - true eco-tourism at its best!`,
      experience: "Photography Tour",
      stayDuration: "5 nights"
    },
    {
      id: 5,
      name: "Arjun Singh",
      location: "Jaipur, Rajasthan",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      review: `Brought my corporate team here for a retreat and it exceeded all expectations. The team building activities in nature, combined with comfortable accommodations, created the perfect balance of work and relaxation. The conference facilities with jungle views were unique and inspiring!`,
      experience: "Corporate Retreat",
      stayDuration: "3 nights"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-border"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            What Our Guests Say
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real experiences from nature enthusiasts who chose Junglestay for their eco-tourism adventure
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-organic"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-organic-medium mx-4">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Avatar and Info */}
                      <div className="flex-shrink-0 text-center lg:text-left">
                        <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto lg:mx-0 mb-4">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover shadow-organic-subtle"
                          />
                        </div>
                        <h4 className="text-lg lg:text-xl font-heading font-bold text-primary mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-text-secondary mb-2">
                          {testimonial.location}
                        </p>
                        <div className="flex justify-center lg:justify-start mb-2">
                          {renderStars(testimonial.rating)}
                        </div>
                        <div className="flex flex-col gap-1 text-xs text-text-muted">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {testimonial.experience}
                          </span>
                          <span>{testimonial.stayDuration}</span>
                        </div>
                      </div>

                      {/* Review Content */}
                      <div className="flex-1">
                        <div className="relative">
                          <Icon 
                            name="Quote" 
                            size={32} 
                            className="text-primary/20 absolute -top-2 -left-2" 
                          />
                          <blockquote className="text-base lg:text-lg text-text-primary leading-relaxed italic pl-8">
                            "{testimonial.review}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-background shadow-organic-medium rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-organic z-10"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-background shadow-organic-medium rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-organic z-10"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-organic ${
                  index === currentSlide
                    ? 'bg-primary' :'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 text-sm text-text-secondary hover:text-primary transition-organic"
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
              <span>{isAutoPlaying ? "Pause" : "Play"} Auto-scroll</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <div className="text-sm text-text-secondary">Verified Reviews</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Award" size={24} className="text-warning" />
              </div>
              <div className="text-sm text-text-secondary">5-Star Rated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Heart" size={24} className="text-accent" />
              </div>
              <div className="text-sm text-text-secondary">500+ Happy Guests</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Icon name="Leaf" size={24} className="text-primary" />
              </div>
              <div className="text-sm text-text-secondary">Eco-Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;