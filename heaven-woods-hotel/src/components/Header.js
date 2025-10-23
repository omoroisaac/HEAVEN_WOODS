import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>HEAVEN WOODS</h2>
        <span>Gulu City, Uganda</span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/booking" className="cta-button">Book Now</Link>
      </nav>
    </header>
  );
};

export default Header;