// pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import RoomPreview from '../components/RoomPreview/RoomPreview';
import AmenitiesGrid from '../components/AmenitiesGrid/AmenitiesGrid';
import Testimonials from '../components/Testimonials/Testimonials';
import LocalAttractions from '../components/LocalAttractions/LocalAttractions';

const Home = () => {
  return (
    <div>
      <Hero 
        title="Welcome to Heaven Woods"
        subtitle="Luxury Accommodation in the Heart of Gulu City, Uganda"
        backgroundImage="/images/hero-bg.jpg"
        ctaText="Book Your Stay"
        ctaLink="/booking"
        secondaryCtaText="Explore Rooms"
        secondaryCtaLink="/rooms"
      />
      
      <Section 
        title="About Heaven Woods" 
        subtitle="Experience Ugandan Hospitality at Its Finest"
        bgColor="light"
      >
        <div className="about-content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Nestled in the vibrant city of Gulu, Heaven Woods offers a perfect blend 
            of modern luxury and authentic Ugandan charm. Our hotel provides a serene 
            escape with world-class amenities, exquisite dining, and unparalleled 
            service that reflects the warm hospitality of Northern Uganda.
          </motion.p>
          
          <div className="features-grid">
            <div className="feature">
              <h4>Prime Location</h4>
              <p>Centrally located in Gulu City with easy access to local attractions</p>
            </div>
            <div className="feature">
              <h4>Cultural Experience</h4>
              <p>Immerse yourself in the rich culture of Northern Uganda</p>
            </div>
            <div className="feature">
              <h4>Sustainable Tourism</h4>
              <p>Committed to eco-friendly practices and supporting local communities</p>
            </div>
          </div>
        </div>
      </Section>

      <RoomPreview />
      
      <Section title="Our Amenities" subtitle="Everything You Need for a Perfect Stay">
        <AmenitiesGrid />
      </Section>

      <Testimonials />
      
      <LocalAttractions />
    </div>
  );
};

export default Home;