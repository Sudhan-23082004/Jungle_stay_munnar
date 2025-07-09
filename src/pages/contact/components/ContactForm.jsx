import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
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
            Thank you for contacting us. We'll get back to you within 2–4 hours during business hours.
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit(); // Allow form to actually submit to Formspree
    setSubmitted(true);
  };

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

      <form
        action="https://formspree.io/f/mjkrqjye"
        method="POST"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <input type="hidden" name="_next" value={`${window.location.origin}/contact-success`} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <Input type="text" name="name" id="name" placeholder="Enter your full name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <Input type="email" name="email" id="email" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
              Phone Number
            </label>
            <Input type="tel" name="phone" id="phone" placeholder="+91 90801 00081" />
          </div>
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-text-primary mb-2">
              Inquiry Type *
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-organic-fast bg-background text-text-primary"
            >
              <option value="">Select inquiry type</option>
              <option value="booking">Booking Questions</option>
              <option value="activities">Activity Information</option>
              <option value="facilities">Facilities & Amenities</option>
              <option value="pricing">Pricing & Packages</option>
              <option value="general">General Inquiries</option>
              <option value="feedback">Feedback & Suggestions</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
            Subject *
          </label>
          <Input type="text" name="subject" id="subject" placeholder="Brief subject of your inquiry" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Please provide details about your inquiry..."
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-organic-fast bg-background text-text-primary resize-y"
          ></textarea>
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
                required
                defaultChecked
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="ml-2 text-sm text-text-primary">Email</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="phone"
                required
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="ml-2 text-sm text-text-primary">Phone</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="whatsapp"
                required
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
            iconName="Send"
            iconPosition="right"
            className="w-full md:w-auto shadow-organic-medium hover:shadow-organic-pronounced"
          >
            Send Message
          </Button>
        </div>

        <div className="mt-4 p-4 bg-accent-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={18} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-accent font-medium mb-1">Quick Response Guarantee</p>
              <p className="text-xs text-text-secondary">
                We respond to all inquiries within 2–4 hours during business hours (8 AM – 8 PM). For urgent booking requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
