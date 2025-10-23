import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>HEAVEN WOODS</h3>
          <p>Luxury accommodation in Gulu City, Uganda</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@heavenwoods.com</p>
          <p>Phone: +256 123 456 789</p>
        </div>
        <div className="footer-section">
          <h4>Address</h4>
          <p>Plot 123, Gulu City</p>
          <p>Northern Uganda</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Heaven Woods Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;