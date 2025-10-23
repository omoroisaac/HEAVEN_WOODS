// pages/Rooms.js
import React, { useState, useMemo } from 'react';
import { RoomCard, RoomFilter } from '../components';
import { RoomGrid, FilterContainer, ResultsInfo } from './Rooms.styles';

const Rooms = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    amenities: [],
    roomType: 'all'
  });

  const [rooms] = useState([
    {
      id: 1,
      name: "Standard Room",
      type: "standard",
      price: 80,
      image: "/images/standard-room.jpg",
      amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "En-suite Bathroom"],
      description: "Comfortable and affordable accommodation with all essential amenities",
      size: "25 m²",
      capacity: "2 Adults",
      available: true
    },
    {
      id: 2,
      name: "Deluxe Room",
      type: "deluxe",
      price: 120,
      image: "/images/deluxe-room.jpg",
      amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Balcony"],
      description: "Spacious room with modern amenities and beautiful views",
      size: "35 m²",
      capacity: "2 Adults, 1 Child",
      available: true
    },
    {
      id: 3,
      name: "Executive Suite",
      type: "suite",
      price: 200,
      image: "/images/executive-suite.jpg",
      amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Jacuzzi", "Living Area"],
      description: "Luxurious suite with separate living area and premium amenities",
      size: "55 m²",
      capacity: "3 Adults",
      available: true
    },
    {
      id: 4,
      name: "Family Suite",
      type: "suite",
      price: 180,
      image: "/images/family-suite.jpg",
      amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Two Bedrooms", "Kitchenette"],
      description: "Perfect for families with connected rooms and extra space",
      size: "60 m²",
      capacity: "4 Adults, 2 Children",
      available: true
    }
  ]);

  const filteredRooms = useMemo(() => {
    return rooms.filter(room => {
      const inPriceRange = room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1];
      const matchesType = filters.roomType === 'all' || room.type === filters.roomType;
      
      const hasAmenities = filters.amenities.length === 0 || 
        filters.amenities.every(amenity => room.amenities.includes(amenity));
      
      return inPriceRange && matchesType && hasAmenities && room.available;
    });
  }, [rooms, filters]);

  return (
    <div className="rooms-page">
      <div className="page-header">
        <h1>Rooms & Suites</h1>
        <p>Choose from our selection of beautifully appointed accommodations</p>
      </div>

      <FilterContainer>
        <RoomFilter filters={filters} onFilterChange={setFilters} />
      </FilterContainer>

      <ResultsInfo>
        <p>Showing {filteredRooms.length} of {rooms.length} rooms</p>
      </ResultsInfo>

      <RoomGrid>
        {filteredRooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </RoomGrid>

      {filteredRooms.length === 0 && (
        <div className="no-results">
          <h3>No rooms match your criteria</h3>
          <p>Try adjusting your filters to see more options</p>
        </div>
      )}
    </div>
  );
};

export default Rooms;