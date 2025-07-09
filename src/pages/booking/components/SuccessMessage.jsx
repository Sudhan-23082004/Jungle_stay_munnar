import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const SuccessMessage = ({ bookingData, onNewBooking }) => {
  const generateBookingId = () => {
    return `JTC${Date.now().toString().slice(-6)}`;
  };

  const bookingId = generateBookingId();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-background rounded-xl shadow-organic-pronounced p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={40} className="text-success-foreground" />
        </div>

        {/* Success Message */}
        <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Booking Request Submitted Successfully!
        </h2>
        
        <p className="text-text-secondary mb-8">
          Thank you for choosing Junglestay Tent Cottage. Your booking request has been received 
          and we'll send you payment instructions within 2 hours.
        </p>

        {/* Booking Details Card */}
        <div className="bg-primary-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center space-x-2">
            <Icon name="FileText" size={20} />
            <span>Booking Details</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3">
              <div>
                <span className="text-text-muted">Booking ID:</span>
                <p className="font-medium text-text-primary">{bookingId}</p>
              </div>
              <div>
                <span className="text-text-muted">Guest Name:</span>
                <p className="font-medium text-text-primary">{bookingData.name}</p>
              </div>
              <div>
                <span className="text-text-muted">Email:</span>
                <p className="font-medium text-text-primary">{bookingData.email}</p>
              </div>
              <div>
                <span className="text-text-muted">Phone:</span>
                <p className="font-medium text-text-primary">{bookingData.phone}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-text-muted">Accommodation:</span>
                <p className="font-medium text-text-primary">{bookingData.accommodationLabel}</p>
              </div>
              <div>
                <span className="text-text-muted">Guests:</span>
                <p className="font-medium text-text-primary">{bookingData.guests}</p>
              </div>
              <div>
                <span className="text-text-muted">Check-in:</span>
                <p className="font-medium text-text-primary">{bookingData.checkinFormatted}</p>
              </div>
              <div>
                <span className="text-text-muted">Check-out:</span>
                <p className="font-medium text-text-primary">{bookingData.checkoutFormatted}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-200">
            <div className="flex justify-between items-center">
              <span className="text-text-muted">Duration:</span>
              <span className="font-semibold text-text-primary">
                {bookingData.nights} {bookingData.nights === 1 ? 'night' : 'nights'}
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-accent-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="text-lg font-semibold text-accent-600 mb-4 flex items-center space-x-2">
            <Icon name="Clock" size={20} />
            <span>What's Next?</span>
          </h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-600 text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-text-primary">Payment Instructions</p>
                <p className="text-text-secondary">
                  You'll receive detailed payment instructions via email within 2 hours
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-600 text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-text-primary">Complete Payment</p>
                <p className="text-text-secondary">
                  Pay securely using Razorpay, UPI, or Net Banking to confirm your booking
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent-600 text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-text-primary">Booking Confirmation</p>
                <p className="text-text-secondary">
                  Receive your confirmed booking details and check-in instructions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-secondary-50 rounded-lg p-4 mb-8">
          <p className="text-sm text-text-secondary mb-2">
            Have questions about your booking?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-secondary-600" />
              <span className="text-text-primary font-medium">+91 90801 00081</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-secondary-600" />
              <span className="text-text-primary font-medium">mashwin789@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Button
            variant="primary"
            size="lg"
            iconName="Home"
            iconPosition="left"
            className="flex-1"
          >
            <Link to="/homepage" className="text-primary-foreground">
              Back to Home
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            iconName="Building"
            iconPosition="left"
            className="flex-1"
          >
            <Link to="/accommodations" className="text-primary">
              View Accommodations
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            size="lg"
            iconName="Plus"
            iconPosition="left"
            onClick={onNewBooking}
            className="flex-1"
          >
            New Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;