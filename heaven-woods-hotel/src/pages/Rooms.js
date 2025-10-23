import React from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: 80,
      description: "Comfortable and affordable accommodation",
      amenities: ["Free WiFi", "Air Conditioning", "TV"]
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 120,
      description: "Spacious room with modern amenities",
      amenities: ["Free WiFi", "Air Conditioning", "TV", "Mini Bar"]
    },
    {
      id: 3,
      name: "Executive Suite",
      price: 200,
      description: "Luxurious suite with premium amenities",
      amenities: ["Free WiFi", "Air Conditioning", "TV", "Mini Bar", "Jacuzzi"]
    }
  ];

  return (
    <div className="rooms-page">
      <div className="page-header">
        <h1>Rooms & Suites</h1>
        <p>Choose from our selection of beautifully appointed accommodations</p>
      </div>

      <div className="rooms-grid">
        {rooms.map(room => (
          <div key={room.id} className="room-card">
            <div className="room-image">
              <img 
                src={`https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`} 
                alt={room.name}
              />
            </div>
            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="room-price">${room.price} / night</p>
              <p className="room-description">{room.description}</p>
              <ul className="room-amenities">
                {room.amenities.map((amenity, index) => (
                  <li key={index}>✓ {amenity}</li>
                ))}
              </ul>
              <Link to="/booking" className="book-button">Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;