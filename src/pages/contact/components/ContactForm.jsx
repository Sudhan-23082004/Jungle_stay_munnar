import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    contactPreference: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: '', label: 'Select inquiry type' },
    { value: 'booking', label: 'Booking Questions' },
    { value: 'activities', label: 'Activity Information' },
    { value: 'facilities', label: 'Facilities & Amenities' },
    { value: 'pricing', label: 'Pricing & Packages' },
    { value: 'general', label: 'General Inquiries' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          subject: '',
          message: '',
          contactPreference: 'email'
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-background rounded-xl shadow-organic-medium p-6 lg:p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-success mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-text-secondary font-body">
            Thank you for contacting us. We'll get back to you within 2-4 hours during business hours.
          </p>
          <div className="mt-6 p-4 bg-success-50 rounded-lg">
            <p className="text-sm text-success font-medium">
              Reference ID: JS-{Date.now().toString().slice(-6)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background rounded-xl shadow-organic-medium p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
          Send us a Message
        </h2>
        <p className="text-text-secondary font-body">
          Fill out the form below and we'll respond to your inquiry as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-text-primary mb-2">
              Inquiry Type *
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-organic-fast bg-background text-text-primary"
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
            Subject *
          </label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Brief subject of your inquiry"
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Please provide details about your inquiry..."
            required
            rows={5}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-organic-fast bg-background text-text-primary resize-vertical"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Preferred Contact Method
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={formData.contactPreference === 'email'}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="ml-2 text-sm text-text-primary">Email</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="phone"
                checked={formData.contactPreference === 'phone'}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="ml-2 text-sm text-text-primary">Phone</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="whatsapp"
                checked={formData.contactPreference === 'whatsapp'}
                onChange={handleInputChange}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="ml-2 text-sm text-text-primary">WhatsApp</span>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="w-full md:w-auto shadow-organic-medium hover:shadow-organic-pronounced"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>

        <div className="mt-4 p-4 bg-accent-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={18} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-accent font-medium mb-1">
                Quick Response Guarantee
              </p>
              <p className="text-xs text-text-secondary">
                We respond to all inquiries within 2-4 hours during business hours (8 AM - 8 PM). For urgent booking requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;