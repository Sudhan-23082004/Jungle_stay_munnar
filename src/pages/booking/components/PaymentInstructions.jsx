import React from 'react';
import Icon from '../../../components/AppIcon';

const PaymentInstructions = () => {
  const paymentMethods = [
    {
      name: "Razorpay",
      icon: "CreditCard",
      description: "Secure card payments"
    },
    {
      name: "UPI",
      icon: "Smartphone",
      description: "Quick UPI payments"
    },
    {
      name: "Net Banking",
      icon: "Building2",
      description: "Direct bank transfer"
    },
    {
      name: "Wallet",
      icon: "Wallet",
      description: "Digital wallet payments"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 rounded-xl p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={24} className="text-primary-foreground" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-heading font-semibold text-primary mb-2">
            Secure Payment Process
          </h3>
          <p className="text-text-secondary text-sm mb-4">
            After submitting your booking request, you'll receive payment instructions via email within 2 hours. Complete your payment to confirm your reservation.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center space-x-2 bg-background/80 rounded-lg p-3">
                <Icon name={method.icon} size={16} className="text-primary" />
                <div>
                  <p className="text-xs font-medium text-text-primary">{method.name}</p>
                  <p className="text-xs text-text-muted">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInstructions;