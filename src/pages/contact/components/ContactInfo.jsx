import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      icon: 'Phone',
      title: 'Phone',
      value: '+91 90801 00081',
      link: 'tel:+919080100081',
      description: 'Call us for instant booking'
    },
    {
      id: 2,
      icon: 'Mail',
      title: 'Email',
      value: 'mashwin789@gmail.com',
      link: 'mailto:mashwin789@gmail.com',
      description: 'Send us your queries'
    },
    {
      id: 3,
      icon: 'MapPin',
      title: 'Address',
      value: 'Jungle Stay Tent & Cottage, Gundumalai Road, Suryanelli, Munnar, Kerala 685618',
      link: null,
      description: 'Visit our eco-friendly resort'
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/junglestay',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      id: 2,
      name: 'WhatsApp',
      icon: 'MessageCircle',
      url: 'https://wa.me/919080100081',
      color: 'text-green-600 hover:text-green-700'
    },
    {
      id: 3,
      name: 'YouTube',
      icon: 'Youtube',
      url: 'https://youtube.com/@junglestay',
      color: 'text-red-600 hover:text-red-700'
    }
  ];

  return (
    <div className="bg-background rounded-xl shadow-organic-medium p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-3">
          Get in Touch
        </h2>
        <p className="text-text-secondary font-body leading-relaxed">
          We're here to help you plan your perfect nature getaway. Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {contactDetails.map((contact) => (
          <div key={contact.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-organic-fast">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
              <Icon name={contact.icon} size={20} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                {contact.title}
              </h3>
              {contact.link ? (
                <a
                  href={contact.link}
                  className="text-primary hover:text-primary-700 font-medium transition-organic-fast break-all"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-text-primary font-medium break-words">
                  {contact.value}
                </p>
              )}
              <p className="text-sm text-text-secondary mt-1">
                {contact.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg bg-surface hover:bg-surface-hover flex items-center justify-center transition-organic-fast ${social.color}`}
              aria-label={`Follow us on ${social.name}`}
            >
              <Icon name={social.icon} size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-primary-50 rounded-lg">
        <div className="flex items-center space-x-3 mb-2">
          <Icon name="Clock" size={18} className="text-primary" />
          <h4 className="font-heading font-semibold text-primary">Contact Hours</h4>
        </div>
        <p className="text-sm text-text-secondary">
          Monday - Sunday: 09:30 AM - 6:30 PM\n
          Emergency Contact: Available 24/7
        </p>
        <p className="text-xs text-text-muted mt-2">
          We typically respond within 2-4 hours during business hours
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;