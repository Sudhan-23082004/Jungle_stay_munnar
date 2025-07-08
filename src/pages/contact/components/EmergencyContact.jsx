import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyContact = () => {
  const emergencyContacts = [
    {
      id: 1,
      title: 'Resort Emergency',
      number: '+91 90801 00081',
      description: 'Available 24/7 for guest emergencies',
      icon: 'Phone',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Medical Emergency',
      number: '108',
      description: 'Government ambulance service',
      icon: 'Heart',
      priority: 'critical'
    },
    {
      id: 3,
      title: 'Forest Department',
      number: '+91 85476 03199',
      description: 'Wildlife emergencies & forest safety',
      icon: 'Trees',
      priority: 'medium'
    },
    {
      id: 4,
      title: 'Local Police',
      number: '100',
      description: 'Bandipur Police Station',
      icon: 'Shield',
      priority: 'medium'
    }
  ];

  const safetyTips = [
    "Keep emergency numbers saved in your phone",
    "Inform resort staff about your outdoor activities",
    "Follow wildlife safety guidelines at all times",
    "Stay within designated areas after sunset",
    "Carry a whistle and flashlight during nature walks"
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'bg-error-50 border-error-200 text-error';
      case 'high':
        return 'bg-warning-50 border-warning-200 text-warning';
      case 'medium':
        return 'bg-primary-50 border-primary-200 text-primary';
      default:
        return 'bg-surface border-border text-text-primary';
    }
  };

  return (
    <div className="bg-background rounded-xl shadow-organic-medium p-6 lg:p-8">
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-error-50 rounded-lg flex items-center justify-center">
            <Icon name="AlertTriangle" size={20} className="text-error" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-error">
            Emergency Contacts
          </h2>
        </div>
        <p className="text-text-secondary font-body">
          Important contact numbers for your safety and peace of mind during your stay.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {emergencyContacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-4 rounded-lg border-2 transition-organic-fast ${getPriorityColor(contact.priority)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name={contact.icon} size={20} />
                <div>
                  <h3 className="font-heading font-semibold text-lg">
                    {contact.title}
                  </h3>
                  <p className="text-sm opacity-80">
                    {contact.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <a
                  href={`tel:${contact.number}`}
                  className="text-xl font-data font-bold hover:underline"
                >
                  {contact.number}
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open(`tel:${contact.number}`, '_self')}
                  className="text-xs"
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Shield" size={20} className="text-success" />
          <h3 className="text-lg font-heading font-semibold text-success">
            Safety Guidelines
          </h3>
        </div>
        <div className="space-y-3">
          {safetyTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-success-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Check" size={14} className="text-success" />
              </div>
              <p className="text-sm text-text-secondary">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-accent-50 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={18} className="text-accent mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-accent mb-1">
              Important Note
            </p>
            <p className="text-xs text-text-secondary">
              In case of wildlife encounters, remain calm and contact resort staff immediately. Do not attempt to approach or feed any wild animals. Our trained staff are available 24/7 to assist with any emergency situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;