// pages/Contact.js
import React, { useState } from 'react';
import { ContactForm, ContactInfo, Map } from '../components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const hotelInfo = {
    address: "Plot 123, Gulu City, Northern Uganda",
    phone: "+256 123 456 789",
    email: "info@heavenwoods.com",
    coordinates: { lat: 2.7746, lng: 32.2980 } // Gulu coordinates
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with Heaven Woods Hotel</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <ContactForm 
            formData={formData}
            onChange={setFormData}
            onSubmit={handleSubmit}
          />
        </div>

        <div className="contact-info-section">
          <ContactInfo {...hotelInfo} />
          <Map 
            coordinates={hotelInfo.coordinates}
            zoom={15}
            markerTitle="Heaven Woods Hotel"
          />
        </div>
      </div>
    </div>
  );
};