import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: 'standard',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully! We will confirm your reservation shortly.');
    navigate('/');
  };

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="booking-page">
      <div className="booking-header">
        <h1>Book Your Stay</h1>
        <p>Reserve your perfect room at Heaven Woods</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-section">
          <h2>Booking Details</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Check-in Date</label>
              <input
                type="date"
                name="checkIn"
                value={bookingData.checkIn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Check-out Date</label>
              <input
                type="date"
                name="checkOut"
                value={bookingData.checkOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Adults</label>
              <select
                name="adults"
                value={bookingData.adults}
                onChange={handleChange}
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Children</label>
              <select
                name="children"
                value={bookingData.children}
                onChange={handleChange}
              >
                {[0, 1, 2, 3].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Room Type</label>
            <select
              name="roomType"
              value={bookingData.roomType}
              onChange={handleChange}
            >
              <option value="standard">Standard Room - $80/night</option>
              <option value="deluxe">Deluxe Room - $120/night</option>
              <option value="suite">Executive Suite - $200/night</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h2>Guest Information</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={bookingData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-booking">Complete Booking</button>
      </form>
    </div>
  );
};

export default Booking;