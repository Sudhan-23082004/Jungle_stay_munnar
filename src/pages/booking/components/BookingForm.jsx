import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const generateBookingId = () => {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `BK-${timestamp}-${random}`;
};

const BookingForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    checkin: '',
    checkout: '',
    accommodation: 'luxury-tent'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const accommodationTypes = [
    { value: 'luxury-tent', label: 'Luxury Tent - ₹3,500/night' },
    { value: 'family-tent', label: 'Family Tent - ₹4,500/night' },
    { value: 'eco-cottage', label: 'Eco Cottage - ₹5,500/night' },
    { value: 'premium-cottage', label: 'Premium Cottage - ₹7,500/night' },
    { value: 'group-package', label: 'Group Package - ₹15,000/night' }
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.checkin) newErrors.checkin = 'Check-in date is required';
    if (!formData.checkout) newErrors.checkout = 'Check-out date is required';

    if (formData.checkin && formData.checkout) {
      const checkinDate = new Date(formData.checkin);
      const checkoutDate = new Date(formData.checkout);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (checkinDate < today) newErrors.checkin = 'Check-in date cannot be in the past';
      if (checkoutDate <= checkinDate) newErrors.checkout = 'Check-out must be after check-in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit', month: '2-digit', year: 'numeric'
    });
  };

  const calculateNights = () => {
    if (formData.checkin && formData.checkout) {
      const checkinDate = new Date(formData.checkin);
      const checkoutDate = new Date(formData.checkout);
      const diffTime = checkoutDate - checkinDate;
      return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
    }
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const bookingId = generateBookingId();
    const formPayload = {
      bookingId,
      ...formData,
      nights: calculateNights(),
      checkinFormatted: formatDate(formData.checkin),
      checkoutFormatted: formatDate(formData.checkout),
      accommodationLabel: accommodationTypes.find(acc => acc.value === formData.accommodation)?.label
    };

    try {
      const response = await fetch("https://formspree.io/f/mblyvgba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formPayload)
      });

      if (response.ok) {
        onSubmitSuccess(formPayload);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while sending your booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nights = calculateNights();

  return (
    <div className="bg-background rounded-xl shadow-organic-medium p-6 md:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} className="text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-text-primary">Book Your Stay</h2>
          <p className="text-sm text-text-secondary">Fill in your details to reserve your nature getaway</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-text-primary border-b border-border-muted pb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <Input type="text" name="name" value={formData.name} onChange={handleInputChange}
                placeholder="Your name" className={errors.name ? 'border-error' : ''} />
              {errors.name && <p className="text-error text-xs mt-1"><Icon name="AlertCircle" size={12} /> {errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange}
                placeholder="your.email@example.com" className={errors.email ? 'border-error' : ''} />
              {errors.email && <p className="text-error text-xs mt-1"><Icon name="AlertCircle" size={12} /> {errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number *</label>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
              placeholder="+91 98765 43210" className={errors.phone ? 'border-error' : ''} />
            {errors.phone && <p className="text-error text-xs mt-1"><Icon name="AlertCircle" size={12} /> {errors.phone}</p>}
          </div>
        </div>

        {/* Booking Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-text-primary border-b border-border-muted pb-2">
            Booking Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Number of Guests *</label>
              <select name="guests" value={formData.guests} onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-lg">
                {guestOptions.map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Check-in Date *</label>
              <Input type="date" name="checkin" value={formData.checkin} onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]} className={errors.checkin ? 'border-error' : ''} />
              {errors.checkin && <p className="text-error text-xs mt-1"><Icon name="AlertCircle" size={12} /> {errors.checkin}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Check-out Date *</label>
              <Input type="date" name="checkout" value={formData.checkout} onChange={handleInputChange}
                min={formData.checkin || new Date().toISOString().split('T')[0]} className={errors.checkout ? 'border-error' : ''} />
              {errors.checkout && <p className="text-error text-xs mt-1"><Icon name="AlertCircle" size={12} /> {errors.checkout}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Accommodation Type *</label>
            <select name="accommodation" value={formData.accommodation} onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg">
              {accommodationTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          {/* Summary */}
          {nights > 0 && (
            <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
              <h4 className="font-medium mb-2 flex items-center"><Icon name="Calculator" size={16} /> Booking Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span>Duration:</span><span>{nights} {nights === 1 ? 'night' : 'nights'}</span></div>
                <div className="flex justify-between"><span>Guests:</span><span>{formData.guests}</span></div>
                <div className="flex justify-between"><span>Check-in:</span><span>{formatDate(formData.checkin)}</span></div>
                <div className="flex justify-between"><span>Check-out:</span><span>{formatDate(formData.checkout)}</span></div>
              </div>
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting} iconName="Send" iconPosition="right">
            {isSubmitting ? 'Submitting Request...' : 'Submit Booking Request'}
          </Button>
          <p className="text-xs text-text-muted text-center mt-3">
            By submitting, you agree to our terms. You'll receive payment details via email shortly.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
