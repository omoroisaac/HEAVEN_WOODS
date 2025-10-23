// pages/Booking.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingForm, BookingSummary, PaymentSection } from '../components';
import { BookingContainer, BookingGrid, LoadingSpinner } from './Booking.styles';

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [availableRooms, setAvailableRooms] = useState([]);
  
  const [bookingData, setBookingData] = useState({
    // Step 1: Dates & Guests
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: '',
    
    // Step 2: Guest Information
    guestInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: 'Uganda',
      specialRequests: ''
    },
    
    // Step 3: Payment
    payment: {
      method: 'credit-card',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      nameOnCard: ''
    }
  });

  // Check room availability when dates change
  useEffect(() => {
    if (bookingData.checkIn && bookingData.checkOut) {
      checkAvailability();
    }
  }, [bookingData.checkIn, bookingData.checkOut]);

  const checkAvailability = async () => {
    setLoading(true);
    try {
      // Simulate API call
      const response = await fetch('/api/rooms/availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          checkIn: bookingData.checkIn,
          checkOut: bookingData.checkOut,
          guests: bookingData.adults + bookingData.children
        })
      });
      
      const available = await response.json();
      setAvailableRooms(available);
    } catch (error) {
      console.error('Error checking availability:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate booking submission
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      
      if (response.ok) {
        const result = await response.json();
        navigate('/booking-confirmation', { 
          state: { bookingId: result.bookingId, bookingData }
        });
      }
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    const selectedRoom = availableRooms.find(room => room.type === bookingData.roomType);
    if (!selectedRoom) return 0;
    
    const nights = Math.ceil(
      (new Date(bookingData.checkOut) - new Date(bookingData.checkIn)) / (1000 * 60 * 60 * 24)
    );
    
    return selectedRoom.price * nights;
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (loading) return <LoadingSpinner>Processing...</LoadingSpinner>;

  return (
    <BookingContainer>
      <div className="booking-header">
        <h1>Book Your Stay</h1>
        <div className="step-indicator">
          <span className={step >= 1 ? 'active' : ''}>1. Dates & Room</span>
          <span className={step >= 2 ? 'active' : ''}>2. Guest Info</span>
          <span className={step >= 3 ? 'active' : ''}>3. Payment</span>
        </div>
      </div>

      <BookingGrid>
        <div className="booking-form-section">
          <form onSubmit={handleBookingSubmit}>
            {step === 1 && (
              <BookingForm 
                bookingData={bookingData}
                availableRooms={availableRooms}
                onDataChange={setBookingData}
                onNext={nextStep}
              />
            )}
            
            {step === 2 && (
              <GuestInfoForm 
                guestInfo={bookingData.guestInfo}
                onDataChange={(guestInfo) => setBookingData(prev => ({...prev, guestInfo}))}
                onNext={nextStep}
                onBack={prevStep}
              />
            )}
            
            {step === 3 && (
              <PaymentSection 
                payment={bookingData.payment}
                onDataChange={(payment) => setBookingData(prev => ({...prev, payment}))}
                onBack={prevStep}
                onSubmit={handleBookingSubmit}
              />
            )}
          </form>
        </div>

        <div className="booking-summary-section">
          <BookingSummary 
            bookingData={bookingData}
            total={calculateTotal()}
            availableRooms={availableRooms}
          />
        </div>
      </BookingGrid>
    </BookingContainer>
  );
};

export default Booking;