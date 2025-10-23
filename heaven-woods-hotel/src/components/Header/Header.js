// components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HeaderContainer, 
  Nav, 
  Logo, 
  NavMenu, 
  MobileMenu,
  CTAButton,
  NavLink 
} from './Header.styles';
import { FaHotel, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms & Suites' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo>
        <FaHotel className="logo-icon" />
        <div>
          <h2>HEAVEN WOODS</h2>
          <span>Gulu City, Uganda</span>
        </div>
      </Logo>
      
      <Nav>
        <NavMenu isOpen={isMenuOpen}>
          {navItems.map(item => (
            <NavLink 
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <CTAButton to="/booking" onClick={() => setIsMenuOpen(false)}>
            Book Now
          </CTAButton>
        </NavMenu>
        
        <MobileMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;