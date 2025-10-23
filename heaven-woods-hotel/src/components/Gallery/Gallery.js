// components/Gallery/Gallery.js
import React, { useState } from 'react';
import { GalleryGrid, Lightbox, GalleryFilter } from '../components';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/room-1.jpg',
      category: 'rooms',
      title: 'Deluxe Room Interior'
    },
    {
      id: 2,
      src: '/images/gallery/pool-1.jpg',
      category: 'amenities',
      title: 'Swimming Pool'
    },
    {
      id: 3,
      src: '/images/gallery/restaurant-1.jpg',
      category: 'dining',
      title: 'Restaurant'
    },
    // Add more images
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <h1>Photo Gallery</h1>
      
      <GalleryFilter 
        categories={['all', 'rooms', 'amenities', 'dining', 'events']}
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      
      <GalleryGrid 
        images={filteredImages}
        onImageClick={setSelectedImage}
      />
      
      {selectedImage && (
        <Lightbox 
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => {/* Navigate to next */}}
          onPrev={() => {/* Navigate to previous */}}
        />
      )}
    </div>
  );
};