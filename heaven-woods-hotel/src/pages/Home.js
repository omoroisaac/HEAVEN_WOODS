import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Heaven Woods</h1>
          <p>Luxury Accommodation in the Heart of Gulu City, Uganda</p>
          <div className="hero-buttons">
            <Link to="/booking" className="cta-primary">Book Your Stay</Link>
            <Link to="/rooms" className="cta-secondary">Explore Rooms</Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Heaven Woods</h2>
          <p>
            Nestled in the vibrant city of Gulu, Heaven Woods offers a perfect blend 
            of modern luxury and authentic Ugandan charm. Experience unparalleled 
            hospitality in the heart of Northern Uganda.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose Heaven Woods?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Prime Location</h3>
              <p>Centrally located in Gulu City with easy access to local attractions</p>
            </div>
            <div className="feature">
              <h3>Luxury Rooms</h3>
              <p>Spacious accommodations with modern amenities and comfort</p>
            </div>
            <div className="feature">
              <h3>Cultural Experience</h3>
              <p>Immerse yourself in the rich culture of Northern Uganda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;