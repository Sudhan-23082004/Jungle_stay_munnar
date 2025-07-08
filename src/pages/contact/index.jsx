import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import EmergencyContact from './components/EmergencyContact';
import Icon from '../../components/AppIcon';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - Junglestay Tent Cottage | Get in Touch</title>
        <meta 
          name="description" 
          content="Contact Junglestay Tent Cottage for bookings, inquiries, and support. Located in Bandipur National Park. Phone: +91 98765 43210 | Email: info@junglestay.com" 
        />
        <meta name="keywords" content="contact junglestay, bandipur resort contact, tent cottage booking, eco resort inquiries" />
        <meta property="og:title" content="Contact Us - Junglestay Tent Cottage" />
        <meta property="og:description" content="Get in touch with Junglestay for your eco-tourism adventure in Bandipur National Park" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background-secondary">
        <Header />
        
        {/* Hero Section */}
        <section className="relative pt-20 lg:pt-24 pb-12 lg:pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} className="text-primary-foreground" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                  Contact Us
                </h1>
              </div>
              <p className="text-lg lg:text-xl text-text-secondary font-body max-w-3xl mx-auto leading-relaxed">
                We're here to help you plan your perfect eco-tourism adventure. Get in touch with us for bookings, inquiries, or any assistance you need.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Contact Information & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
              <div className="order-2 lg:order-1">
                <ContactInfo />
              </div>
              <div className="order-1 lg:order-2">
                <ContactForm />
              </div>
            </div>

            {/* Location Map */}
            <div className="mb-12 lg:mb-16">
              <LocationMap />
            </div>

            {/* Emergency Contacts */}
            <div className="mb-12">
              <EmergencyContact />
            </div>

            {/* Quick Actions */}
            <div className="bg-primary-50 rounded-xl p-6 lg:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
                  Need Immediate Assistance?
                </h2>
                <p className="text-text-secondary font-body">
                  Choose the fastest way to reach us based on your needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="tel:+919080100081"
                  className="flex items-center justify-center space-x-3 p-4 bg-background rounded-lg hover:bg-surface transition-organic-fast shadow-organic-subtle hover:shadow-organic-medium"
                >
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span className="font-medium text-text-primary">Call Now</span>
                </a>
                
                <a
                  href="https://wa.me/919080100081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 p-4 bg-background rounded-lg hover:bg-surface transition-organic-fast shadow-organic-subtle hover:shadow-organic-medium"
                >
                  <Icon name="MessageCircle" size={20} className="text-green-600" />
                  <span className="font-medium text-text-primary">WhatsApp</span>
                </a>
                
                <a
                  href="mailto:mashwin789@gmail.com"
                  className="flex items-center justify-center space-x-3 p-4 bg-background rounded-lg hover:bg-surface transition-organic-fast shadow-organic-subtle hover:shadow-organic-medium"
                >
                  <Icon name="Mail" size={20} className="text-accent" />
                  <span className="font-medium text-text-primary">Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={16} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold">
                  Jungle Stay Tent & Cottage
                </h3>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Your gateway to authentic eco-tourism experiences in the heart of Munnar’s lush hills
              </p>
              <p className="text-primary-foreground/60 text-xs">
                © {new Date().getFullYear()} Jungle Stay Tent & Cottage. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;