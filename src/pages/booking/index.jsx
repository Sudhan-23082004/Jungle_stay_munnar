import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PaymentInstructions from './components/PaymentInstructions';
import BookingForm from './components/BookingForm';
import SuccessMessage from './components/SuccessMessage';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const BookingPage = () => {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleBookingSuccess = (data) => {
    setBookingData(data);
    setBookingSubmitted(true);
    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewBooking = () => {
    setBookingSubmitted(false);
    setBookingData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading booking form...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Book Your Stay - Junglestay Tent Cottage | Nature Accommodation Booking</title>
        <meta 
          name="description" 
          content="Book your eco-friendly tent or cottage stay at Junglestay. Secure online booking with flexible payment options. Experience nature tourism at its finest." 
        />
        <meta name="keywords" content="book tent cottage, nature accommodation booking, eco-tourism reservation, jungle stay booking, outdoor accommodation" />
        <meta property="og:title" content="Book Your Stay - Junglestay Tent Cottage" />
        <meta property="og:description" content="Reserve your perfect nature getaway with our secure booking system. Choose from luxury tents, eco cottages, and group packages." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/booking" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 bg-gradient-to-br from-primary-50 via-background to-accent-50">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="Forest background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Calendar" size={24} className="text-primary-foreground" />
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                  Book Your Nature Getaway
                </h1>
              </div>
              
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                Reserve your perfect eco-friendly accommodation and immerse yourself in the beauty of nature. 
                Secure booking with flexible payment options.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-organic-subtle">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name="Shield" size={20} className="text-success" />
                    <span className="font-semibold text-text-primary">Secure Booking</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Safe & encrypted payment process
                  </p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-organic-subtle">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name="Clock" size={20} className="text-warning" />
                    <span className="font-semibold text-text-primary">Quick Response</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Payment instructions within 2 hours
                  </p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 shadow-organic-subtle">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Icon name="Headphones" size={20} className="text-accent" />
                    <span className="font-semibold text-text-primary">24/7 Support</span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Always here to help you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!bookingSubmitted ? (
              <>
                <PaymentInstructions />
                <BookingForm onSubmitSuccess={handleBookingSuccess} />
              </>
            ) : (
              <SuccessMessage 
                bookingData={bookingData} 
                onNewBooking={handleNewBooking}
              />
            )}
          </div>
        </section>

        {/* Additional Information */}
        {!bookingSubmitted && (
          <section className="py-12 bg-surface">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Booking Policy */}
                <div className="bg-background rounded-lg p-6 shadow-organic-subtle">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    <span>Booking Policy</span>
                  </h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Free cancellation up to 48 hours before check-in</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>50% advance payment required to confirm booking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Check-in: 2:00 PM | Check-out: 11:00 AM</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span>Valid ID proof required at check-in</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Support */}
                <div className="bg-background rounded-lg p-6 shadow-organic-subtle">
                  <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
                    <Icon name="Headphones" size={20} className="text-accent" />
                    <span>Need Help?</span>
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Our team is here to assist you with your booking. Contact us for any questions or special requests.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-secondary" />
                      <span className="text-sm text-text-primary">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-secondary" />
                      <span className="text-sm text-text-primary">info@junglestay.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="MessageCircle" size={16} className="text-secondary" />
                      <span className="text-sm text-text-primary">WhatsApp: +91 98765 43210</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={16} className="text-primary-foreground" />
                </div>
                <span className="text-lg font-heading font-semibold">Junglestay Tent Cottage</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Your trusted partner for eco-friendly nature accommodations
              </p>
              <p className="text-primary-foreground/60 text-xs">
                © {new Date().getFullYear()} Junglestay Tent Cottage. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BookingPage;